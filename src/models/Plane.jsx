import React, { useEffect, useRef } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, scale, position, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);


  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} 
      position={position} 
      scale={scale}
      ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Plane