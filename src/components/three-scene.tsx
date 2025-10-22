"use client"

import { useEffect, useRef } from "react"

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (typeof window === "undefined") return

    let THREE: any
    let scene: any, camera: any, renderer: any, particles: any

    const initThree = async () => {
      // Dynamically import Three.js to avoid SSR issues
      THREE = await import("three")

      if (!mountRef.current) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      mountRef.current.appendChild(renderer.domElement)

      // Create floating particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 1000
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.8,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      // Create floating geometric shapes
      const shapes = []
      for (let i = 0; i < 5; i++) {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
        const material = new THREE.MeshBasicMaterial({
          color: 0x8b5cf6,
          transparent: true,
          opacity: 0.6,
          wireframe: true,
        })
        const cube = new THREE.Mesh(geometry, material)

        cube.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8)

        shapes.push(cube)
        scene.add(cube)
      }

      camera.position.z = 5

      // Animation loop
      const animate = () => {
        animationRef.current = requestAnimationFrame(animate)

        // Rotate particles
        if (particles) {
          particles.rotation.x += 0.0005
          particles.rotation.y += 0.0005
        }

        // Animate shapes
        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.01
          shape.rotation.y += 0.01
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001
        })

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        if (!camera || !renderer) return
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      // Mouse interaction
      const handleMouseMove = (event: MouseEvent) => {
        if (!particles) return
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

        particles.rotation.x = mouseY * 0.1
        particles.rotation.y = mouseX * 0.1
      }

      window.addEventListener("mousemove", handleMouseMove)

      sceneRef.current = {
        scene,
        camera,
        renderer,
        cleanup: () => {
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("mousemove", handleMouseMove)
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
          }
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement)
          }
          renderer.dispose()
        },
      }
    }

    initThree()

    return () => {
      if (sceneRef.current) {
        sceneRef.current.cleanup()
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}
