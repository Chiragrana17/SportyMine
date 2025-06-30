import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Rohit",
    role: "Football Coach",
    image: "/logoface.jpg",
    experience: "5 Years",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Yoga Instructor",
    image: "/logoface.jpg",
    experience: "4 Years",
    rating: 4,
  },
  {
    name: "Aman",
    role: "Cricket Coach",
    image: "/logoface.jpg",
    experience: "6 Years",
    rating: 5,
  },
  {
    name: "Neha",
    role: "Zumba Trainer",
    image: "/logoface.jpg",
    experience: "3 Years",
    rating: 4,
  },
  {
    name: "Arjun",
    role: "Fitness Trainer",
    image: "/logoface.jpg",
    experience: "5 Years",
    rating: 5,
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="team-heading"> Meet Our Coaches </h2>{" "}
      <p className="team-subtext">
        The minds and hearts behind SportyMine’ s mission.{" "}
      </p>{" "}
      <div className="team-grid">
        {" "}
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3> {member.name} </h3>{" "}
            <p className="team-role"> {member.role} </p>{" "}
            <p className="coach-exp"> Experience: {member.experience} </p>{" "}
            <div className="coach-rating">
              {" "}
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={i < member.rating ? "star filled" : "star"}
                >
                  {" "}
                  ★{" "}
                </span>
              ))}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Team;
