import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtRear04Material = shaderMaterial(
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


  void main() {
    gl_FragColor = texture2D(uTexture, vUv);
  }
  `
);
