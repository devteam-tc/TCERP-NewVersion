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
        <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
          Choose the features that align perfectly with your business goals and experience the flexibility of a customizable ERP system. Whether you're scaling operations or streamlining workflows, our ERP adapts to your unique needs.
        </p>
      </div>

      <div className="mb-4">
        <div className="text-center mb-4">
          <Form.Label className="d-block mb-2">Billing Cycle</Form.Label>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <span className={formData.billingCycle === 'monthly' ? 'text-primary' : 'text-muted'}>Monthly</span>
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
            <span className={formData.billingCycle === 'yearly' ? 'text-primary' : 'text-muted'}>Yearly</span>
          </div>
        </div>

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
              <small className="text-muted d-block">
                {formData.billingCycle === 'yearly' ? 'per year' : 'per month'}
              </small>
              {formData.currency !== 'INR' && (
                <small className="text-muted d-block">
                  (₹{(totalPrice.total * 0.8 / exchangeRates[formData.currency]).toFixed(2)} INR)
                </small>
              )}
              <div className="mt-2">
                <small className="text-muted">
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
                <p className="mb-2 text-muted">
                  <small>
                    <i className="bi bi-info-circle me-1"></i>
                    Selected customization will add {totalPrice.percentage}% to the base price
                  </small>
                </p>
                <p className="mb-0 text-muted">
                  <small>
                    <i className="bi bi-lightning me-1"></i>
                    Higher levels include more advanced features and dedicated support
                  </small>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <Button 
          variant="outline-secondary" 
          onClick={onPrev}
        >
          Previous Step
        </Button>
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
          background-color: #f8f9fa;
          border-bottom: 2px solid #dee2e6;
        }

        .table td {
          vertical-align: middle;
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
          color: #0d6efd !important;
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