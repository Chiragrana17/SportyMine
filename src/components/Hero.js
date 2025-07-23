// Hero.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const images = ["/p1a.jpg", "/home1.jpg", "/p2a.jpg", "home2.jpg"];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // ✅ correct usage

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleRedirect = () => {
        navigate("/mission"); // ✅ correct navigation
    };

    return ( <
        div className = "hero"
        style = {
            {
                backgroundImage: `url(${process.env.PUBLIC_URL + "/background.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: "100vh",
                width: "100%",
            }
        } >
        <
        div className = "hero-text" >
        <
        div className = "tagline" > Nurture Curiosity, Inspire Learning < /div>{" "} <
        h1 >
        <
        span className = "highlight-blue" > Learn < /span>,{" "} <
        span className = "highlight-yellow" > Explore < /span>, and{" "} <
        span className = "highlight-pink" > Grow < /span> Together{" "} <
        /h1>{" "} <
        p className = "hero-subtext" >
        <
        strong >
        Unlock Your Child 's Potential with Fun and Engaging Learning
        Programs.Tailored Learning
        for Every Stage of Your Child 's Growth.{" "} <
        /strong>{" "} <
        /p>{" "} <
        button className = "cta-button"
        onClick = { handleRedirect } >
        Know More { " " } <
        /button>{" "} <
        /div>{" "} <
        div className = "carousel" >
        <
        img src = { images[currentIndex] }
        alt = "Carousel Slide"
        className = "carousel-img" /
        >
        <
        /div>{" "} <
        /div>
    );
};

export default Hero;