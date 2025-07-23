import React from "react";
import "./Welcome.css";

const Welcome = () => {
    return ( <
        div className = "goalpha-container"
        id = "welcome" >
        <
        div className = "goalpha-left" >
        <
        img src = "/gr.jpg"
        alt = "Kids playing sports"
        className = "goalpha-image" /
        >
        <
        /div>{" "} <
        div className = "goalpha-right" >
        <
        h2 >
        Welcome to < span className = "brand" > SportyMine < /span>{" "} <
        /h2>{" "} <
        p >
        SportyMine 's mission is to empower individuals of all ages through a
        comprehensive approach to sports and physical development.We achieve this by fostering fundamental movement skills in children, providing accessible and high quality multi - sports venues, orchestrating engaging sports events
        for schools and corporations, and delivering expert coaching to nurture athletic talent and promote a lifelong love
        for an active lifestyle. { " " } <
        /p>{" "} <
        p >
        We run Multiple Programs at the preschools during preschool hours.We give an introduction to sports in a safe, creative, and non -
        competitive environment. { " " } <
        /p>{" "} <
        p >
        In the next stage, we work with the child’ s interest and help the child enhance his / her skill.SpotyMine want the kids to be active and choose the right sport
        for them. { " " } <
        /p>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Welcome;