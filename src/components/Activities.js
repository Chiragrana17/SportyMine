import React from "react";
import "./Activities.css";

const activities = [
  {
    title: "Structured Sports Sessions",
    description:
      "Football, cricket, athletics, and more to deepen their skills and keep them actively engaged after school hours.",
    image: "/sss.jpg",
  },
  {
    title: "Fitness & Fun Games",
    description:
      "Creative ways to stay active, from circuit challenges to team relays that boost energy and excitement.",
    image: "/ffg.jpg",
  },
  {
    title: "Confidence Building",
    description:
      "We focus on individual progress, encouraging sportsmanship, leadership, and personal achievement.",
    image: "/cb.jpg",
  },
  {
    title: "Positive Screen-Free Time",
    description:
      "A refreshing alternative to screen time, keeping kids mentally and physically refreshed with fun, engaging sessions.",
    image: "/psft.jpg",
  },
];

const Activities = () => {
  return (
    <section className="after-school-section" id="after-school">
      <h2 className="after-heading"> After - School Activities Program </h2>{" "}
      <p className="after-subtext">
        Once the school day ends, the fun continues with our After - School
        Program— a high - energy, skill - building experience that keeps
        children moving, learning, and laughing.{" "}
      </p>{" "}
      <div className="after-program-list">
        {" "}
        {activities.map((item, index) => (
          <div
            className={`after-program-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="after-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="after-program-img"
              />
            </div>{" "}
            <div className="after-program-content">
              <h3> {item.title} </h3> <p> {item.description} </p>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Activities;
