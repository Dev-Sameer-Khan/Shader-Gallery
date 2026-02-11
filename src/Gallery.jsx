import { Gltf, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Frame } from "./Frame";
import { useEffect } from "react";
import { gsap } from "gsap";


export const Gallery = ({ ...props }) => {
  const frameRefs = useRef([]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    for (const key in frameRefs.current) {
      frameRefs.current[key].uTime = elapsedTime;
    }
  });

  const tex = useTexture("/dj.png");
  const tex1 = useTexture("https://upload.wikimedia.org/wikipedia/commons/6/6e/Mona_Lisa_bw_square.jpeg")
  const tex2 = useTexture("https://i1.sndcdn.com/avatars-000289123178-fek8v7-t240x240.jpg")

  return (
    <group {...props}>
      <Gltf
        src="/models/vr_gallery.glb"
      // "VR Gallery" (https://skfb.ly/ooRLp) by Maxim Mavrichev is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      />
      {/* FRONT FRAMES */}
      <group position-z={-5}>
        <Frame
          position-x={-3}
          position-y={1.3}
          width={1}
          height={1}
          borderSize={0.05}
          color="#555555"
        >
          <mesh position={[0, 0, 0.02]}>
            <planeGeometry args={[0.8, 0.8, 32, 32]} />
            <artFront01Material
              uColor="blue"
              uTexture={tex1}
              ref={(ref) => (frameRefs.current["front01"] = ref)}
            />
          </mesh>
        </Frame>
        <Frame
          position-x={0}
          position-y={1.3}
          width={1.2}
          height={1.6}
          color="black"
        >
          <mesh>
            <planeGeometry args={[1, 1.4]} />
            <artFront02Material
              uColor="mediumpurple"
              ref={(ref) => (frameRefs.current["front02"] = ref)}
            />
          </mesh>
        </Frame>
        <Frame
          borderSize={0.05}
          position-x={3}
          position-y={1.3}
          width={1.4}
          height={0.8}
          color="#555555"
        >
          <mesh>
            <planeGeometry args={[1.2, 0.6]} />
            <artFront03Material
              uColor="red"
              ref={(ref) => (frameRefs.current["front03"] = ref)}
            />
          </mesh>
        </Frame>
      </group>

      {/* RIGHT WALL */}
      <group rotation-y={degToRad(-90)} position-x={5}>
        <Frame position-y={1.5} width={5} height={2} borderSize={0.2}>
          <mesh>
            <planeGeometry args={[5, 2, 1]} />
            <artRight01Material
              uColor="black"
              ref={(ref) => (frameRefs.current["right01"] = ref)}
            />
          </mesh>
        </Frame>
      </group>

      {/* LEFT WALL */}
      <group position-x={-5} rotation-y={degToRad(90)}>
        <Frame
          borderSize={0.05}
          position-x={-3.2}
          position-y={1.5}
          width={1}
          height={2}
        >
          <mesh>
            <planeGeometry args={[1, 2]} />
            <artLeft01Material
              uColor="blue"
              uTexture={tex}
              ref={(ref) => (frameRefs.current["left01"] = ref)}
            />
          </mesh>
        </Frame>
        <Frame position-y={1.5} width={3.6} height={2}>
          <mesh>
            <planeGeometry args={[3.4, 1.8, 1]} />
            <artLeft02Material
              uColor="pink"
              ref={(ref) => (frameRefs.current["left02"] = ref)}
            />
          </mesh>
        </Frame>

        <Frame
          borderSize={0.05}
          position-x={3.2}
          position-y={1.5}
          width={1}
          height={2}
        >
          <mesh>
            <planeGeometry args={[1, 2]} />
            <artLeft03Material
              uColor="black"
              uTexture={tex}
              ref={(ref) => (frameRefs.current["left03"] = ref)}
            />
          </mesh>
        </Frame>
      </group>

      {/* REAR WALL */}
      <group position-z={5} rotation-y={degToRad(180)}>
        <Frame
          position-x={-2.5}
          position-y={1.5}
          width={1}
          height={1}
          borderSize={0.2}
        >
          <mesh>
            <planeGeometry args={[1, 1]} />
            <artRear01Material
              uColor="pink"
              ref={(ref) => (frameRefs.current["rear01"] = ref)}
            />
          </mesh>
        </Frame>
        <Frame
          position-x={2.75}
          position-y={2.2}
          width={0.5}
          height={0.5}
          borderSize={0.025}
        >
          <mesh>
            <planeGeometry args={[0.4, 0.4]} />
            <artRear02Material
              uColor="black"
              uTexture={tex2}
              ref={(ref) => (frameRefs.current["rear02"] = ref)}
            />
          </mesh>
        </Frame>
        <Frame
          position-x={2.75}
          position-y={1.5}
          width={0.5}
          height={0.5}
          borderSize={0.025}
        >
          <mesh>
            <planeGeometry args={[0.4, 0.4]} />
            <artRear03Material
              uColor="black"
              uTexture={tex2}
              ref={(ref) => (frameRefs.current["rear03"] = ref)}
            />
          </mesh>
        </Frame>
        <Frame
          position-x={2.75}
          position-y={0.8}
          width={0.5}
          height={0.5}
          borderSize={0.025}
        >
          <mesh>
            <planeGeometry args={[0.4, 0.4]} />
            <artRear04Material
              uColor="black"
              uTexture={tex2}
              ref={(ref) => (frameRefs.current["rear04"] = ref)}
            />
          </mesh>
        </Frame>
      </group>
    </group>
  );
};
