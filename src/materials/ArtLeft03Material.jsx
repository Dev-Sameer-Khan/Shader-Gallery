import { shaderMaterial } from "@react-three/drei";
import { Color, Vector2 } from "three";

export const ArtLeft03Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
    uTexture: null,
    uResolution: new Vector2(1, 1), // x = plane aspect, y = texture aspect
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 ratio = vec2(
      min((uResolution.x / uResolution.y) / (1.0 / 1.0), 1.0),
      min((1.0 / 1.0) / (uResolution.x / uResolution.y), 1.0)
    );

    // This calculates the "Cover" UVs
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    gl_FragColor = texture2D(uTexture, uv);
  }
  `
);