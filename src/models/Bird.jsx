import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene)
  const birdRef = useRef()
  const { actions } = useAnimations(animations, birdRef)

  const direction = useRef(1) // 1 = forward, -1 = backward

  useEffect(() => {
    actions["Take 001"]?.play()
  }, [])

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return

    // bob up and down
    birdRef.current.position.y = 2 + Math.sin(clock.elapsedTime * 2) * 0.2

    // move bird
    birdRef.current.position.x += 0.01 * direction.current
    birdRef.current.position.z -= 0.01 * direction.current

    // flip direction when reaching bounds relative to camera
    if (birdRef.current.position.x > camera.position.x + 10 || birdRef.current.position.x < camera.position.x - 10) {
      direction.current *= -1
    }

    // rotate bird to face the movement
    birdRef.current.rotation.y = direction.current === 1 ? 0 : Math.PI
  })

  return (
    <primitive
      ref={birdRef}
      object={scene}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
    />
  )
}

export default Bird
