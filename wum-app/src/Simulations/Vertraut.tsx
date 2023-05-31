import { useState, useMemo, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { Html, useProgress } from '@react-three/drei';
import { Button } from '@nextui-org/react';

import chairImg from './chair.png'
import houseImg from './house.png'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function House({ ...props }) {
    const texture = useLoader(TextureLoader, houseImg);

    return (
        <mesh{...props}>
            <planeGeometry args={[7, 5]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
}
function Chair({ size, ...props }: { size: number } & JSX.IntrinsicElements['mesh']) {
    const texture = useLoader(TextureLoader, chairImg);

    return (
        <mesh {...props}>
            <planeGeometry args={[5 * size, 5 * size]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
}



export default function Vertraut() {

    const [intensity, setIntensity] = useState(1);

    const increaseDistance = () => setIntensity(Math.ceil(intensity * 10) / 10 < 1 ? intensity + 0.1 : intensity);
    const decreaseDistance = () => setIntensity(Math.ceil(intensity * 10) / 10 > 0.1 ? intensity - 0.1 : intensity);

    return (
        <center>

            <Canvas>
                <Suspense fallback={<Loader />}>
                    <House position={[-3, 1, 0]} />
                    <Chair size={intensity} position={[3, -1, 0]} />
                </Suspense>
            </Canvas>

            <Button.Group>
                <Button onClick={increaseDistance}>+</Button>
                <Button onClick={decreaseDistance}>-</Button>
            </Button.Group>
        </center >
    )
}
