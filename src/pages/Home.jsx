import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import Cloud from '../models/Cloud';

const Home = () => {
  const ref = useRef(new Audio(sakura));
  ref.current.volume = 0.4;
  ref.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [cloud, setCloud] = useState([[1, 1, 1],  [0, -1, 0]]);

  const adjustCloudForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 564) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1, 0];
    };

    setCloud([screenScale, screenPosition]);
  }

  useEffect(() => {
    window.addEventListener('resize', adjustCloudForScreenSize);

    return () => {
      window.removeEventListener('resize', adjustCloudForScreenSize);
    }
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      ref.current.play();
    }
    
    return () => {
      ref.current.pause();
    }
  }, [isPlayingMusic])

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
        { currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intesity={2}/>
            <hemisphereLight skyColor='#c1e1ff' groundColor="#000000"/>

              <Cloud
                position={cloud[1]}
                scale={cloud[0]}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage} />

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