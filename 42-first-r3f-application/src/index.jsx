import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))
//Attach attribute allows the dev to assign the component to a specific property instead of trying to add()
//r3f implements all classes automatically
//orthographic
const cameraSettings = {
    fov:45,
    //zoom: 100,
    near: 0.1,
    far: 200,
    position: [3,2,6]
    }

root.render(
    <>
        {/*flat goes inside canvas*/}
        <Canvas
        gl={{antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
        }}
        camera={cameraSettings}> {/*limit between 1 and 2. Is default dpr={[1,2]} */}
            <Experience/>
        </Canvas>
    </>
)