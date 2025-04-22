import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import PersonCard from "@/components/ui/person-card";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import DecryptedText from "../DecryptedText.jsx";
import Hyperspeed from "../Hyperspeed.jsx";

const Index = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [robotHover, setRobotHover] = useState(false);
  const [currentRobot, setCurrentRobot] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Alternar entre os robôs automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      switchRobot();
    }, 5000); // Alternar a cada 5 segundos
    
    return () => clearInterval(interval);
  }, [currentRobot]);
  
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
    <Layout className="bg-gradient-to-br from-[#376A63] to-[#20423E] min-h-screen relative">
      {/* Fundo com animação Hyperspeed */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>
      
      {/* Hero Section com animação moderna */}
      <section className="flex flex-col md:flex-row min-h-[90vh] relative overflow-hidden z-10">
        {/* Lado esquerdo com imagem de robô animada */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative bg-[#376A63]/50 flex items-center justify-center backdrop-blur-sm">
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
              <img 
                src="/img/robot 1.png" 
                alt="GPTICAM Robot 1" 
                className={`w-auto h-full object-contain transition-all duration-700 absolute inset-0 
                  ${currentRobot === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'} 
                  ${isTransitioning && currentRobot === 2 ? 'robot-transition-out' : ''}
                  ${!isTransitioning && currentRobot === 1 ? 'robot-transition-in' : ''}
                  ${robotHover ? 'filter-none' : 'filter brightness-90'}`}
                style={{
                  animation: 'floatingRobot 4s ease-in-out infinite',
                  transformStyle: 'preserve-3d'
                }}
              />
              
              {/* Robot 2 */}
              <img 
                src="/img/robot 2.png" 
                alt="GPTICAM Robot 2" 
                className={`w-auto h-full object-contain transition-all duration-700 absolute inset-0 
                  ${currentRobot === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'} 
                  ${isTransitioning && currentRobot === 1 ? 'robot-transition-out' : ''}
                  ${!isTransitioning && currentRobot === 2 ? 'robot-transition-in' : ''}
                  ${robotHover ? 'filter-none' : 'filter brightness-90'}`}
                style={{
                  animation: 'floatingRobot 4s ease-in-out infinite',
                  transformStyle: 'preserve-3d'
                }}
              />
              
              {/* Botões para alternar manualmente */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                <button 
                  onClick={() => !isTransitioning && currentRobot !== 1 && switchRobot()}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentRobot === 1 ? 'bg-[#FDD744]' : 'bg-white/30'}`}
                  aria-label="Ver Robot 1"
                />
                <button 
                  onClick={() => !isTransitioning && currentRobot !== 2 && switchRobot()}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentRobot === 2 ? 'bg-[#FDD744]' : 'bg-white/30'}`}
                  aria-label="Ver Robot 2"
                />
              </div>
              
              {/* Efeitos de partículas quando hover */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${robotHover ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#FDD744]/40 rounded-full animate-float-1"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#FDD744]/40 rounded-full animate-float-2"></div>
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FDD744]/40 rounded-full animate-float-3"></div>
              </div>
            </div>
            
            {/* Efeito de brilho ao redor do robô */}
            <div className={`absolute -inset-4 bg-gradient-to-br from-[#FDD744]/10 to-transparent rounded-full blur-xl transition-opacity duration-500 ${robotHover ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          
          {/* Linhas de código decorativas */}
          <div className="absolute bottom-8 left-8 text-[#FDD744]/30 text-xs font-mono">
            <div>01 &lt;robot&gt;</div>
            <div>02 &nbsp;&nbsp;class="intelligent"</div>
            <div>03 &nbsp;&nbsp;data-tech="ai"</div>
            <div>04 &lt;/robot&gt;</div>
          </div>
        </div>
        
        {/* Conteúdo lado direito */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-16 text-white backdrop-blur-sm bg-[#376A63]/40">
          <div className="max-w-xl space-y-6">
            <h1 className="text-6xl md:text-7xl font-light leading-tight animate-fade-in">
              <DecryptedText 
                text="Nós amamos"
                className="text-white opacity-90"
                encryptedClassName="text-[#FDD744]/60"
                speed={80}
                maxIterations={15}
                sequential={true}
                animateOn="view"
              />
              <span className="text-[#FDD744] font-bold block animate-highlight">
                <DecryptedText 
                  text="tecnologia & inovação"
                  className="text-[#FDD744]"
                  encryptedClassName="text-white/60"
                  speed={80}
                  sequential={true}
                  animateOn="view"
                />
              </span>
            </h1>
            
            <p className="text-xl text-[#7DCB80] animate-slide-up">
              <DecryptedText 
                text="GPTICAM - Grupo de Pesquisa em Tecnologia da Informação e Comunicação da Amazônia"
                className="text-[#7DCB80]"
                encryptedClassName="text-[#7DCB80]/60"
                speed={60}
                sequential={true}
                animateOn="view"
              />
            </p>
            
            <button 
              onClick={() => setShowAbout(!showAbout)}
              className="mt-8 flex items-center gap-2 border border-[#FDD744] text-[#FDD744] px-8 py-3 rounded-full hover:bg-[#FDD744]/10 transition-all duration-300 animate-fade-in-delay group"
            >
              Sobre Nós
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 ${showAbout ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        
        {/* Elemento decorativo como no design de referência */}
        <div className="absolute top-10 right-10 z-10">
          <div className="flex flex-col items-end">
            <div className="w-32 h-1 bg-[#FDD744] mb-1 animate-width"></div>
            <div className="w-16 h-1 bg-[#FDD744] animate-width-delay"></div>
          </div>
        </div>
      </section>

      {/* About Section com animação de slide down */}
      <section 
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#2C5550]/90 backdrop-blur-sm text-white py-16 z-10 relative ${
          showAbout ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
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
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-[#376A63]/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-[#FDD744] pl-4">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="relative group bg-[#2C5550] border border-[#20423E] rounded-xl overflow-hidden p-8 cursor-pointer hover:bg-[#31625C] transition-all duration-300"
              >
                {/* Barra lateral colorida */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FDD744] opacity-70 group-hover:opacity-100"></div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[#7DCB80] text-sm block mb-1">{`0${index + 1}`}</span>
                      <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FDD744] transition-colors">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[#7DCB80] text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projetos">
              <Button 
                variant="outline" 
                className="border-[#FDD744] text-[#FDD744] hover:bg-[#FDD744]/10 hover:text-[#FDD744]"
              >
                Ver Todos os Projetos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Researchers & Scholars Section */}
      <section className="py-16 bg-gradient-to-br from-[#376A63]/90 to-[#2C5550]/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-[#FDD744] pl-4">
            Nossa Equipe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredResearchers.map((researcher, index) => (
              <div 
                key={index}
                className="relative group bg-[#2C5550] border border-[#20423E] rounded-xl overflow-hidden p-8 cursor-pointer hover:bg-[#31625C] transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FDD744] opacity-70 group-hover:opacity-100"></div>
                
                <div className="flex-1">
                  <span className="text-[#7DCB80] text-sm block mb-1">Pesquisador</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FDD744] transition-colors mb-2">
                    {researcher.name}
                  </h3>
                  <p className="text-[#7DCB80] text-sm">{researcher.role}</p>
                  <p className="text-[#7DCB80] text-sm mt-2">{researcher.area}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 space-x-4">
            <Link to="/pesquisadores">
              <Button 
                variant="outline" 
                className="border-[#FDD744] text-[#FDD744] hover:bg-[#FDD744]/10 hover:text-[#FDD744]"
              >
                Ver Todos os Pesquisadores
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/bolsistas">
              <Button 
                variant="outline" 
                className="border-[#FDD744] text-[#FDD744] hover:bg-[#FDD744]/10 hover:text-[#FDD744]"
              >
                Ver Todos os Bolsistas
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
