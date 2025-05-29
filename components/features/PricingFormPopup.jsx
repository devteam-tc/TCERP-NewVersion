"use client";
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { auth, db } from '../../firebaseConfig';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Import sub-components
import AuthStep from './pricing-form/AuthStep';
import ModuleSelection from './pricing-form/ModuleSelection';
import ThankYouModal from './pricing-form/ThankYouModal';
import { MODULES, CUSTOMIZATION_LEVELS } from './pricing-form/constants';

const PricingFormPopup = ({ 
  show, 
  onHide, 
  isAuthenticated, 
  showDetailsForm,
  onAuthSuccess 
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    countryCode: '',
    email: '',
    companyName: '',
    industry: '',
    customIndustry: '',
    businessType: '',
    message: '',
    selectedModules: {},
    customizationLevel: 1,
    billingCycle: 'monthly',
    currency: 'INR'
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [totalPrice, setTotalPrice] = useState({
    base: 0,
    customization: 0,
    total: 0,
    percentage: 10
  });
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loadingRates, setLoadingRates] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const router = useRouter();

  // Add effect to handle body overflow and prevent auto-show
  useEffect(() => {
    if (show) {
      // Check if we're returning to the page
      const hasSubmitted = localStorage.getItem('formSubmitted');
      if (hasSubmitted) {
        onHide();
        return;
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show, onHide]);

  // Reset states when component unmounts or show changes
  useEffect(() => {
    if (!show) {
      setShowThankYou(false);
      setHasSubmitted(false);
    }
  }, [show]);

  // Fetch exchange rates
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchExchangeRates = async () => {
      try {
        setLoadingRates(true);
        
        const response = await axios.get('https://open.er-api.com/v6/latest/INR', {
          signal: controller.signal,
          timeout: 5000,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (response.data && response.data.result === 'success' && response.data.rates) {
          const exchangeRates = {
            ...response.data.rates,
            INR: 1 // Add INR as base currency
          };
          
          if (isMounted) {
            setExchangeRates(exchangeRates);
            // Store rates in localStorage with timestamp
            localStorage.setItem('exchangeRates', JSON.stringify({
              rates: exchangeRates,
              timestamp: Date.now(),
              date: response.data.time_last_update_utc
            }));
          }
        } else {
          throw new Error('Invalid response from exchange rate API');
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request cancelled:', error.message);
        } else {
          console.error('Error fetching exchange rates:', error);
          
          // Try to get cached rates from localStorage
          const cachedRates = localStorage.getItem('exchangeRates');
          if (cachedRates) {
            const { rates, timestamp } = JSON.parse(cachedRates);
            // Use cached rates if they're less than 1 hour old
            if (Date.now() - timestamp < 3600000) {
              setExchangeRates(rates);
              toast.warning('Using cached exchange rates. Please refresh the page to get latest rates.');
              return;
            }
          }

          toast.error('Failed to fetch exchange rates. Using default rates.');
          setExchangeRates({
            INR: 1,
            USD: 0.011705 // Current rate from the API
          });
        }
      } finally {
        if (isMounted) {
          setLoadingRates(false);
        }
      }
    };

    fetchExchangeRates();
    // Refresh rates every 5 minutes
    const interval = setInterval(fetchExchangeRates, 300000);

    return () => {
      isMounted = false;
      controller.abort();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setFormData(prev => ({ ...prev, email: user.email }));
        // Check if we have stored form data
        const storedData = localStorage.getItem('pricingFormData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setFormData(prev => ({
            ...prev,
            ...parsedData,
            email: user.email // Keep the current user's email
          }));
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Calculate total price whenever relevant fields change
  useEffect(() => {
    if (!exchangeRates) return;

    let baseTotal = 0;
    
    // Calculate module costs
    Object.entries(formData.selectedModules).forEach(([moduleId, userCount]) => {
      if (userCount > 0) {
        const modulePrice = MODULES[moduleId].basePrice * userCount;
        baseTotal += modulePrice;
      }
    });

    // Get customization percentage based on selected level
    const selectedLevel = CUSTOMIZATION_LEVELS.find(level => level.level === parseInt(formData.customizationLevel));
    const customizationPercentage = selectedLevel ? selectedLevel.percentage : 10;

    // Calculate customization amount
    let customizationAmount = baseTotal * (customizationPercentage / 100);
    
    // Calculate total before yearly discount
    let total = baseTotal + customizationAmount;

    // Apply yearly discount if yearly billing
    if (formData.billingCycle === 'yearly') {
      total = total * 12 * 0.8; // 20% discount for yearly billing
      baseTotal = baseTotal * 12; // Base price for yearly billing
      customizationAmount = customizationAmount * 12; // Customization for yearly billing
    }

    // Convert to selected currency
    if (formData.currency !== 'INR') {
      // Convert from INR to selected currency
      total = total * exchangeRates[formData.currency];
      baseTotal = baseTotal * exchangeRates[formData.currency];
      customizationAmount = customizationAmount * exchangeRates[formData.currency];
    }

    setTotalPrice({
      base: baseTotal,
      customization: customizationAmount,
      total: total,
      percentage: customizationPercentage
    });
  }, [formData.selectedModules, formData.customizationLevel, 
      formData.billingCycle, formData.currency, exchangeRates]);

  // Add useEffect for auto-closing the thank you popup
  useEffect(() => {
    let timer;
    if (showThankYou) {
      timer = setTimeout(() => {
        setShowThankYou(false);
      }, 5000); // Close after 5 seconds
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showThankYou]);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      const userDoc = await getDoc(doc(db, 'pricing_form_submissions', user.uid));
      if (userDoc.exists()) {
        toast.success('Welcome back!');
        onHide();
      } else {
        // Just update the form data with email, don't proceed to next step
        setFormData(prev => ({ ...prev, email: user.email }));
      }
    } catch (error) {
      toast.error('Error signing in with Google: ' + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please sign in with Google first');
      return;
    }

    setLoading(true);
    try {
      // Get the lead ID from localStorage
      const leadId = localStorage.getItem('currentLeadId');
      if (!leadId) {
        throw new Error('Lead information not found');
      }

      // Get the lead document
      const leadDoc = await getDoc(doc(db, 'leads', leadId));
      if (!leadDoc.exists()) {
        throw new Error('Lead information not found');
      }

      const leadData = leadDoc.data();

      // Prepare the quotation data
      const quotationData = {
        ...leadData,
        selectedModules: formData.selectedModules,
        customizationLevel: formData.customizationLevel,
        billingCycle: formData.billingCycle,
        currency: formData.currency,
        totalPrice: {
          ...totalPrice,
          total: totalPrice.total * 0.8,
          discount: totalPrice.total * 0.2
        },
        exchangeRates,
        submittedAt: new Date(),
        userId: user.uid,
        status: 'pending',
        updatedAt: new Date()
      };

      // Store in quotations collection
      await setDoc(doc(db, 'quotations', leadId), quotationData);

      // Update lead status
      await setDoc(doc(db, 'leads', leadId), {
        ...leadData,
        status: 'quoted',
        updatedAt: new Date()
      }, { merge: true });

      // Store submission in user's document
      await setDoc(doc(db, 'pricing_form_submissions', user.uid), {
        submittedAt: new Date(),
        leadId: leadId
      });

      // Set form submitted flag in localStorage
      localStorage.setItem('formSubmitted', 'true');

      // Clear all stored data
      localStorage.removeItem('currentLeadId');
      localStorage.removeItem('pricingFormData');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('showDetailsForm');
      
      setShowThankYou(true);
      onHide();
    } catch (error) {
      console.error('Error submitting quotation:', error);
      toast.error('Error submitting form: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value, country) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value,
      countryCode: `+${country.dialCode}`
    }));
  };

  const handleModuleChange = (moduleId, userCount) => {
    setFormData(prev => ({
      ...prev,
      selectedModules: {
        ...prev.selectedModules,
        [moduleId]: parseInt(userCount) || 0
      }
    }));
  };

  const handleUserIncrement = (moduleId, increment) => {
    const currentCount = formData.selectedModules[moduleId] || 0;
    const newCount = Math.max(0, currentCount + increment);
    handleModuleChange(moduleId, newCount);
  };

  return (
    <>
      <Modal 
        show={show} 
        onHide={onHide} 
        backdrop="static" 
        keyboard={false} 
        centered
        className="pricing-form-popup"
        size="xl"
      >
        <Modal.Header>
          <Modal.Title>
            {!isAuthenticated ? 'Sign In & Basic Details Required' : 'Select Modules & Customization'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isAuthenticated ? (
            <AuthStep 
              onGoogleSignIn={handleGoogleSignIn}
              formData={formData}
              handleChange={handleChange}
              handlePhoneChange={handlePhoneChange}
              onNextStep={onAuthSuccess}
            />
          ) : (
            <ModuleSelection
              formData={formData}
              handleChange={handleChange}
              handleModuleChange={handleModuleChange}
              handleUserIncrement={handleUserIncrement}
              totalPrice={totalPrice}
              exchangeRates={exchangeRates}
              loadingRates={loadingRates}
              onSubmit={handleSubmit}
              loading={loading}
            />
          )}
        </Modal.Body>
      </Modal>
      <ThankYouModal 
        show={showThankYou} 
        onHide={() => {
          setShowThankYou(false);
          localStorage.removeItem('formSubmitted');
        }} 
      />
    </>
  );
};

export default PricingFormPopup; 