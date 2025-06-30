import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", rating: "", message: "" });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title"> We Value Your Feedback </h2>{" "}
      <p className="feedback-subtext">
        Help us improve by sharing your thoughts!
      </p>{" "}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          <option value=""> Rate your experience </option>{" "}
          <option value="Excellent"> Excellent </option>{" "}
          <option value="Good"> Good </option>{" "}
          <option value="Average"> Average </option>{" "}
          <option value="Poor"> Poor </option>{" "}
        </select>{" "}
        <textarea
          name="message"
          placeholder="Your Message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>{" "}
        <button type="submit" className="submit-btn">
          Submit Feedback{" "}
        </button>{" "}
      </form>{" "}
      {submitted && (
        <p className="thank-you-msg"> Thank you for your feedback! </p>
      )}{" "}
    </div>
  );
};

export default Feedback;
