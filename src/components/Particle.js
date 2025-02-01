import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "../config/particle-config"; // Adjust the path if needed

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={ParticleConfig} // Use the imported configuration
    />
  );
}

export default Particle;
