"use client"

import { useEffect, useRef } from "react"

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const cleanupRef = useRef<() => void>()

  useEffect(() => {
    if (typeof window === "undefined") return

    let renderer: any
    let scene: any
    let camera: any
    let composer: any

    const init = async () => {
      const THREE = await import("three")
      const { EffectComposer } = await import("three/examples/jsm/postprocessing/EffectComposer.js")
      const { RenderPass } = await import("three/examples/jsm/postprocessing/RenderPass.js")
      const { UnrealBloomPass } = await import("three/examples/jsm/postprocessing/UnrealBloomPass.js")
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js")

      if (!mountRef.current) return
      const container = mountRef.current
      const width = container.clientWidth || window.innerWidth
      const height = container.clientHeight || window.innerHeight

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      scene = new THREE.Scene()
      const pmrem = new THREE.PMREMGenerator(renderer)
      scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture

      camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000)
      camera.position.set(0, 0.2, 6)
      scene.add(camera)

      // Subtle starfield
      {
        const starCount = 300
        const pos = new Float32Array(starCount * 3)
        for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 18
        const geo = new THREE.BufferGeometry()
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
        const mat = new THREE.PointsMaterial({ size: 0.009, color: 0x8b5cf6, transparent: true, opacity: 0.55 })
        const stars = new THREE.Points(geo, mat)
        stars.name = "stars"
        scene.add(stars)
      }

      // Helper to add an instanced field of small shapes in a spherical shell
      const fields: any[] = []
      const addInstancedField = (
        geometry: any,
        count: number,
        color: number,
        sizeRange: [number, number],
        radiusRange: [number, number],
        rotationSpeed: [number, number],
        opacity = 0.35,
      ) => {
        const material = new THREE.MeshPhysicalMaterial({
          color,
          metalness: 0.15,
          roughness: 0.08,
          clearcoat: 0.5,
          clearcoatRoughness: 0.2,
          transmission: 0.35,   // glassy
          thickness: 0.6,       // glass thickness
          ior: 1.2,
          envMapIntensity: 1.0,
          transparent: true,
          opacity,              // keep your param
          depthWrite: false,
          side: THREE.DoubleSide,
        })
        const mesh = new THREE.InstancedMesh(geometry, material, count)
        const dummy = new THREE.Object3D()

        const [sMin, sMax] = sizeRange
        const [rMin, rMax] = radiusRange

        for (let i = 0; i < count; i++) {
          // random point in spherical shell
          const u = Math.random()
          const v = Math.random()
          const theta = 2 * Math.PI * u
          const phi = Math.acos(2 * v - 1)
          const r = rMin + Math.random() * (rMax - rMin)
          const x = r * Math.sin(phi) * Math.cos(theta)
          const y = r * Math.cos(phi) * 0.75 // slightly compress vertically
          const z = r * Math.sin(phi) * Math.sin(theta)

          const s = sMin + Math.random() * (sMax - sMin)
          dummy.position.set(x, y, z)
          dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
          dummy.scale.setScalar(s)
          dummy.updateMatrix()
          mesh.setMatrixAt(i, dummy.matrix)
        }

        mesh.userData.rotateY = rotationSpeed[0]
        mesh.userData.rotateX = rotationSpeed[1]
        fields.push(mesh)
        scene.add(mesh)
      }

      // Background instanced shapes layer (small, many, distributed)
      const palette = [0x8b5cf6, 0x22d3ee, 0xf472b6]
      addInstancedField(
        new THREE.IcosahedronGeometry(1, 0),
        220,
        palette[0],
        [0.09, 0.14],      // bigger
        [7.5, 11.5],
        [0.0005, 0.0002],
        0.28
      )
      addInstancedField(
        new THREE.OctahedronGeometry(1, 0),
        180,
        palette[1],
        [0.085, 0.13],     // bigger
        [7.5, 11.5],
        [0.00035, 0.00025],
        0.26
      )
      addInstancedField(
        new THREE.TetrahedronGeometry(1, 0),
        160,
        palette[2],
        [0.085, 0.13],     // bigger
        [7.5, 11.5],
        [0.0004, 0.0003],
        0.24
      )
      // Center cluster (premium shapes, low count)
      const shapes: any[] = []
      const makeMetal = (hex: number) =>
        new THREE.MeshPhysicalMaterial({
          color: hex,
          metalness: 0.7,
          roughness: 0.18,
          clearcoat: 0.6,
          clearcoatRoughness: 0.12,
          envMapIntensity: 0.9,
        })
      const makeGlass = (hex: number) =>
        new THREE.MeshPhysicalMaterial({
          color: hex,
          metalness: 0.2,
          roughness: 0.05,
          transmission: 0.5,
          thickness: 0.8,
          envMapIntensity: 1.0,
        })

      const addCenter = (mesh: any, idx: number) => {
        const radius = 1.35
        const angle = (idx / 5) * Math.PI * 2
        mesh.position.set(Math.cos(angle) * radius * 0.6, (idx - 2) * 0.12, Math.sin(angle) * radius * 0.6)
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
        shapes.push(mesh)
        scene.add(mesh)
      }

      //addCenter(new (THREE as any).Mesh(new THREE.TorusKnotGeometry(0.6, 0.18, 220, 32), makeMetal(palette[0])), 0)
      //addCenter(new (THREE as any).Mesh(new THREE.IcosahedronGeometry(0.75, 1), makeGlass(palette[1])), 1)
      //addCenter(new (THREE as any).Mesh(new THREE.CapsuleGeometry(0.38, 0.9, 8, 16), makeMetal(palette[2])), 2)
      //addCenter(new (THREE as any).Mesh(new THREE.TorusGeometry(0.95, 0.06, 24, 120), makeGlass(palette[0])), 3)
      {
        class GentleCurve extends (THREE as any).Curve<any> {
          getPoint(t: number, target = new THREE.Vector3()) {
            const a = Math.sin(t * Math.PI * 2) * 0.6
            const b = Math.cos(t * Math.PI * 2) * 0.6
            return target.set(a, Math.sin(t * Math.PI * 1.5) * 0.4, b)
          }
        }
        const path = new GentleCurve()
        //addCenter(new (THREE as any).Mesh(new THREE.TubeGeometry(path, 140, 0.06, 12, false), makeMetal(palette[1])), 4)
      }

      // Lights
      const ambient = new THREE.AmbientLight(0xffffff, 0.65)
      const key = new THREE.DirectionalLight(0x8b5cf6, 0.9)
      key.position.set(3, 3, 4)
      const fill = new THREE.DirectionalLight(0x22d3ee, 0.7)
      fill.position.set(-3, -2, -2)
      scene.add(ambient, key, fill)

      // Subtle bloom
      composer = new EffectComposer(renderer)
      composer.addPass(new RenderPass(scene, camera))
      // when creating bloom pass
const bloom = new UnrealBloomPass(new THREE.Vector2(width, height), 0.30, 0.8, 0.9);
      composer.addPass(bloom)

      // Interaction: gentle parallax
      const mouse = { x: 0, y: 0 }
      const target = { x: 0, y: 0 }
      const onMouseMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      }
      window.addEventListener("mousemove", onMouseMove)

      const onResize = () => {
        const w = container.clientWidth || window.innerWidth
        const h = container.clientHeight || window.innerHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
        composer.setSize(w, h)
      }
      window.addEventListener("resize", onResize)

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate)

        target.x += (mouse.x - target.x) * 0.06
        target.y += (mouse.y - target.y) * 0.06

        // Rotate background instanced fields subtly
        fields.forEach((f) => {
          f.rotation.y += f.userData.rotateY || 0.0003
          f.rotation.x += f.userData.rotateX || 0.0002
        })

        // Gentle motion on center shapes
        shapes.forEach((s, i) => {
          s.rotation.x += 0.0016 + i * 0.0002
          s.rotation.y += 0.0022 + i * 0.00025
        })

        camera.position.x = target.x * 0.35
        camera.position.y = target.y * 0.22
        camera.lookAt(0, 0, 0)

        composer.render()
      }
      animate()

      cleanupRef.current = () => {
        window.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("resize", onResize)
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
        if (renderer?.domElement?.parentNode) container.removeChild(renderer.domElement)
        composer?.dispose?.()
        renderer?.dispose?.()
        pmrem?.dispose?.()
      }
    }

    init()
    return () => cleanupRef.current?.()
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}