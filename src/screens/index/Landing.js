import React from "react";
import { motion } from "framer-motion";
import jumpUpOnHover from "../../motion_variants/framerMotionVariants";

function Landing() {
  return (
    <div className="landing">
      <motion.div id="photoSection" whileHover={jumpUpOnHover}>
        <img className="circleImage" src="/media/liaSquare.png" alt="A headshot photo of Lia Arroyo"></img>
      </motion.div>
      <div id="welcomeText">
        <h1>Hi! I'm <motion.div id="name" whileHover={[jumpUpOnHover]}>Lia Arroyo</motion.div></h1>
        <h2>An impact-driven Software Engineering student with  experience coding in team environments, looking to grow my dev skills!</h2>
        <a className="button" href="https://www.linkedin.com/in/liayzabel/" target="_BLANK">Learn more</a>
      </div>
    </div>
  );
}

export default Landing;
