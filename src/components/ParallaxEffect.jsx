import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

const ParallaxEffect = () => {
  const containerRef = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const particles = useRef([]);
  const geometricObjects = useRef([]);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const windowHalfX = useRef(window.innerWidth / 2);
  const windowHalfY = useRef(window.innerHeight / 2);
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);
  const requestId = useRef(null);
  const clock = useRef(new THREE.Clock());
  
  // Cores temáticas do GPTICAM em formato Three.js
  const themeColors = useMemo(() => ({
    teal: new THREE.Color('#376A63'),
    darkTeal: new THREE.Color('#2C5550'),
    deepTeal: new THREE.Color('#20423E'),
    gold: new THREE.Color('#FDD744'),
    green: new THREE.Color('#7DCB80'),
  }), []);
  
  useEffect(() => {
    init();
    
    return () => {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current);
      }
      
      if (renderer.current) {
        renderer.current.dispose();
      }
      
      if (containerRef.current && renderer.current && renderer.current.domElement) {
        containerRef.current.removeChild(renderer.current.domElement);
      }
      
      // Limpar referências e memória
      particles.current.forEach(particle => {
        if (particle.geometry) particle.geometry.dispose();
        if (particle.material) particle.material.dispose();
      });
      
      geometricObjects.current.forEach(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const init = () => {
    // Configurar cena
    scene.current = new THREE.Scene();
    
    // Configurar câmera
    camera.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    camera.current.position.z = 1000;
    
    // Configurar renderer com antialiasing melhorado
    renderer.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limitar para melhor performance
    renderer.current.setClearColor(0x000000, 0);
    renderer.current.shadowMap.enabled = true;
    renderer.current.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Adicionar o canvas ao container
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.current.domElement);
    }
    
    // Criar partículas e objetos geométricos
    createParticles();
    createGeometricObjects();
    
    // Adicionar event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Iniciar animação
    animate();
  };
  
  const createParticles = () => {
    // Limpar partículas existentes
    if (scene.current) {
      scene.current.children.forEach(child => {
        if (child instanceof THREE.Points) {
          scene.current.remove(child);
        }
      });
    }
    
    particles.current = [];
    
    // Camada 1 - Partículas pequenas e numerosas (efeito estrelas distantes)
    const particleGeometry1 = new THREE.BufferGeometry();
    const particleCount1 = 2000;
    const positionArray1 = new Float32Array(particleCount1 * 3);
    const scaleArray1 = new Float32Array(particleCount1);
    const colorArray1 = new Float32Array(particleCount1 * 3);
    const alphaArray1 = new Float32Array(particleCount1);
    
    for (let i = 0; i < particleCount1; i++) {
      const i3 = i * 3;
      positionArray1[i3] = (Math.random() - 0.5) * 2500;
      positionArray1[i3 + 1] = (Math.random() - 0.5) * 2500;
      positionArray1[i3 + 2] = (Math.random() - 0.5) * 2500;
      
      scaleArray1[i] = Math.random() * 2 + 0.5;
      alphaArray1[i] = 0.3 + Math.random() * 0.7; // Variação de opacidade
      
      // Cores variadas com gradiente de azul/ciano (tema amazônico/tecnológico)
      const shade = Math.random();
      const color = new THREE.Color().lerpColors(
        themeColors.deepTeal, 
        themeColors.teal, 
        shade
      );
      
      colorArray1[i3] = color.r;
      colorArray1[i3 + 1] = color.g;
      colorArray1[i3 + 2] = color.b;
    }
    
    particleGeometry1.setAttribute('position', new THREE.BufferAttribute(positionArray1, 3));
    particleGeometry1.setAttribute('scale', new THREE.BufferAttribute(scaleArray1, 1));
    particleGeometry1.setAttribute('color', new THREE.BufferAttribute(colorArray1, 3));
    particleGeometry1.setAttribute('alpha', new THREE.BufferAttribute(alphaArray1, 1));
    
    // Criar textura personalizada para partículas
    const particleTexture = new THREE.TextureLoader().load('/img/particle.png');
    
    const particleMaterial1 = new THREE.PointsMaterial({
      size: 2.5,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      map: particleTexture
    });
    
    const particleSystem1 = new THREE.Points(particleGeometry1, particleMaterial1);
    scene.current.add(particleSystem1);
    particles.current.push(particleSystem1);
    
    // Camada 2 - Partículas médias estilizadas (cores do GPTICAM)
    const particleGeometry2 = new THREE.BufferGeometry();
    const particleCount2 = 400;
    const positionArray2 = new Float32Array(particleCount2 * 3);
    const scaleArray2 = new Float32Array(particleCount2);
    const colorArray2 = new Float32Array(particleCount2 * 3);
    
    for (let i = 0; i < particleCount2; i++) {
      const i3 = i * 3;
      positionArray2[i3] = (Math.random() - 0.5) * 2000;
      positionArray2[i3 + 1] = (Math.random() - 0.5) * 2000;
      positionArray2[i3 + 2] = (Math.random() - 0.5) * 1500;
      
      scaleArray2[i] = Math.random() * 6 + 3;
      
      // Cores alternadas entre amarelo/verde (cores do GPTICAM)
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        // Variação de amarelo baseado no gold
        const goldVar = new THREE.Color().lerpColors(
          themeColors.gold,
          new THREE.Color(0xFFF5DD),
          Math.random() * 0.3
        );
        colorArray2[i3] = goldVar.r;
        colorArray2[i3 + 1] = goldVar.g;
        colorArray2[i3 + 2] = goldVar.b;
      } else {
        // Variação de verde baseado no green
        const greenVar = new THREE.Color().lerpColors(
          themeColors.green,
          new THREE.Color(0xADEBB0),
          Math.random() * 0.3
        );
        colorArray2[i3] = greenVar.r;
        colorArray2[i3 + 1] = greenVar.g;
        colorArray2[i3 + 2] = greenVar.b;
      }
    }
    
    particleGeometry2.setAttribute('position', new THREE.BufferAttribute(positionArray2, 3));
    particleGeometry2.setAttribute('scale', new THREE.BufferAttribute(scaleArray2, 1));
    particleGeometry2.setAttribute('color', new THREE.BufferAttribute(colorArray2, 3));
    
    // Usando uma textura diferente para o segundo sistema de partículas
    const particleTexture2 = new THREE.TextureLoader().load('/img/particle_glow.png');
    
    const particleMaterial2 = new THREE.PointsMaterial({
      size: 5,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      map: particleTexture2,
    });
    
    const particleSystem2 = new THREE.Points(particleGeometry2, particleMaterial2);
    scene.current.add(particleSystem2);
    particles.current.push(particleSystem2);
    
    // Camada 3 - Partículas grandes e brilhantes (efeito primeiro plano)
    const particleGeometry3 = new THREE.BufferGeometry();
    const particleCount3 = 80;
    const positionArray3 = new Float32Array(particleCount3 * 3);
    const scaleArray3 = new Float32Array(particleCount3);
    const colorArray3 = new Float32Array(particleCount3 * 3);
    
    for (let i = 0; i < particleCount3; i++) {
      const i3 = i * 3;
      positionArray3[i3] = (Math.random() - 0.5) * 1500;
      positionArray3[i3 + 1] = (Math.random() - 0.5) * 1500;
      positionArray3[i3 + 2] = (Math.random() - 0.5) * 800;
      
      scaleArray3[i] = Math.random() * 10 + 6;
      
      // Cores brilhantes com tendência para amarelo-dourado
      colorArray3[i3] = 0.9 + Math.random() * 0.1; // R
      colorArray3[i3 + 1] = 0.8 + Math.random() * 0.2; // G
      colorArray3[i3 + 2] = 0.5 + Math.random() * 0.5; // B
    }
    
    particleGeometry3.setAttribute('position', new THREE.BufferAttribute(positionArray3, 3));
    particleGeometry3.setAttribute('scale', new THREE.BufferAttribute(scaleArray3, 1));
    particleGeometry3.setAttribute('color', new THREE.BufferAttribute(colorArray3, 3));
    
    // Textura com flare para partículas grandes
    const particleTexture3 = new THREE.TextureLoader().load('/img/flare.png');
    
    const particleMaterial3 = new THREE.PointsMaterial({
      size: 10,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      map: particleTexture3
    });
    
    const particleSystem3 = new THREE.Points(particleGeometry3, particleMaterial3);
    scene.current.add(particleSystem3);
    particles.current.push(particleSystem3);
  };
  
  // Adicionar objetos geométricos para maior variedade visual
  const createGeometricObjects = () => {
    geometricObjects.current = [];
    
    // Criar um grupo de hexágonos flutuantes
    const hexGroup = new THREE.Group();
    const hexCount = 15;
    
    for (let i = 0; i < hexCount; i++) {
      const size = Math.random() * 20 + 10;
      const geometry = new THREE.CircleGeometry(size, 6);
      
      // Escolher entre as cores temáticas
      const colorChoice = Math.random();
      let color;
      
      if (colorChoice < 0.3) {
        color = themeColors.gold;
      } else if (colorChoice < 0.6) {
        color = themeColors.green;
      } else {
        color = themeColors.teal;
      }
      
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.2,
        side: THREE.DoubleSide,
        wireframe: Math.random() > 0.5
      });
      
      const hex = new THREE.Mesh(geometry, material);
      
      // Posicionar aleatoriamente
      hex.position.x = (Math.random() - 0.5) * 2000;
      hex.position.y = (Math.random() - 0.5) * 2000;
      hex.position.z = (Math.random() - 0.5) * 1000;
      
      // Rotação aleatória
      hex.rotation.x = Math.random() * Math.PI;
      hex.rotation.y = Math.random() * Math.PI;
      
      // Armazenar informações para animação
      hex.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.001,
          y: (Math.random() - 0.5) * 0.001,
          z: (Math.random() - 0.5) * 0.001
        },
        floatSpeed: 0.2 + Math.random() * 0.3,
        floatOffset: Math.random() * Math.PI * 2
      };
      
      hexGroup.add(hex);
      geometricObjects.current.push(hex);
    }
    
    scene.current.add(hexGroup);
    
    // Adicionar algumas linhas conectoras flutuantes
    const linesGroup = new THREE.Group();
    const lineCount = 10;
    
    for (let i = 0; i < lineCount; i++) {
      const points = [];
      const segmentCount = Math.floor(Math.random() * 3) + 2;
      
      for (let j = 0; j < segmentCount; j++) {
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * 300,
          (Math.random() - 0.5) * 300,
          (Math.random() - 0.5) * 300
        ));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      // Escolher cor entre dourado e verde
      const lineColor = Math.random() > 0.5 ? themeColors.gold : themeColors.green;
      
      const material = new THREE.LineBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: 0.3 + Math.random() * 0.3
      });
      
      const line = new THREE.Line(geometry, material);
      
      // Posicionar aleatoriamente
      line.position.x = (Math.random() - 0.5) * 1500;
      line.position.y = (Math.random() - 0.5) * 1500;
      line.position.z = (Math.random() - 0.5) * 800;
      
      // Armazenar informações para animação
      line.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.0005,
          y: (Math.random() - 0.5) * 0.0005,
          z: (Math.random() - 0.5) * 0.0005
        },
        floatSpeed: 0.1 + Math.random() * 0.2,
        floatOffset: Math.random() * Math.PI * 2
      };
      
      linesGroup.add(line);
      geometricObjects.current.push(line);
    }
    
    scene.current.add(linesGroup);
  };
  
  const animate = () => {
    requestId.current = requestAnimationFrame(animate);
    
    const time = clock.current.getElapsedTime();
    
    // Suavização do scroll
    scrollY.current += (targetScrollY.current - scrollY.current) * 0.1;
    
    // Atualizar rotação e posição das partículas com base no mouse e scroll
    if (particles.current.length > 0) {
      // Camada 1 - movimenta lentamente
      particles.current[0].rotation.x = mouseY.current * 0.0002;
      particles.current[0].rotation.y = mouseX.current * 0.0002;
      particles.current[0].position.y = scrollY.current * -0.05;
      
      // Adicionar ondulação suave
      particles.current[0].rotation.z = Math.sin(time * 0.1) * 0.01;
      
      // Camada 2 - movimenta mais rápido
      if (particles.current[1]) {
        particles.current[1].rotation.x = mouseY.current * 0.0005;
        particles.current[1].rotation.y = mouseX.current * 0.0005;
        particles.current[1].position.y = scrollY.current * -0.1;
        particles.current[1].rotation.z = Math.sin(time * 0.2) * 0.03;
      }
      
      // Camada 3 - movimenta mais rápido ainda
      if (particles.current[2]) {
        particles.current[2].rotation.x = mouseY.current * 0.001;
        particles.current[2].rotation.y = mouseX.current * 0.001;
        particles.current[2].position.y = scrollY.current * -0.2;
        particles.current[2].rotation.z = Math.sin(time * 0.3) * 0.05;
        
        // Pulsar tamanho das partículas
        const scale = 1.0 + Math.sin(time * 0.5) * 0.2;
        particles.current[2].material.size = 10 * scale;
      }
    }
    
    // Animar objetos geométricos
    geometricObjects.current.forEach((object) => {
      // Rotação contínua
      object.rotation.x += object.userData.rotationSpeed.x;
      object.rotation.y += object.userData.rotationSpeed.y;
      object.rotation.z += object.userData.rotationSpeed.z;
      
      // Movimento flutuante
      object.position.y += Math.sin(time * object.userData.floatSpeed + object.userData.floatOffset) * 0.15;
      
      // Responder ao mouse suavemente
      object.position.x += (mouseX.current * 0.00005) * (Math.random() - 0.5);
      object.position.z += (mouseY.current * 0.00005) * (Math.random() - 0.5);
    });
    
    // Efeito de brilho pulsante para alguns objetos
    if (time % 5 < 0.1 && geometricObjects.current.length > 0) {
      const randomIndex = Math.floor(Math.random() * geometricObjects.current.length);
      const obj = geometricObjects.current[randomIndex];
      
      if (obj.material && !obj.userData.pulsing) {
        obj.userData.pulsing = true;
        obj.userData.originalOpacity = obj.material.opacity;
        
        // Animação de pulso
        const pulseAnimation = () => {
          const pulseDuration = 1.5;
          let startTime = Date.now();
          
          const animatePulse = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            
            if (elapsed < pulseDuration) {
              const pulseProgress = elapsed / pulseDuration;
              const opacityBoost = Math.sin(pulseProgress * Math.PI) * 0.5;
              
              obj.material.opacity = obj.userData.originalOpacity + opacityBoost;
              obj.userData.pulseFrame = requestAnimationFrame(animatePulse);
            } else {
              obj.material.opacity = obj.userData.originalOpacity;
              obj.userData.pulsing = false;
              cancelAnimationFrame(obj.userData.pulseFrame);
            }
          };
          
          animatePulse();
        };
        
        pulseAnimation();
      }
    }
    
    if (renderer.current && scene.current && camera.current) {
      renderer.current.render(scene.current, camera.current);
    }
  };
  
  const handleResize = () => {
    windowHalfX.current = window.innerWidth / 2;
    windowHalfY.current = window.innerHeight / 2;
    
    if (camera.current) {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
    }
    
    if (renderer.current) {
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    }
  };
  
  const handleMouseMove = (event) => {
    mouseX.current = event.clientX - windowHalfX.current;
    mouseY.current = event.clientY - windowHalfY.current;
  };
  
  const handleScroll = () => {
    targetScrollY.current = window.scrollY;
  };
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParallaxEffect; 