// components/FloatingText.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { Suspense } from 'react';

export default function FloatingText() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-3.5, 0, 0]}
        >
          AK
          <meshStandardMaterial color="#4f46e5" />
        </Text3D>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}