import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../component/Loader";
import Island from "../models/Island";
import Sky  from '../models/Sky';
import Bird from "../models/Bird";
import Plane from "../models/Plane";

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
Popup
</div> */
}
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenSize = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenSize, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="relative h-screen w-full ">
      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.3} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird/>
          <Sky/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane/>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
