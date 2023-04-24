import React, { useState } from "react";


function SubscriptionPaymentPage() {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [plan, setPlan] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
    };
  
    const handleExpiryDateChange = (event) => {
      setExpiryDate(event.target.value);
    };
  
    const handleCvvChange = (event) => {
      setCvv(event.target.value);
    };
  
    const handlePlanChange = (event) => {
      setPlan(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add payment processing logic here
    };
  
    return (
      <div className="container">
        <h1>Subscription Payment Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name on Card:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number:</label>
            <input
              type="text"
              id="card-number"
              name="card-number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input
              type="text"
              id="expiry-date"
              name="expiry-date"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={handleCvvChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="plan">Choose a Plan:</label>
            <select
              id="plan"
              name="plan"
              value={plan}
              onChange={handlePlanChange}
              required
            >
              <option value="">Select a Plan</option>
              <option value="basic">Basic Plan - $9.99/month</option>
              <option value="premium">Premium Plan - $19.99/month</option>
              <option value="ultimate">Ultimate Plan - $29.99/month</option>
            </select>
          </div>
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
    );
  }
  
//   export default SubscriptionPaymentPage;

export default SubscriptionPaymentPage;