import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ContactUs = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle onChange event for all form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    // Optionally, add API call logic here for sending form data to your backend
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        {/* Left Side: Contact Form */}
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>
            Have any questions or concerns? Fill out the form below and we’ll respond
            as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject:
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Information */}
        <div className="col-md-6">
          <h4>Contact Information</h4>
          <p>
            <strong>Address:</strong> 123 Main Street, Your City, Your Country
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> support@eshop.com
          </p>
          <h5 className="mt-4">Follow Us</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://facebook.com" className="text-decoration-none text">
                <i className="fab fa-facebook fa-2x" style={{color:'#2E2E2E'}}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com" className="text-decoration-none">
                <i className="fab fa-twitter fa-2x" style={{color:'#2E2E2E'}}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com" className="text-decoration-none">
                <i className="fab fa-instagram fa-2x" style={{color:'#2E2E2E'}}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://linkedin.com" className="text-decoration-none">
                <i className="fab fa-linkedin fa-2x" style={{color:'#2E2E2E'}}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;