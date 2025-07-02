import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {

  const [init, setInit] = useState(false);


  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);



  const params: any = {
  "background": {
    "color": { "value": "#000000" }
  },
  "particles": {
    "number": {
      "value": 800,
      "density": { "enable": true }
    },
    "color": { "value": "#555" },
    "shape": { "type": "circle" },
    "size": {
      "value": { "min": 1, "max": 3 }
    },
    "opacity": {
      "value": { "min": 0.5, "max": 1 }
    },
    "zIndex": {
      "value": 0,          // ← todas al mismo nivel
      "velocityRate": 10    // ← sin impacto en la velocidad
    },
    "move": {
      "enable": true,
      "direction": "bottom-right",
      "speed": 0.9,  
      // "drift": 1,
      "straight": false,
      "outModes": { "default": "out" }
    },
    "wobble": {
      "enable": true,
      "distance": 10,
      "speed": { "angle": 10, "move": 10 }
    }
  },
  "fullScreen": { "enable": true }
}



  if (!init) {
    return null; // or a loading spinner
  }

  return (
    <Particles
      id="tsparticles"
      options={params}
      className="particles"
    />

  );
}

export default Particle;
