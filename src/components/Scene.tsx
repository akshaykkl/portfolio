// components/Scene.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Floating Geometry */}
      <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#4f46e5" wireframe />
      </mesh>
      
      {/* Additional floating elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh 
          key={i}
          position={[
            Math.sin(i) * 10,
            Math.cos(i * 2) * 5,
            -i * 2
          ]}
          rotation={[i * 0.1, i * 0.1, 0]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#6366f1" transparent opacity={0.6} />
        </mesh>
      ))}
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};

export default Scene;