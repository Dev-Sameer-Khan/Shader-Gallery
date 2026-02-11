import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtLeft02Material = shaderMaterial(
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

  float sdHexagram( in vec2 p, in float r )
{
    const vec4 k = vec4(-0.5,0.8660254038,0.5773502692,1.7320508076);
    p = abs(p);
    p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
    p -= 2.0*min(dot(k.yx,p),0.0)*k.yx;
    p -= vec2(clamp(p.x,r*k.z,r*k.w),r);
    return length(p)*sign(p.y);
}

  void main() {
  vec3 yellow = vec3(2.0,2.0,0.0);

  vec2 tUv = (vUv - 0.5 ) * 2.0;
  tUv *= cos(uTime * 0.5);
  tUv.x *= 3.4/1.8;
  float Hexagram = sdHexagram(tUv,0.3);

  vec3 colorA = mix(uColor,yellow,Hexagram);
  Hexagram = sin(Hexagram * 12.0 + uTime * 4.0) * 0.5 + 0.5;

  float pct = 0.22/Hexagram;

  vec3 color = pct * colorA;


    gl_FragColor = vec4(color, 1.0);
  }
  `
);
