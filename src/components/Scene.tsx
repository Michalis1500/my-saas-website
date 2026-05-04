import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSphere = ({ url }: { url: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
      video.play().catch(console.warn);
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(console.warn);
      });
    }

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    setVideoTexture(texture);

    // GSAP Scroll Animations for the mesh
    if (meshRef.current) {
        gsap.to(meshRef.current.rotation, {
          y: Math.PI * 2,
          scrollTrigger: {
            trigger: ".middle-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        });

        gsap.to(meshRef.current.scale, {
          x: 1.2,
          y: 1.2,
          z: 1.2,
          scrollTrigger: {
            trigger: ".middle-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
    }

    return () => {
      video.pause();
      video.src = "";
      video.load();
    };
  }, [url]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        {videoTexture ? (
          <meshBasicMaterial map={videoTexture} transparent opacity={0.3} />
        ) : (
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
        )}
      </mesh>
    </Float>
  );
};

const BackgroundShapes = () => {
  const knotRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (knotRef.current) {
      gsap.to(knotRef.current.rotation, {
        z: Math.PI,
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <>
      <mesh ref={knotRef} position={[-6, 3, -8]} rotation={[1, 1, 1]}>
        <torusKnotGeometry args={[1.2, 0.4, 128, 16]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.9} wireframe opacity={0.1} transparent />
      </mesh>
      <mesh position={[7, -4, -10]} rotation={[2, 1, 0.5]}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#222222" roughness={0.1} metalness={1} wireframe opacity={0.05} transparent />
      </mesh>
    </>
  );
};

export const Scene = () => {
  const videoUrl = "https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        shadows 
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <Environment preset="night" />
        
        <VideoSphere url={videoUrl} />
        <BackgroundShapes />
      </Canvas>
    </div>
  );
};
