import { useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import { Line, Plane, Sphere, Shadow, PerspectiveCamera } from '@react-three/drei';
import { Button } from '@nextui-org/react';


function Grid({ intensity, ...props }: { intensity: number } & JSX.IntrinsicElements['group']) {
    const lines = useMemo(() => {
        const lineCount = 20; // Number of lines in the grid
        const spacing = 0.2; // Spacing between the lines
        const lines = [];

        for (let i = 0; i < lineCount; i++) {
            const y = (i - lineCount / 2) * spacing;
            const startPoint = new THREE.Vector3(-3, y, i * intensity);
            const endPoint = new THREE.Vector3(3, y, i * intensity);
            lines.push([startPoint, endPoint]);
        }

        return lines;
    }, [intensity]);

    return (
        <group {...props}>
            {lines.map((points, idx) => (
                <Line points={points} key={idx} color="blue" lineWidth={0.5} />
            ))}
        </group>
    );
}

export default function Schatten() {

    const [intensity, setIntensity] = useState(0);

    const increaseDistance = () => setIntensity(Math.ceil(intensity * 10) / 10 < 1 ? intensity + 0.1 : intensity);
    const decreaseDistance = () => setIntensity(Math.ceil(intensity * 10) / 10 > 0 ? intensity - 0.1 : intensity);

    return (
        <center>
            <Canvas shadows camera={{ position: [0, 0, 6], zoom: 2 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[-100, 0, 50]} intensity={1.5} castShadow />
                <Plane rotation={[0, 0, 0]} position={[0, 0, -intensity]} args={[100, 100]} receiveShadow>
                    {/* <shadowMaterial opacity={1} color={"green"} /> */}
                    <meshStandardMaterial opacity={1} transparent />
                </Plane>
                {/* <Sphere position={[-1.5, 0, 0]} castShadow> */}
                {/* <meshStandardMaterial color="red" /> */}
                {/* </Sphere> */}
                {/* <Sphere position={[1.5, 0, 0]} castShadow /> */}

                <mesh position={[-1.5, 0, 0.01]} castShadow>
                    <circleGeometry args={[1, 32]} />
                    <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[1.5, 0, 0.01]} castShadow>
                    <circleGeometry args={[1, 32]} />
                    <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
                </mesh>
                <Shadow />


            </Canvas>

            <Button.Group>
                <Button onClick={increaseDistance}>+</Button>
                <Button onClick={decreaseDistance}>-</Button>
            </Button.Group>
        </center>
    )
}
