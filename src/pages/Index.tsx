import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import PersonCard from "@/components/ui/person-card";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import DecryptedText from "../DecryptedText.jsx";
import Hyperspeed from "../Hyperspeed.jsx";
import ParallaxEffect from '../components/ParallaxEffect';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const Index = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [robotHover, setRobotHover] = useState(false);
  const [currentRobot, setCurrentRobot] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Referências para animação de scroll
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const videosRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Valores transformados para animações baseadas em scroll com spring para movimento mais suave
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  const robotScale = useTransform(smoothProgress, [0, 0.3], [1, 0.8]);
  const robotY = useTransform(smoothProgress, [0, 0.3], [0, -30]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0.6]);
  const titleX = useTransform(smoothProgress, [0, 0.3], [0, -30]);
  const heroElementY = useTransform(smoothProgress, [0, 0.2], [0, -50]);
  
  // Movimento do background
  const bgY = useTransform(smoothProgress, [0, 1], [0, -150]);
  
  // Velocidade de movimento diferente para cada seção
  const aboutSectionY = useTransform(smoothProgress, [0.2, 0.5], [50, -50]);
  const videosY = useTransform(smoothProgress, [0.5, 0.8], [50, -30]);
  
  // Interatividade do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Alternar entre os robôs automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      switchRobot();
    }, 5000); // Alternar a cada 5 segundos
    
    return () => clearInterval(interval);
  }, [currentRobot]);
  
  // Movimento do mouse
  useEffect(() => {
    function handleMouseMove(e) {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Normalizar valores para que o centro da tela seja (0,0)
      mouseX.set((clientX - centerX) / centerX * 20); // Movimento proporcional, limitado a +-20px
      mouseY.set((clientY - centerY) / centerY * 20);
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Função para alternar entre os robôs com animação
  const switchRobot = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentRobot(currentRobot === 1 ? 2 : 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 300);
  };
  
  // Sample researchers data
  const featuredResearchers = [
    {
      name: "Dr. Ana Silva",
      role: "Coordenadora",
      area: "Inteligência Artificial, Aprendizado de Máquina",
      email: "ana.silva@gpticam.org"
    },
    {
      name: "Dr. Rafael Costa",
      role: "Pesquisador Sênior",
      area: "Visão Computacional, Processamento de Imagens",
      email: "rafael.costa@gpticam.org"
    },
  ];

  // Sample scholars data
  const featuredScholars = [
    {
      name: "Maria Oliveira",
      role: "Bolsista de Doutorado",
      area: "Processamento de Linguagem Natural",
      email: "maria.oliveira@gpticam.org"
    },
    {
      name: "Pedro Santos",
      role: "Bolsista de Mestrado",
      area: "Computação em Nuvem, Big Data",
      email: "pedro.santos@gpticam.org"
    },
  ];

  // Sample projects data
  const featuredProjects = [
    {
      title: "Sistema de Visão Computacional para Monitoramento Ambiental",
      description: "Desenvolvimento de um sistema baseado em visão computacional para monitoramento e análise de áreas de preservação ambiental.",
      status: "Em andamento" as const,
      tags: ["Visão Computacional", "Meio Ambiente", "IA"],
      year: "2023-2025",
    },
    {
      title: "Chatbot Inteligente para Atendimento ao Cidadão",
      description: "Criação de um chatbot com processamento de linguagem natural para melhorar o atendimento em serviços públicos.",
      status: "Concluído" as const,
      tags: ["NLP", "Chatbot", "Serviços Públicos"],
      year: "2021-2023",
    },
  ];

  // Configurações para o efeito Hyperspeed
  const hyperspeedOptions = {
    distortion: 'turbulentDistortion',
    colors: {
      roadColor: 0x376A63,
      islandColor: 0x2C5550,
      background: 0x20423E,
      shoulderLines: 0xFDD744,
      brokenLines: 0x7DCB80,
      leftCars: [0xFDD744, 0xE8C43A, 0xDEB82F],
      rightCars: [0x7DCB80, 0x5EB963, 0x50AA55],
      sticks: 0xFDD744,
    },
    onSpeedUp: () => console.log('Acelerando!'),
    onSlowDown: () => console.log('Desacelerando!'),
  };

  return (
    <Layout className="bg-gradient-to-br from-[#376A63] to-[#20423E] min-h-screen relative overflow-x-hidden">
      <div ref={containerRef} className="relative min-h-screen">
        {/* Componente de Efeito Paralaxe */}
        <ParallaxEffect />
        
        {/* Fundo com animação Hyperspeed */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-25"
          style={{ y: bgY }}
        >
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </motion.div>
        
        {/* Hero Section com animação moderna */}
        <motion.section 
          ref={heroRef}
          className="flex flex-col md:flex-row min-h-[90vh] relative overflow-hidden z-10"
        >
          {/* Lado esquerdo com imagem de robô animada */}
          <motion.div 
            style={{ 
              scale: robotScale,
              y: robotY,
              x: mouseX
            }}
            className="w-full md:w-1/2 h-[50vh] md:h-auto relative bg-[#376A63]/50 flex items-center justify-center backdrop-blur-sm"
          >
            <div 
              className="relative w-[80%] h-[80%] transition-all duration-500 perspective"
              onMouseEnter={() => setRobotHover(true)}
              onMouseLeave={() => setRobotHover(false)}
            >
              {/* Círculo animado atrás do robô */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDD744]/20 to-transparent rounded-full animate-pulse-slow"></div>
              
              {/* Robô com animação - container para ambos os robôs */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${robotHover ? 'scale-110' : 'scale-100'}`}>
                {/* Robot 1 */}
                <motion.img 
                  src="/img/robot 1.png" 
                  alt="GPTICAM Robot 1" 
                  className={`w-auto h-full object-contain transition-all duration-700 absolute inset-0 
                    ${currentRobot === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'} 
                    ${isTransitioning && currentRobot === 2 ? 'robot-transition-out' : ''}
                    ${!isTransitioning && currentRobot === 1 ? 'robot-transition-in' : ''}
                  `}
                />
                
                {/* Robot 2 */}
                <motion.img 
                  src="/img/robot 2.png" 
                  alt="GPTICAM Robot 2" 
                  className={`w-auto h-full object-contain transition-all duration-700 absolute inset-0 
                    ${currentRobot === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                    ${isTransitioning && currentRobot === 1 ? 'robot-transition-out' : ''}
                    ${!isTransitioning && currentRobot === 2 ? 'robot-transition-in' : ''}
                  `}
                />
              </div>
              
              {/* Hexágonos flutuantes */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#376A63]/30 rounded-xl rotate-45 animate-float opacity-60"></div>
              <div className="absolute -bottom-5 -left-5 w-10 h-10 bg-[#FDD744]/20 rounded-xl rotate-12 animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
          
          {/* Lado direito com título e descrição */}
          <motion.div 
            style={{ 
              opacity: titleOpacity,
              x: titleX,
              y: mouseY
            }} 
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8 space-y-6"
          >
            {/* Logo GPTICAM */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <img 
                src="/img/logo gpticam.png" 
                alt="GPTICAM Logo" 
                className="h-20 w-auto mb-2" 
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FDD744] to-[#FFEB80]">
              <DecryptedText 
                text="nós amamos a tecnologia" 
                delay={800}
                iterations={5}
                animateOn="load"
              />
            </h1>
            
            <p className="text-[#7DCB80] text-lg md:text-xl text-center md:text-left max-w-lg">
              Grupo de Pesquisa de Tecnologias de Informação e Comunicação na Amazônia
            </p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAbout(!showAbout)}
              className="mt-8 flex items-center gap-2 border border-[#FDD744] text-[#FDD744] px-8 py-3 rounded-full hover:bg-[#FDD744]/10 transition-all duration-300 group"
            >
              Sobre Nós
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 ${showAbout ? 'rotate-180' : ''}`} />
            </motion.button>
          </motion.div>
          
          {/* Elemento decorativo como no design de referência */}
          <motion.div 
            style={{ y: heroElementY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-10 right-10 z-10"
          >
            <div className="flex flex-col items-end">
              <div className="w-32 h-1 bg-[#FDD744] mb-1 animate-width"></div>
              <div className="w-16 h-1 bg-[#FDD744] animate-width-delay"></div>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section com animação de slide down */}
        <motion.section 
          ref={aboutRef}
          style={{ y: aboutSectionY }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: showAbout ? 1 : 0,
            height: showAbout ? "auto" : "0px"
          }}
          transition={{ duration: 0.5 }}
          className="bg-[#2C5550]/90 backdrop-blur-sm text-white py-16 z-10 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-[#FDD744]">
              Sobre o GPTICAM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-[#7DCB80] leading-relaxed">
                  O Grupo de Pesquisa em Tecnologias da Informação e Comunicação na Amazônia foi o pioneiro na construção de pesquisas no Ifap e existe desde 2011. As pesquisas dos integrantes do grupo situam-se nas áreas das Ciências Exatas e da Natureza e Educação. Têm como objetivo abordar temas referentes ao ensino, aprendizagem, desenvolvimento de soluções tecnológicas e inovação em diferentes domínios, originando publicações (artigos, periódicos) e trabalhos que são apresentados sistematicamente em eventos (congressos, seminários, colóquios e encontros) de divulgação científica.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#FDD744]">
                  Áreas de Pesquisa
                </h3>
                <ul className="space-y-2 text-[#7DCB80]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDD744]">→</span>
                    <span>
                      Inteligência Artificial e Aprendizado de Máquina
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDD744]">→</span>
                    <span>
                      Processamento de Linguagem Natural
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDD744]">→</span>
                    <span>
                      Visão Computacional
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDD744]">→</span>
                    <span>
                      Computação em Nuvem e Sistemas Distribuídos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDD744]">→</span>
                    <span>
                      Tecnologias para Sustentabilidade na Amazônia
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section 
          ref={videosRef}
          style={{ y: videosY }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 bg-[#376A63]/90 backdrop-blur-sm relative z-10"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 border-l-4 border-[#FDD744] pl-4"
            >
              Vídeos em Destaque
            </motion.h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
              {/* Molduras para vídeos com partes do mesmo vídeo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="w-[240px] h-[320px] border-2 border-[#FDD744] relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,215,68,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FDD744]/70 flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
                <video 
                  className="w-[200%] h-[200%] absolute top-0 left-0 object-cover"
                  style={{ objectPosition: "0% 0%" }}
                  src="/videos/demo-video.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  disablePictureInPicture
                ></video>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="w-[300px] h-[400px] border-2 border-[#FDD744] relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,215,68,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FDD744]/70 flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
                <video 
                  className="w-[200%] h-[200%] absolute top-0 left-0 object-cover"
                  style={{ objectPosition: "100% 0%" }}
                  src="/videos/demo-video.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  disablePictureInPicture
                ></video>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="w-[240px] h-[320px] border-2 border-[#FDD744] relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,215,68,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FDD744]/70 flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
                <video 
                  className="w-[200%] h-[200%] absolute top-0 left-0 object-cover"
                  style={{ objectPosition: "0% 100%" }}
                  src="/videos/demo-video.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  disablePictureInPicture
                ></video>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="w-[300px] h-[400px] border-2 border-[#FDD744] relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,215,68,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FDD744]/70 flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
                <video 
                  className="w-[200%] h-[200%] absolute top-0 left-0 object-cover"
                  style={{ objectPosition: "100% 100%" }}
                  src="/videos/demo-video.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  disablePictureInPicture
                ></video>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Index;
