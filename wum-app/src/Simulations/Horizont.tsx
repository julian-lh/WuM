import { useState, useMemo, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three';
import * as THREE from 'three';

import { Html, useProgress, Line } from '@react-three/drei';
import { Button } from '@nextui-org/react';

import mountainsImg from '../Assets/mountains.png'
import chairImg from '../Assets/chair.png'
import houseImg from '../Assets/house.png'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function Mountains({ ...props }) {
    const texture = useLoader(TextureLoader, mountainsImg);

    return (
        <mesh{...props}>
            <planeGeometry args={[7, 5]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
}

function Box({ ...props }) {

    return (
        <mesh {...props}>
            <boxBufferGeometry args={[1, 3, 1]} attach="geometry" />
            <meshBasicMaterial color={"gray"} attach="material" />
        </mesh>
    )
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

function Lines() {
    const startPointL = new THREE.Vector3(-3, 0, 4);
    const startPointR = new THREE.Vector3(3, 0, 4);

    const endPointL = new THREE.Vector3(-3, 0, -3);
    const endPointR = new THREE.Vector3(3, 0, -3);

    return (
        <>
            <Line points={[startPointL, endPointL]} color="blue" lineWidth={0.5} />
            <Line points={[startPointR, endPointR]} color="blue" lineWidth={0.5} />
        </>
    );
}



export default function Horizont() {

    const [intensity, setIntensity] = useState(1);

    const increaseDistance = () => setIntensity(Math.ceil(intensity * 10) / 10 < 2 ? intensity + 0.5 : intensity);
    const decreaseDistance = () => setIntensity(Math.ceil(intensity * 10) / 10 > -3 ? intensity - 0.5 : intensity);

    return (
        <center>

            <Canvas camera={{ position: [0, 2, 6], zoom: 1.2 }}>
                <Suspense fallback={<Loader />}>
                    <Mountains position={[-4, 3.5, -3]} />
                    <Mountains position={[4, 3.5, -3]} />
                    <Lines />
                    {/* <Chair size={intensity} position={[3, 0, 0]} /> */}
                    <Box position={[-1, 0, -3]} />
                    <Box position={[1, 0, intensity]} />
                </Suspense>
            </Canvas>

            <Button.Group>
                <Button onClick={increaseDistance}>+</Button>
                <Button onClick={decreaseDistance}>-</Button>
            </Button.Group>
        </center >
    )
}
