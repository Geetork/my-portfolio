import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html as='div'
      className='absolute h-[100%] w-[100%] flex justify-center items-center'>
        <div>
            <svg className="animate-spin h-20 w-20 rounded-full bg-transparent border-4 border-transparent border-opacity-50" style={{borderRightColor: "#000000", borderTopColor: "#000000" }} viewBox="0 0 50 50"></svg>
        </div>
    </Html>
  )
}

export default Loader;