'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, Suspense } from 'react';

function ParticleSystem() {
  const ref = useRef<any>();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 10;
      ref.current.rotation.y += delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={random.inSphere(new Float32Array(2000), { radius: 2 })}>
      <PointMaterial 
        transparent
        color="#00f0ff"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ParticleSystem />
        </Suspense>
      </Canvas>
    </div>
  );
}