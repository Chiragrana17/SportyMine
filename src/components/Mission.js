import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="what-we-do" id="mission">
      <h2 className="section-heading"> What SportyMine Does </h2>{" "}
      <div className="features">
        <div className="feature-card">
          <img src="/vis.jpg" alt="Our Vision" className="feature-img" />
          <h3> Our Vision </h3>{" "}
          <p>
            At SportyMine, we envision a future where every child discovers the
            joy and benefits of an active lifestyle.We strive to be the
            cornerstone of sports development, nurturing fundamental movement
            skills in children and fostering a vibrant sporting culture across
            communities.{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-card">
          <img src="/pro.jpg" alt="Our Mission" className="feature-img" />
          <h3> Our Products </h3>{" "}
          <p>
            SportyMine 's core products include engaging programs for developing
            fundamental movement skills in children, flexible multi - sports
            venue access, comprehensive organization of sports events for
            schools and corporates, and expert coaching services across various
            disciplines to nurture athletic potential.We provide the resources
            and expertise to foster physical literacy and a love for sports.{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-card">
          <img src="/ser.jpg" alt="Our Services" className="feature-img" />
          <h3> Our Services </h3>{" "}
          <p>
            At SportyMine, our core services are designed to foster a lifelong
            love for movement and sport.We specialize in developing fundamental
            gross motor and locomotor skills in children, providing access to
            versatile multi - sports venues, organizing engaging and seamless
            sports events for schools and corporations, and delivering top -
            tier coaches.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Mission;
