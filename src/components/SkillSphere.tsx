'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const skills = [
  'JavaScript', 'TypeScript', 'React', 
  'Next.js', 'Python', 'TensorFlow',
  'Three.js', 'Node.js', 'Git'
];

export function SkillSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SkillSphereMesh />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

function SkillSphereMesh() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={meshRef}>
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        return (
          <Text3D
            key={skill}
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.05}
            position={[
              Math.cos(theta) * Math.sin(phi) * 3,
              Math.sin(theta) * Math.sin(phi) * 3,
              Math.cos(phi) * 3
            ]}
          >
            {skill}
            <meshStandardMaterial color="#00f0ff" />
          </Text3D>
        );
      })}
    </group>
  );
}