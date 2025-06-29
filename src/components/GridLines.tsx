'use client';
import { Line } from '@react-three/drei';

export function GridLines() {
  const size = 10;
  const divisions = 10;
  
  return (
    <group>
      <gridHelper args={[size, divisions, '#00f0ff', '#00f0ff']} rotation={[0, 0, 0]} />
      <Line
        points={[[-size/2, 0, 0], [size/2, 0, 0]]}
        color="#ff00f0"
        lineWidth={1}
      />
      <Line
        points={[[0, -size/2, 0], [0, size/2, 0]]}
        color="#ff00f0"
        lineWidth={1}
      />
    </group>
  );
}