import React from "react";
import "./Event.css";

const events = [{
        title: "Mini Sports Carnivals for Young Kids (Ages 2–8)",
        image: "/p6.jpg",
        description: [
            "Obstacle races",
            "Ball balance games",
            "Hurdle jumps & crawling tunnels",
            "Target throws and bean bag challenges",
            "Animal walks & fun movement circuits",
        ],
    },
    {
        title: "Multi-Sport Events for Older Kids (Ages 9–14)",
        image: "/p7.jpg",
        description: [
            "Football, cricket, and basketball matches",
            "Track & field mini tournaments",
            "Skill challenges like dribbling, sprinting, and agility games",
            "Team-building relay races and “Fun Olympics”",
        ],
    },
    {
        title: "Annual Sports Day in Schools",
        image: "/p8.jpg",
        description: [
            "Full event planning & coordination",
            "Customized event line-up for different age groups",
            "Athletic stations, equipment, and safety set-up",
            "Fun fillers, mascot races & team cheer games",
            "Professional anchoring, scoring, and certificates",
        ],
    },
    {
        title: "Family Fitness & Community Events",
        image: "/p9.jpg",
        description: [
            "Parent-child partner races",
            "Group yoga and fitness challenges",
            "Dance and Zumba sessions",
            "Traditional Indian games",
            "Picnic-style play days",
        ],
    },
    {
        title: "Sporty Birthday Parties",
        image: "/p10.jpg",
        description: [
            "Sports-themed party games",
            "Fun circuits and obstacle zones",
            "Team challenges and relay races",
            "Music, mascots, and movement-based party games",
            "Custom themes and medals for all participants",
        ],
    },
    {
        title: "Corporate Sports & Wellness Events",
        image: "/cs.jpg",
        description: [
            "Employee Sports Day",
            "Cricket or football leagues",
            "Office Olympics",
            "Wellness workshops",
            "Team-building retreats through sport",
        ],
    },
    {
        title: "Athlete Camps & Performance Showcases",
        image: "/ac.jpg",
        description: [
            "Skill-building camps",
            "Speed, agility & strength training",
            "Performance testing & feedback",
            "Nutrition and injury-prevention workshops",
            "Inter-academy sports meets and talent days",
        ],
    },
];

const Event = () => {
    return ( <
        section className = "events-section" >
        <
        h2 className = "events-heading" > SportyMine Events < /h2>{" "} <
        p className = "events-intro" >
        Creating active communities through fun, fitness & sports.From toddlers to professionals, we bring people together with energy and movement!
        <
        /p>{" "} <
        div className = "event-list" > { " " } {
            events.map((event, index) => ( <
                div className = { `event-card ${index % 2 !== 0 ? "reverse" : ""}` }
                key = { index } >
                <
                div className = "event-image-wrapper" >
                <
                img src = { event.image }
                alt = { event.title }
                className = "event-image" /
                >
                <
                /div>{" "} <
                div className = "event-content" >
                <
                h3 className = "event-title" > { event.title } < /h3>{" "} <
                ul > { " " } {
                    event.description.map((point, i) => ( <
                        li key = { i } > { point } < /li>
                    ))
                } { " " } <
                /ul>{" "} <
                /div>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /section>
    );
};

export default Event;