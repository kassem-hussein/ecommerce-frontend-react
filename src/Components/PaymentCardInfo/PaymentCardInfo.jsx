import React, { useState } from "react";

const PaymentCardInput = () => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the payment details or display them for review
    console.log({ cardHolder, cardNumber, expiry, cvv });
    alert("Payment details submitted successfully!");
  };

  return (
    <form className="card p-4" style={{ maxWidth: "400px", borderRadius: "15px" }} onSubmit={handleSubmit}>
      <h5 className="mb-4 text-center">Enter Payment Details</h5>

      <div className="mb-3">
        <label htmlFor="cardHolder" className="form-label">Card Holder Name</label>
        <input
          type="text"
          className="form-control"
          id="cardHolder"
          placeholder="John Doe"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="expiry" className="form-label">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            id="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="password"
            className="form-control"
            id="cvv"
            placeholder="***"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default PaymentCardInput;