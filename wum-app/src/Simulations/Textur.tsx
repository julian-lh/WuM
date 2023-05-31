import { useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import { Line } from '@react-three/drei';
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

export default function Verdeckung() {

    const [intensity, setIntensity] = useState(-0.5);

    const increaseDistance = () => setIntensity(intensity < 0 ? intensity + 0.1 : intensity);
    const decreaseDistance = () => setIntensity(intensity > -1.5 ? intensity - 0.1 : intensity);

    return (
        <center>
            <Canvas >
                {/* <OrthographicCamera makeDefault zoom={20} near={0.0} far={150} position={[-1, -1, -1]} /> */}
                <ambientLight intensity={0.8} />
                <Grid intensity={intensity} />

            </Canvas>

            <Button.Group>
                <Button onClick={increaseDistance}>+</Button>
                <Button onClick={decreaseDistance}>-</Button>
            </Button.Group>
        </center>
    )
}
