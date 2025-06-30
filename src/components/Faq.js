import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer:
      "We offer programs and events for children aged 2–14, and also have family and corporate offerings for adults.",
  },
  {
    question: "Where are your events conducted?",
    answer:
      "Our events are held at schools, societies, corporate offices, and other community spaces across cities.",
  },
  {
    question: "Do you have certified coaches?",
    answer:
      "Yes! All our sessions are led by trained professionals with certifications in physical education, sports, and child development.",
  },
  {
    question: "How can I book a birthday party or sports day?",
    answer:
      "You can fill out our contact form or call us directly. Our team will coordinate and tailor the event to your needs.",
  },
  {
    question: "Are your programs safe for kids?",
    answer:
      "Absolutely. We use age-appropriate equipment, ensure proper safety measures, and maintain ideal coach-to-child ratios.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title"> Frequently Asked Questions </h2>{" "}
      <p className="faq-subtitle">
        Have questions ? We’ re here to help you learn more about SportyMine!
      </p>{" "}
      <div className="faq-list">
        {" "}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {" "}
              {faq.question}{" "}
              <span className="faq-toggle">
                {" "}
                {openIndex === index ? "−" : "+"}{" "}
              </span>{" "}
            </div>{" "}
            <div className="faq-answer"> {faq.answer} </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Faq;
