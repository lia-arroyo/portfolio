import React from "react";

function Landing() {
  return (
    <div className="landing">
      <img className="circleImage" src="/media/liaSquare.png" alt="A headshot photo of Lia Arroyo"></img>

      <div id="welcomeText">
        <h1>Hi! I'm <a id="name" href="#">Lia Arroyo</a>.</h1>
      </div>
    </div>
  );
}

export default Landing;
