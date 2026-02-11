import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtFront03Material = shaderMaterial(
  {
    uColor: new Color("red"),
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

  vec3 black = vec3(0.0);
  vec3 red = vec3(0.769,0.141,0.149);
  vec3 orange = vec3(0.886,0.463,0.208);
  vec3 blue = vec3(0.141,0.196,0.373);
  vec3 yellow = vec3(0.894,0.835,0.471);
  vec3 lightBlue = vec3(0.314,0.624,0.741);
  vec3 white = vec3(1.0);
 vec3 green = vec3(0.635,0.694,0.369);
 vec3 cream = vec3(0.91,0.851,0.486); 

  void main() {
  vec3 finalCol = uColor;

  finalCol = mix(finalCol, orange, step(0.0,vUv.x) * step(vUv.x,0.2) * step(0.7,vUv.y));
    finalCol = mix(finalCol, yellow, step(0.0,vUv.x) * step(vUv.x,0.2) * step(0.3,vUv.y) * step(vUv.y,0.7));
        finalCol = mix(finalCol, blue, step(0.0,vUv.x) * step(vUv.x,0.2) * step(0.0,vUv.y) * step(vUv.y,0.3));

 finalCol = mix(finalCol, blue, step(0.2,vUv.x) * step(vUv.x,0.4) * step(0.7,vUv.y));
    finalCol = mix(finalCol, lightBlue, step(0.2,vUv.x) * step(vUv.x,0.4) * step(0.3,vUv.y) * step(vUv.y,0.7));
        finalCol = mix(finalCol, green, step(0.2,vUv.x) * step(vUv.x,0.4) * step(0.0,vUv.y) * step(vUv.y,0.3));

 finalCol = mix(finalCol, yellow, step(0.4,vUv.x) * step(vUv.x,0.6) * step(0.7,vUv.y));
    finalCol = mix(finalCol, red, step(0.4,vUv.x) * step(vUv.x,0.6) * step(0.3,vUv.y) * step(vUv.y,0.7));
        finalCol = mix(finalCol, orange, step(0.4,vUv.x) * step(vUv.x,0.6) * step(0.0,vUv.y) * step(vUv.y,0.3));

         finalCol = mix(finalCol, lightBlue, step(0.6,vUv.x) * step(vUv.x,0.8) * step(0.7,vUv.y));
    finalCol = mix(finalCol, orange, step(0.6,vUv.x) * step(vUv.x,0.8) * step(0.3,vUv.y) * step(vUv.y,0.7));
        finalCol = mix(finalCol, red, step(0.6,vUv.x) * step(vUv.x,0.8) * step(0.0,vUv.y) * step(vUv.y,0.3));

        
 finalCol = mix(finalCol, blue, step(.8,vUv.x) * step(vUv.x,1.0) * step(0.7,vUv.y));
    finalCol = mix(finalCol, yellow, step(.8,vUv.x) * step(vUv.x,1.0) * step(0.3,vUv.y) * step(vUv.y,0.7));
        finalCol = mix(finalCol, lightBlue, step(.8,vUv.x) * step(vUv.x,1.0) * step(0.0,vUv.y) * step(vUv.y,0.3));


    gl_FragColor = vec4(finalCol, 1.0);
  }
  `
);
