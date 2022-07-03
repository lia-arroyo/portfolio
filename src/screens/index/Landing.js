import React from "react";

function Landing() {
  return (
    <div className="landing">
      <img className="circleImage" src="/media/liaSquare.png" alt="A headshot photo of Lia Arroyo"></img>

      <div id="welcomeText">
        <h1>Hi! I'm <a id="name" href="#">Lia Arroyo</a>.</h1>
        <h2>An impact-driven Software Engineering student with a Marketing mindset and experience coding in a team environment, looking to grow my dev skills!</h2>
        <a className="button" href="https://www.linkedin.com/in/liayzabel/" target="_BLANK">Learn more</a>
      </div>
    </div>
  );
}

export default Landing;
