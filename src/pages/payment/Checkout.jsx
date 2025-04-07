import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = ({userData,setUserData,cartItems,shipping,setShipping}) => {
  // Manage the current step and all user input data in one state object.
  const [currentStep, setCurrentStep] = useState(1);
  // Moves to the next step
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  // Moves to the previous step
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Updates state on input change
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Checkout</h2>

      {/* Steps indicator using Bootstrap nav-pills */}
      <ul className="nav nav-pills mb-4 justify-content-center">
        <li className="nav-item">
          <span className={`nav-link ${currentStep === 1 ? "active" : ""}`}>
            Cart Items
          </span>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${currentStep === 2 ? "active" : ""}`}>
            User Info
          </span>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${currentStep === 3 ? "active" : ""}`}>
            Shipping
          </span>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${currentStep === 4 ? "active" : ""}`}>
            Payment
          </span>
        </li>
      </ul>

        

        {/* Step 1 : Cart Items Review */}

        {
            currentStep === 1 &&(
                  <div className='mt-5'>             
                        <h4>Items</h4>
                        <table className="table table-responsive">
                              <thead>
                                    <tr>
                                          <th>#</th>
                                          <th>Item</th>
                                          <th>QYT</th>
                                          <th>Unit Price</th>
                                          <th>SubTotal</th>
                                    </tr>
                              </thead>
                              <tbody>
                              {
                              cartItems.map((item,key)=>{
                              return (

                                    <tr key={key}>
                                          <td>
                                                {key + 1}
                                          </td>
                                          <td>
                                                {item.productName}
                                          </td>
                                          <td>
                                                <span>{item.quantity}</span>
                                          </td>
                                          <td>
                                                <span>${item.price}</span>
                                          </td>
                                          <td>
                                                <span>${item.price * item.quantity}</span>
                                          </td>
                                    </tr>

                              )})}
                              </tbody>
                              <tfoot>
                                    <tr colspan = "5" >
                                          <td><Link to={'/cart'}>Edit Items</Link> </td>
                                    </tr>
                              </tfoot>
                        </table>
                  </div>
            )
        }

        {/* Step 2: User Information */}
        {currentStep === 2 && (
          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}


        {/* Step 3: Shipping Details */}
        {currentStep === 3 && (
          <div>
            <div className="mb-3">
              <label htmlFor="shippingType" className="form-label">
                Shipping Type
              </label>
              <select
                name="shippingType"
                id="shippingType"
                className="form-select"
                value={userData.shippingType}
                onChange={(e)=>{
                  e.target.value === 1 ? setShipping(0): setShipping(20)
                }}
                required
              >
                <option value="1" selected>Free Shipping</option>
                <option value="2" >Express Shipping (+20$)</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                placeholder="Enter your address"
                value={userData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                placeholder="Enter your city"
                value={userData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="zip" className="form-label">
                ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="form-control"
                placeholder="Enter your ZIP code"
                value={userData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {/* Step 4: Payment Information */}
        {currentStep === 4 && (
          <div>
            <div className="mb-3">
              <label htmlFor="paymentOption" className="form-label">
                Payment Option
              </label>
              <select
                name="paymentOption"
                id="paymentOption"
                className="form-select"
                value={userData.paymentOption}
                onChange={handleChange}
                required
              >
                <option value="cash" selected >Cash</option>
                <option value="credit">Credit Card</option>
              </select>
            </div>
            {userData.paymentOption === 'credit' ? <div>
                  <div className="mb-3">
                  <label htmlFor="cardHolder" className="form-label">
                  Card Holder Name
                  </label>
                  <input
                  type="text"
                  name="cardHolder"
                  id="cardHolder"
                  className="form-control"
                  placeholder="Enter card holder name"
                  value={userData.cardHolder}
                  onChange={handleChange}
                  required
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                  Card Number
                  </label>
                  <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  className="form-control"
                  placeholder="Enter your card number"
                  value={userData.cardNumber}
                  onChange={handleChange}
                  required
                  />
                  </div>
                  <div className="row">
                  <div className="col-md-6 mb-3">
                  <label htmlFor="expiry" className="form-label">
                        Expiry Date
                  </label>
                  <input
                        type="text"
                        name="expiry"
                        id="expiry"
                        className="form-control"
                        placeholder="MM/YY"
                        value={userData.expiry}
                        onChange={handleChange}
                        required
                  />
                  </div>
                  <div className="col-md-6 mb-3">
                  <label htmlFor="cvv" className="form-label">
                        CVV
                  </label>
                  <input
                        type="password"
                        name="cvv"
                        id="cvv"
                        className="form-control"
                        placeholder="Enter CVV"
                        value={userData.cvv}
                        onChange={handleChange}
                        required
                  />
                  </div>
                  </div>
            </div>:""}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-4">
          {currentStep > 1 && (
            <button type="button" className="btn btn-secondary" onClick={prevStep}>
              Back
            </button>
          )}
          {currentStep < 4 && (
            <button type="button" className="btn ms-auto" style={{backgroundColor:'var(--orange)',color:'white'}} onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 4 && (
            <button type="submit" className="btn ms-auto" style={{backgroundColor:'var(--orange)',color:'white'}}>
              Place Order
            </button>
          )}
        </div>
    </div>
  );
};

export default Checkout;