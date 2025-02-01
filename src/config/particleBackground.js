import React from 'react'
import Particles from 'react-tsparticles' // or 'react-particles-js' if preferred
import ParticleConfig from './particle-config' // Path should be correct

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig} />
    );
}
