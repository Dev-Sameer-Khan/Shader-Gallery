import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtRight01Material = shaderMaterial(
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

  // ShaderToy's iResolution.xy is (width, height), but in this adaptation we'll assume vUv goes from (0,0) to (1,1)
  // We'll synthesize fragCoord in [0, 1], and use an assumed "resolution" ratio

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

  void main() {
    // Emulate Shadertoy's fragCoord using vUv in [0,1]
    // We'll assume iResolution = vec2(1.0, 1.0) for square area, or simply use aspect = 1.0
    // Map vUv [0,1] to uv [-1,1], keeping aspect ratio as 1
    vec2 fragCoord = vUv;
    vec2 iResolution = vec2(1.0, 1.0);

    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.x;
    vec2 uv0 = uv;

    vec3 finalCol = vec3(0.0);

    // Loop for i = 0 to 2 (i < 3.0) like in reference code
    for (float i = 0.0; i < 3.0; i++) {
      uv = fract(uv * 1.5) - 0.5;
      float d = length(uv) * exp(-length(uv0));
      vec3 col = palette(length(uv0) + i * 0.4 + uTime * 0.4);
      d = sin(d * 8.0 + uTime) / 8.0;
      d = abs(d);
      d = 0.02 / d;
      col *= d;
      finalCol = col;
    }

    gl_FragColor = vec4(finalCol, 1.0);
  }`
);

