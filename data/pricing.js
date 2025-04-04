// pricing table icon
import pricingIcon1 from "@/public/images/icons/pricing-icon-1.svg";
import pricingIcon2 from "@/public/images/icons/pricing-icon-2.svg";
import pricingIcon3 from "@/public/images/icons/pricing-icon-3.svg";

export const pricingPlans = [{
    id: 1,
    title: "Per Member, Per Month",
    price: "Basic - ₹2000",
    icon: pricingIcon1,
    features: [
      "1-5 Modules",
      "1-5 Users",
      "No credit card required",
      "Perfect for individuals and startups to kickstart domain"
    ]
  },
  {
    id: 2,
    title: "Per Member, Per Month",
    price: "Enterprise- ₹1500",
    icon: pricingIcon2,
    features: [
      "1-15 Modules",
      "1-25 Users",
      "No credit card required",
      "Tailored for large organizations with advanced needs"
    ]
  },
  {
    id: 3,
    title: "Per Member, Per Month",
    price: "Ultimate - ₹0",
    icon: pricingIcon3,
    features: [
      "Unlimited Modules",
      "Unlimited Customization",
      "No credit card required",
      "Unlimited access for complete customization and scaling"
    ]
  }
];