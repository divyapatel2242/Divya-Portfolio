import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divya Patel </span>
            <br />
            I am currently employed as a Software Development Engineer - I .
            <br />
            I have completed Bechelor Of Engineering in Information Technology From L.D College Of Engineering, Ahmedabad
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
