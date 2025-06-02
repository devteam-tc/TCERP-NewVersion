import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { MODULES, CUSTOMIZATION_LEVELS, CURRENCY_SYMBOLS } from './constants';

const ModuleSelection = ({
  formData,
  handleChange,
  handleModuleChange,
  handleUserIncrement,
  totalPrice,
  exchangeRates,
  loadingRates,
  onPrev,
  onSubmit,
  loading
}) => {
  const formatPrice = (price, currency) => {
    const symbol = CURRENCY_SYMBOLS[currency];
    return `${symbol}${price.toFixed(2)}`;
  };

  return (
    <div className="module-selection mb-4">
      <div className="text-center mb-4">
        <h5 className="mb-3">Select Modules and Users</h5>
        <h6 style={{ maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}>
          Choose the features that align perfectly with your business goals and experience the flexibility of a customizable ERP system. Whether you're scaling operations or streamlining workflows, our ERP adapts to your unique needs.
        </h6>
      </div>

      <div className="mb-4">
        <Row className="justify-content-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="text-center">
              <Form.Label className="d-block mb-2">Billing Cycle</Form.Label>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className={formData.billingCycle === 'monthly' ? 'text-primary' : ''}>Monthly</span>
                <Form.Check
                  type="switch"
                  id="billingCycle"
                  name="billingCycle"
                  checked={formData.billingCycle === 'yearly'}
                  onChange={(e) => handleChange({
                    target: {
                      name: 'billingCycle',
                      value: e.target.checked ? 'yearly' : 'monthly'
                    }
                  })}
                  className="custom-switch"
                />
                <span className={formData.billingCycle === 'yearly' ? 'text-primary' : ''}>Yearly</span>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Form.Label className="d-block mb-2">Currency</Form.Label>
              <div className="d-flex justify-content-center gap-3">
                {Object.entries(CURRENCY_SYMBOLS).map(([code, symbol]) => (
                  <Form.Check
                    key={code}
                    type="radio"
                    id={`currency-${code}`}
                    name="currency"
                    label={`${code} (${symbol})`}
                    value={code}
                    checked={formData.currency === code}
                    onChange={handleChange}
                    className="custom-radio"
                    disabled={loadingRates}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th className="module-name">Module Name</th>
              <th className="module-price">Pricing</th>
              <th className="module-users">Users</th>
              <th className="module-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(MODULES).map(([moduleId, module]) => {
              const userCount = formData.selectedModules[moduleId] || 0;
              let basePrice = module.basePrice;
              let moduleTotal = basePrice * userCount;

              if (formData.currency !== 'INR') {
                basePrice = basePrice * exchangeRates[formData.currency];
                moduleTotal = moduleTotal * exchangeRates[formData.currency];
              }

              return (
                <tr key={moduleId}>
                  <td className="module-name text-break">{module.name}</td>
                  <td className="module-price">
                    <div className="d-flex flex-column">
                      <span>{formatPrice(basePrice, formData.currency)}</span>
                      {formData.currency !== 'INR' && (
                        <small className="text-muted">
                          (₹{module.basePrice} INR)
                        </small>
                      )}
                    </div>
                  </td>
                  <td className="module-users">
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleUserIncrement(moduleId, -1)}
                        className="px-2 py-1"
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        min="0"
                        value={userCount}
                        onChange={(e) => handleModuleChange(moduleId, e.target.value)}
                        placeholder="0"
                        style={{ width: '60px' }}
                        className="text-center"
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleUserIncrement(moduleId, 1)}
                        className="px-2 py-1"
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="module-total">
                    <div className="d-flex flex-column">
                      <span>{formatPrice(moduleTotal, formData.currency)}</span>
                      {formData.currency !== 'INR' && (
                        <small className="text-muted">
                          (₹{module.basePrice * userCount} INR)
                        </small>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Row className="justify-content-center">
          <Col md={6} className="order-md-2">
            <div className="total-price">
              <div className="d-flex justify-content-between mb-2">
                <span>Base Price:</span>
                <span>{formatPrice(totalPrice.base, formData.currency)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Customization ({totalPrice.percentage}%):</span>
                <span>{formatPrice(totalPrice.customization, formData.currency)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Special Discount (20%):</span>
                <span className="text-success">-{formatPrice(totalPrice.total * 0.2, formData.currency)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 border-top pt-2">
                <strong>Total Price:</strong>
                <strong>{formatPrice(totalPrice.total * 0.8, formData.currency)}</strong>
              </div>
              <small className="d-block">
                {formData.billingCycle === 'yearly' ? 'Per Year' : 'Per Month'}
              </small>
              {formData.currency !== 'INR' && (
                <small className="text-muted d-block">
                  (₹{(totalPrice.total * 0.8 / exchangeRates[formData.currency]).toFixed(2)} INR)
                </small>
              )}
              <div className="mt-2">
                <small>
                  * Taxes and other applicable charges will be added as per your local regulations
                </small>
              </div>
            </div>
          </Col>
          <Col md={6} className="order-md-1">
            <div className="customization-section p-3 border rounded">
              <h6 className="mb-3">Customization Level</h6>
              <Form.Select
                name="customizationLevel"
                value={formData.customizationLevel}
                onChange={handleChange}
                className="mb-3"
              >
                {CUSTOMIZATION_LEVELS.map(level => (
                  <option key={level.level} value={level.level}>
                    {level.name} (+{level.percentage}%)
                  </option>
                ))}
              </Form.Select>
              <div className="customization-info">
                {(formData.customizationLevel === 1 || formData.customizationLevel === '1') && (
                  <div className="level-description mb-3">
                    <p className="mb-2"><strong>Level 1 - Basic Customization</strong></p>
                    <p className="mb-0">
                      <small>
                        • Standard configuration with basic workflow adjustments<br />
                        • Email support during business hours<br />
                        • Basic training and documentation<br />
                        • Monthly updates and maintenance
                      </small>
                    </p>
                  </div>
                )}
                {(formData.customizationLevel === 2 || formData.customizationLevel === '2') && (
                  <div className="level-description mb-3">
                    <p className="mb-2"><strong>Level 2 - Standard Customization</strong></p>
                    <p className="mb-0">
                      <small>
                        • Moderate workflow customization and integration options<br />
                        • Priority email and phone support<br />
                        • Comprehensive training sessions<br />
                        • Bi-weekly updates and maintenance<br />
                        • Custom report generation
                      </small>
                    </p>
                  </div>
                )}
                {(formData.customizationLevel === 3 || formData.customizationLevel === '3') && (
                  <div className="level-description mb-3">
                    <p className="mb-2"><strong>Level 3 - Advanced Customization</strong></p>
                    <p className="mb-0">
                      <small>
                        • Advanced workflow customization and API access<br />
                        • 24/7 dedicated support with SLA guarantees<br />
                        • On-site training and implementation support<br />
                        • Weekly updates and maintenance<br />
                        • Custom module development options<br />
                        • Dedicated account manager
                      </small>
                    </p>
                  </div>
                )}
                {(formData.customizationLevel === 4 || formData.customizationLevel === '4') && (
                  <div className="level-description mb-3">
                    <p className="mb-2"><strong>Level 4 - Premium Customization</strong></p>
                    <p className="mb-0">
                      <small>
                        • Enterprise-level workflow customization<br />
                        • 24/7 premium support with guaranteed response time<br />
                        • Comprehensive on-site training and implementation<br />
                        • Real-time updates and maintenance<br />
                        • Full API access and custom development<br />
                        • Dedicated account manager and technical team
                      </small>
                    </p>
                  </div>
                )}
                {(formData.customizationLevel === 5 || formData.customizationLevel === '5') && (
                  <div className="level-description mb-3">
                    <p className="mb-2"><strong>Level 5 - Enterprise Customization</strong></p>
                    <p className="mb-0">
                      <small>
                        • Complete system customization and integration<br />
                        • 24/7 enterprise support with dedicated team<br />
                        • Full-scale implementation and training program<br />
                        • Continuous updates and optimization<br />
                        • Custom module development and API integration<br />
                        • Dedicated project manager and support team
                      </small>
                    </p>
                  </div>
                )}
                <p className="mb-2">
                  <small>
                    <i className="bi bi-info-circle me-1"></i>
                    {(formData.customizationLevel === 1 || formData.customizationLevel === '1') && 'Level 1 customization adds 10% to the base price'}
                    {(formData.customizationLevel === 2 || formData.customizationLevel === '2') && 'Level 2 customization adds 20% to the base price'}
                    {(formData.customizationLevel === 3 || formData.customizationLevel === '3') && 'Level 3 customization adds 30% to the base price'}
                    {(formData.customizationLevel === 4 || formData.customizationLevel === '4') && 'Level 4 customization adds 40% to the base price'}
                    {(formData.customizationLevel === 5 || formData.customizationLevel === '5') && 'Level 5 customization adds 50% to the base price'}
                  </small>
                </p>
                
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Button 
          variant="primary" 
          onClick={onSubmit}
          disabled={loading || loadingRates}
        >
          {loading ? 'Submitting...' : 'Get Quotation'}
        </Button>
      </div>

      <style jsx>{`
        .table-responsive {
          margin: 0 -15px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid var(--techcloud-Secondary-secondary-100, #B2E4EF);
;
        }
        
        @media (min-width: 992px) {
          .table-responsive {
            margin: 0;
          }
          .module-name { width: 35%; }
          .module-price { width: 25%; }
          .module-users { width: 20%; }
          .module-total { width: 20%; }
        }

        @media (max-width: 991px) {
          .table th, .table td {
            padding: 0.75rem;
            font-size: 0.95rem;
          }
          .module-name { min-width: 150px; }
          .module-price { min-width: 120px; }
          .module-users { min-width: 140px; }
          .module-total { min-width: 120px; }
        }

        @media (max-width: 768px) {
          .table th, .table td {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
          .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
          }
          .form-control {
            font-size: 0.875rem;
            width: 50px !important;
          }
          .module-name { min-width: 130px; }
          .module-price { min-width: 110px; }
          .module-users { min-width: 130px; }
          .module-total { min-width: 110px; }
        }

        @media (max-width: 576px) {
          .table th, .table td {
            padding: 0.4rem;
            font-size: 0.85rem;
          }
          .btn-sm {
            padding: 0.2rem 0.4rem;
            font-size: 0.8rem;
          }
          .form-control {
            font-size: 0.8rem;
            width: 45px !important;
          }
          .module-name { min-width: 120px; }
          .module-price { min-width: 100px; }
          .module-users { min-width: 120px; }
          .module-total { min-width: 100px; }
        }

        .table {
          margin-bottom: 0;
        }
        
        .table th {
          white-space: nowrap;
          background: linear-gradient(180deg, #F5F4F4 5.77%, #FFF 50.48%, #DFDDDD 100%);
          border-bottom: 2px solid #dee2e6;
          
          color: var(--Primary-Primary1000, #5B1907);
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%; /* 28px */
        }

        .table td {
          vertical-align: middle;
          border: 2px solid green;
          border: 1px solid var(--techcloud-Secondary-secondary-100, #B2E4EF);
          background: #F6FDFF;
        }

        .text-break {
          word-break: break-word;
        }

        .form-control:focus {
          box-shadow: none;
          border-color: #ced4da;
        }

        .btn-sm {
          line-height: 1;
        }

        .custom-switch {
          padding: 0;
          margin: 0;
        }

        .custom-switch .form-check-input {
          width: 3rem;
          height: 1.5rem;
          margin-top: 0;
          cursor: pointer;
        }

        .custom-switch .form-check-input:checked {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .custom-radio {
          margin: 0;
          padding: 0.5rem 1rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-radio:hover {
          background-color: #f8f9fa;
        }

        .custom-radio input[type="radio"] {
          margin-right: 0.5rem;
        }

        .custom-radio input[type="radio"]:checked + label {
          color: #0d6efd;
        }

        .text-primary {
          color: #ef5226 !important;
          font-weight: 500;
        }

        .customization-section {
          background-color: #f8f9fa;
          height: 100%;
        }
        .customization-section h6 {
          color: #2c3e50;
          font-weight: 600;
        }
        .customization-info {
          font-size: 0.9rem;
        }
        .customization-info i {
          color: #0d6efd;
        }
        @media (max-width: 768px) {
          .customization-section {
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ModuleSelection; 