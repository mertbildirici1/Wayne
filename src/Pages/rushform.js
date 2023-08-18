import React, { useState } from "react";
import "../RushForm.css";

function EmailForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you! You've entered the email: ${email}`);
  };

  return (
    <div className="email-form-container">
      <h2 className="email-form-heading">Enter Your Email to Rush</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        <label className="email-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="email-input"
            required
          />
        </label>
        <button type="submit" className="submit-button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
