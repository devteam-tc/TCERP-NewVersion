import React from 'react';
import { Modal } from 'react-bootstrap';

const ThankYouModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
      className="thank-you-modal"
    >
      <Modal.Body className="text-center p-4">
        <div className="mb-4">
          <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
        </div>
        <h4 className="mb-3">Thank You!</h4>
        <p className="mb-0">We have received your details and will get back to you shortly.</p>
        <p className="text-muted mt-2 mb-0">
          Our team will review your requirements and contact you within 24-48 business hours.
        </p>
      </Modal.Body>

      <style jsx>{`
        .thank-you-modal .modal-content {
          border-radius: 15px;
          border: none;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .thank-you-modal .modal-body {
          padding: 2rem;
        }
        .thank-you-modal h4 {
          color: #2c3e50;
          font-weight: 600;
        }
        .thank-you-modal p {
          color: #666;
          font-size: 1.1rem;
        }
        .thank-you-modal .text-muted {
          color: #7f8c8d !important;
          font-size: 0.9rem;
        }
      `}</style>
    </Modal>
  );
};

export default ThankYouModal; 