import { useState, useMemo, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { Html, useProgress } from '@react-three/drei';
import { Button } from '@nextui-org/react';

import mountainsImg from '../Assets/mountains.png'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function Mountains({ brightness, ...props }: { brightness: number } & JSX.IntrinsicElements['mesh']) {
    const texture = useLoader(TextureLoader, mountainsImg);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const geometry = new THREE.PlaneGeometry(8, 5);

    material.color.setRGB(brightness, brightness, brightness);
    return (
        <mesh geometry={geometry} material={material} {...props} />
    );
}

export default function Helligkeit() {

    const [intensity, setIntensity] = useState(1.0);

    const increaseDistance = () => setIntensity(Math.ceil(intensity * 100) / 100 < 2.5 ? intensity + 0.1 : intensity);
    const decreaseDistance = () => setIntensity(Math.ceil(intensity * 100) / 100 > 1 ? intensity - 0.1 : intensity);

    return (
        <center>
            <Canvas>
                <Suspense fallback={<Loader />}>
                    <Mountains position={[-2, 0.5, -1]} brightness={intensity ** 1.5} />
                    <Mountains position={[1, 0.1, -1]} brightness={intensity ** 1.2} />
                    <Mountains position={[-3, 0, 0.5]} brightness={intensity} />
                    <Mountains position={[2, 0, 1.5]} brightness={1} />
                </Suspense>
            </Canvas>

            <Button.Group>
                <Button onClick={increaseDistance}>+</Button>
                <Button onClick={decreaseDistance}>-</Button>
            </Button.Group>
        </center >
    )
}
