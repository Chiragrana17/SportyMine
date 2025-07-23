import React from "react";
import "./Programs.css";

const programs = [{
        title: "Gross Motor Skills",
        description: "Activities that enhance balance, agility, coordination, and core strength through structured movement and guided play.",
        image: "/gms.jpg",
    },
    {
        title: "Fun Games & Recreational Play",
        description: "Engaging group activities, obstacle courses, and creative games that spark joy, teamwork, and physical engagement.",
        image: "/p3.jpg",
    },
    {
        title: "Multi-Sport Exposure",
        description: "Children are introduced to foundational skills from various sports like Badminton, football and etc. encouraging diverse development.",
        image: "/p4.jpg",
    },
    {
        title: "Cognitive & Social Growth",
        description: "Kids learn to follow instructions, collaborate with peers, develop emotional resilience, and grow social confidence through active play.",
        image: "/csg.jpg",
    },
];

const Programs = () => {
    return ( <
        section className = "alt-programs-section"
        id = "Programs" >
        <
        h2 className = "alt-heading" > Our In - School Program < /h2>{" "} <
        p className = "alt-subtext" >
        A carefully designed program
        for early learners that supports physical development, teamwork, and cognitive growth through sports. { " " } <
        /p>{" "} <
        div className = "alt-program-list" > { " " } {
            programs.map((program, index) => ( <
                div className = { `alt-program-row ${index % 2 !== 0 ? "reverse" : ""}` }
                key = { index } >
                <
                div className = "alt-image-wrapper" >
                <
                img src = { program.image }
                alt = { program.title }
                className = "alt-program-img" /
                >
                <
                /div>{" "} <
                div className = "alt-program-content" >
                <
                h3 > { program.title } < /h3> <p> {program.description} </p > { " " } <
                /div>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /section>
    );
};

export default Programs;