import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtFront01Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
    uTexture: null,
    uMouse : 0.0
  },
  /* glsl */ `
  varying vec2 vUv;
    uniform float uTime;
  void main() {
    vUv = uv;
    float dist = distance(vUv,vec2(0.5));
    vec3 nPosition = position;
    nPosition.z = 0.02* sin(dist * 50.0 -uTime) ;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(nPosition, 1.0);
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
