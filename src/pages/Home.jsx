import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const ref = useRef(new Audio(sakura));
  ref.current.volume= 0.4;
  ref.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    if (isPlayingMusic) {
      ref.current.play();
    }
    
    return () => {
      ref.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [0.9, 0.9, 0.9];
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [-2, 0, 0];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [-3, 0, 0];
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        { currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intesity={2}/>
            <hemisphereLight skyColor='#c1e1ff' groundColor="#000000"/>

            <Bird />
            <Sky
              isRotating={isRotating}/>
            <Island 
              isRotating={isRotating}
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}/>
            <Plane 
              scale={planeScale} 
              position={planePosition}
              isRotating={isRotating}
              rotation={[0, 20, 0]}/>
          </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff : soundon} alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
      </div>
    </section>
  )
}

export default Home