import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",  marginTop:"50px",marginBottom:"10px" }}>
            Hi Everyone, I am <span className="purple">Bekkhoucha Wafaa Fatima Zohra </span>
            from <span className="purple"> Sidi bel abbes, Algeria.</span>
            <br />
            I am  a 5th year student at <span className="purple">ESI,sba</span>, Higher School of Computer Science 08 May 1945 - Sidi Bel Abbès -,
            <br />
            Specializing in Information Systems and Web Development.
            <br />
           
          </p>
         

          
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
