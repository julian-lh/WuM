import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Button } from '@nextui-org/react';


function Sphere({ intensity, color1, radius, ...props }: { intensity: number, color1: Boolean, radius: number } & JSX.IntrinsicElements['mesh']) {
    return (
        <mesh {...props}>
            <sphereGeometry args={[radius, 20, 20]} />
            < meshStandardMaterial color={color1 ? "blue" : "magenta"} />
        </mesh>
    )
}


export default function Verdeckung() {

    const [intensity, setIntensity] = useState(0.5);

    const increaseDistance = () => setIntensity(intensity < 1.5 ? intensity + 0.5 : intensity);
    const decreaseDistance = () => setIntensity(intensity > -1.5 ? intensity - 0.5 : intensity);

    return (
        <center>
            <Canvas>
                <ambientLight intensity={0.8} />
                <Sphere intensity={intensity} color1={true} radius={1} position={[-intensity, 0, 1]} />
                <Sphere intensity={intensity} color1={false} radius={1.25} position={[intensity, 0, 0]} />
            </Canvas>

            <Button.Group>
                <Button onClick={increaseDistance}>+</Button>
                <Button onClick={decreaseDistance}>-</Button>
            </Button.Group>
        </center>
    )
}
