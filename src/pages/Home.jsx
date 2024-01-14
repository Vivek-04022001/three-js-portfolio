import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../component/Loader";

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
Popup
</div> */
}
const Home = () => {
  return (
    <section className="relative h-screen w-full ">
      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
