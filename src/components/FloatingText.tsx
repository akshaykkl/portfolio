'use client';
import { Text3D, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function FloatingText({ text = 'AK', size = 1, color = '#00f0ff' }) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={size}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}