import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import End from '../assets/End.mp3'
import soundoff from '../assets/icons/soundoff.png'
import soundon from '../assets/icons/soundon.png'

const Home = () => {
  /* ================= AUDIO ================= */
  const audioRef = useRef(null)

  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  useEffect(() => {
    audioRef.current = new Audio(End)
    audioRef.current.volume = 0.4
    audioRef.current.loop = true

    return () => {
      audioRef.current.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlayingMusic) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  /* ================= RESPONSIVE ================= */
  const adjustIslandForScreenSize = () => {
    let scale = [1, 1, 1]
    let position = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      scale = [0.9, 0.9, 0.9]
    }

    return [scale, position, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let scale = [3, 3, 3]
    let position = [0, -4, -4]

    if (window.innerWidth < 768) {
      scale = [1.5, 1.5, 1.5]
      position = [0, -1.5, 0]
    }

    return [scale, position]
  }

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize()

  const [planeScale, planePosition] =
    adjustPlaneForScreenSize()

  /* ================= JSX ================= */
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* TEXT INFO */}
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* 3D SCENE */}
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={`w-full h-screen ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky scale={450} isRotating={isRotating} />
          <Bird />

          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      {/* MUSIC TOGGLE */}
      <div className="absolute bottom-4 left-4 z-20">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="music"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </section>
  )
}

export default Home
