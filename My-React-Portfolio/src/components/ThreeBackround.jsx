import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);


    // Group for spheres
    const spheresGroup = new THREE.Group();

    // Parameters for spheres
    const numberOfSpheres = 1000;
    const sphereRadius = .05;
    const spread = 20;

    // Create multiple spheres
    for (let i = 0; i < numberOfSpheres; i++) {
      const geometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: 0x7F7979 });
      const sphere = new THREE.Mesh(geometry, material);

      // Position spheres randomly
      sphere.position.x = Math.random() * spread - spread / 2;
      sphere.position.y = Math.random() * spread - spread / 2;
      sphere.position.z = Math.random() * spread - spread / 2;

      spheresGroup.add(sphere);
    }

    scene.add(spheresGroup);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Set camera position
    camera.position.z = 12;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire group of spheres
      spheresGroup.rotation.x += 0.005;
      spheresGroup.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ThreeBackground;
