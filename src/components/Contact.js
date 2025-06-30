import React from "react";
import "./Contact.css";
import {
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";

const Contact = () => {
    return ( <
        div className = "contact-container"
        id = "contact" >
        <
        h2 > Contact Us < /h2>{" "} <
        p >
        We’ d love to hear from you!Reach out through any of the platforms below. { " " } <
        /p>{" "} <
        div className = "contact-icons" >
        <
        a href = "https://instagram.com"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaInstagram className = "icon instagram" / >
        <
        span > Instagram < /span>{" "} <
        /a>{" "} <
        a href = "https://youtube.com"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaYoutube className = "icon youtube" / >
        <
        span > YouTube < /span>{" "} <
        /a>{" "} <
        a href = "https://wa.me/1234567890"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaWhatsapp className = "icon whatsapp" / >
        <
        span > WhatsApp < /span>{" "} <
        /a>{" "} <
        a href = "mailto:someone@example.com" >
        <
        FaEnvelope className = "icon email" / >
        <
        span > Email < /span>{" "} <
        /a>{" "} <
        div >
        <
        FaPhone className = "icon phone" / >
        <
        span > +91 9876543210 < /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Contact;