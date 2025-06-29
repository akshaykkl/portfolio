// components/ThreeScene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { Suspense } from 'react';

export default function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          position={[-1.5, 0, 0]}
        >
          AK
          <meshStandardMaterial color="#4f46e5" />
        </Text3D>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}