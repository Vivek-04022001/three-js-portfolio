import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../component/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
Popup
</div> */
}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
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
  const adjustPlanForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlanForScreenSize();

  return (
    <section className="relative h-screen w-full ">
      
      <Canvas
        className={`h-screen w-full bg-transparent 
        ${isRotating ? "cursor-grabbing" : "cursor-grab"}
        `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.3} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird isRotating={isRotating}/>
          <Sky isRotating={isRotating}/>
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
