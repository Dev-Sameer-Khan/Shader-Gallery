import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtRear01Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
    uTexture : null
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
  uniform sampler2D uTexture;

  vec3 grey = vec3(0.514,0.557,0.525);
  vec3 yellow = vec3(0.878,0.671,0.239);

  void main() {

  vec3 finalCol = grey;

  finalCol = mix(finalCol, yellow, step(0.0,vUv.x) * step(vUv.x,0.2) * step(0.75,vUv.y) );

    finalCol = mix(finalCol, yellow, step(0.0,vUv.x) * step(vUv.x,0.4) * step(0.5,vUv.y) * step(vUv.y,0.75) );
  finalCol = mix(finalCol, yellow, step(0.2,vUv.x) * step(vUv.x,0.4) * step(0.5,vUv.y) * step(vUv.y,0.75) );

      finalCol = mix(finalCol, yellow, step(0.0,vUv.x) * step(vUv.x,0.4) * step(0.25,vUv.y) * step(vUv.y,0.5) );
  finalCol = mix(finalCol, yellow, step(0.2,vUv.x) * step(vUv.x,0.4) * step(0.25,vUv.y) * step(vUv.y,0.5) );
  finalCol = mix(finalCol, yellow, step(0.4,vUv.x) * step(vUv.x,0.6) * step(0.25,vUv.y) * step(vUv.y,0.5) );

        finalCol = mix(finalCol, yellow, step(0.0,vUv.x) * step(vUv.x,0.4) * step(0.0,vUv.y) * step(vUv.y,0.25) );
  finalCol = mix(finalCol, yellow, step(0.2,vUv.x) * step(vUv.x,0.4) * step(0.0,vUv.y) * step(vUv.y,0.25) );
  finalCol = mix(finalCol, yellow, step(0.4,vUv.x) * step(vUv.x,0.6) * step(0.0,vUv.y) * step(vUv.y,0.25) );
    finalCol = mix(finalCol, yellow, step(0.6,vUv.x) * step(vUv.x,0.8) * step(0.0,vUv.y) * step(vUv.y,0.25) );


    gl_FragColor = vec4(finalCol, 1.0);
  }
  `
);
