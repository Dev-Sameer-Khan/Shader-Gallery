import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtFront02Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
  vec3 black = vec3(0.0);
  vec3 red = vec3(1.0,0.0,0.0);
  vec3 white = vec3(1.0);
  vec3 blue = vec3(0.0,0.0,1.0);
  vec3 yellow = vec3(1.0,1.0,0.0);


    vec3 finalColor = uColor;

    finalColor = mix(finalColor,black,step(0.0,vUv.x));
    finalColor = mix(finalColor,blue,step(0.0,vUv.y) * step(0.0,vUv.x));
    finalColor = mix(finalColor,white,step(0.3,vUv.y) * step(0.0,vUv.x));
    finalColor = mix(finalColor,white,step(0.6,vUv.y) * step(0.0,vUv.x));
    finalColor = mix(finalColor,black,step(0.0,vUv.y) * step(0.0,vUv.x) * step(0.25,vUv.x));
    finalColor = mix(finalColor,black,step(0.0,vUv.x) * step(0.65,vUv.y) * step(vUv.y,0.7));
    finalColor = mix(finalColor,white,step(0.0,vUv.y) * step(0.3,vUv.x));
    finalColor = mix(finalColor,red,step(0.3,vUv.y) * step(0.3,vUv.x));
    finalColor = mix(finalColor,black,step(0.0,vUv.x) * step(0.3,vUv.y) * step(vUv.y,.35));
    finalColor = mix(finalColor,black,step(0.8,vUv.x) * step(vUv.x,0.85) * step(0.0,vUv.y) * step(vUv.y,0.3));
    finalColor = mix(finalColor,black,step(0.8,vUv.x)  * step(0.13,vUv.y) * step(vUv.y,0.17));
    finalColor = mix(finalColor,yellow,step(0.85,vUv.x)  * step(0.0,vUv.y) * step(vUv.y,0.13));
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
  `
);
