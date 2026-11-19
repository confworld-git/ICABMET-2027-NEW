import React from "react";
import "./Success.css";
import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet";

const Success = () => {
  const location = useLocation();
  const {
    type = "payment", // "payment" | "paper_submission" | "ocm_submission" | "general"
    title,
    message,
    amount,
    paymentStatus,
    paymentId,
    submissionId,
    paperTitle,
    authorName,
    time,
  } = location.state || {};

  const isPayment = type === "payment";
  const isPaper = type === "paper_submission";
  const isOcm = type === "ocm_submission";

  const getTitle = () => {
    if (title) return title;
    if (isPaper) return "Paper Submitted Successfully!";
    if (isOcm) return "Application Submitted Successfully!";
    return "Payment Successful!";
  };

  const getSubtitle = () => {
    if (message) return message;
    if (isPaper) return "Thank you for submitting your research paper to icbms-2027.";
    if (isOcm) return "Thank you for applying for the ICABMET-2027 Organizing Committee.";
    return "Thank you for your registration!";
  };

  return (
    <div className="container_success">
      <main className="main-content">
        <CircleCheckIcon className="status-icon" data-aos="fade-up" />
        <h1 className="title" data-aos="fade-up" data-aos-duration="500">
          {getTitle()}
        </h1>
        <p className="description" data-aos="fade-up" data-aos-duration="600">
          {getSubtitle()}
        </p>
        <p className="welcome-message" data-aos="fade-up" data-aos-duration="650">
          Thank you for joining us in <strong>ICABMET-2027</strong>. We look forward to your
          participation and contributions to the Confworld Educational Research
          and Development Association (ceram) Conference.
        </p>

        {/* Details Box */}
        {(isPayment || isPaper || isOcm || submissionId) && (
          <div className="details-box" data-aos="fade-up" data-aos-duration="700">
            {submissionId && (
              <div className="detail-item">
                <span>Submission ID:</span>
                <span className="detail-value status-badge">{submissionId}</span>
              </div>
            )}

            {paperTitle && (
              <div className="detail-item">
                <span>Paper Title:</span>
                <span className="detail-value">{paperTitle}</span>
              </div>
            )}

            {authorName && (
              <div className="detail-item">
                <span>Author Name:</span>
                <span className="detail-value">{authorName}</span>
              </div>
            )}

            {amount && (
              <div className="detail-item">
                <span>Total Amount:</span>
                <span className="detail-value">${amount}</span>
              </div>
            )}

            {paymentStatus && (
              <div className="detail-item">
                <span>Payment Status:</span>
                <span className="detail-value status-badge">{paymentStatus}</span>
              </div>
            )}

            {paymentId && (
              <div className="detail-item">
                <span>Transaction ID:</span>
                <span className="detail-value">{paymentId}</span>
              </div>
            )}

            {time && (
              <div className="detail-item">
                <span>Date & Time:</span>
                <span className="detail-value">{time}</span>
              </div>
            )}
          </div>
        )}

        <div className="contact-box" data-aos="fade-up" data-aos-duration="750">
          <h3 className="contact-title">Need Help? Contact Us</h3>
          <p className="contact-description">
            For any queries or additional information regarding your submission or registration,
            please contact our conference support team:
          </p>
          <div className="contact-item">
            <EmailIcon className="contact-icon" />
            <a href="mailto:info@icabmet.com" className="contact-link">
              info@icabmet.com
            </a>
          </div>
          <div className="contact-item">
            <PhoneIcon className="contact-icon" />
            <a href="tel:+918072381719" className="contact-link">
              +91 8072381719
            </a>
          </div>
        </div>

        <a
          href="/"
          className="return-button"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Return to Homepage
        </a>
      </main>
    </div>
  );
};

export default Success;

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}