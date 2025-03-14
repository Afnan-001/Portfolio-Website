import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Afnan Sayyad </span>
            from <span className="purple"> Sangli, India.</span>
            <br />
            I am currently studying at <span className="purple">Walchand College of Engineering, Sangli. </span> 
            <br />
            I'm pursuing B.Tech in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In the middle of every difficulty lies opportunity"{" "}
          </p>
          <footer className="blockquote-footer">Afnan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
