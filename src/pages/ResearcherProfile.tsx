import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Laptop, Database, Globe, PenTool, Mail, LinkedinIcon, GithubIcon, BookOpen, PlayCircle, Award, Terminal, Monitor, MoveRight, MoveUpRight, Book, FileText, Users } from "lucide-react";
import { Researcher } from "@/types/researcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const ResearcherProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const iconMap = {
    "code": Code,
    "laptop": Laptop,
    "database": Database,
    "globe": Globe,
    "pen-tool": PenTool,
  };

  const researchers: Record<string, Researcher> = {
    "ana-silva": {
      id: "ana-silva",
      name: "Dr. Ana Silva",
      role: "Coordenadora",
      area: "Inteligência Artificial, Aprendizado de Máquina",
      email: "ana.silva@gpticam.org",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      bio: "Pesquisadora com mais de 10 anos de experiência em Inteligência Artificial e Aprendizado de Máquina. Coordena projetos de pesquisa em aplicações de IA em problemas complexos.",
      technologies: [
        { name: "Python", icon: "code", proficiency: "89%" },
        { name: "TensorFlow", icon: "laptop", proficiency: "97%" },
        { name: "PyTorch", icon: "database", proficiency: "85%" },
        { name: "Scikit-learn", icon: "globe", proficiency: "98%" },
      ],
      publications: [
        {
          title: "Deep Learning Applications in Computer Vision: A Comprehensive Review",
          year: "2024",
          journal: "Journal of Artificial Intelligence",
          link: "#"
        },
        {
          title: "Machine Learning Approaches for Complex Problem Solving",
          year: "2023",
          journal: "AI Research Quarterly",
          link: "#"
        },
        {
          title: "Neural Networks in Edge Computing: Challenges and Solutions",
          year: "2022",
          journal: "IEEE Transactions on Neural Networks",
          link: "#"
        },
        {
          title: "Advanced Image Recognition Using Convolutional Networks",
          year: "2021",
          journal: "Computer Vision Conference",
          link: "#"
        }
      ],
      statistics: {
        publications: 42,
        projectsLed: 15, 
        yearsExperience: 10
      },
      awards: [
        {
          title: "Pesquisadora do Ano",
          organization: "Prêmio Anual GPTICAM 2023",
          url: "#"
        }
      ]
    },
  };

  const researcher = researchers[id as string];

  if (!researcher) {
    return (
      <Layout>
        <div className="text-center">
          <p>Pesquisador não encontrado</p>
        </div>
      </Layout>
    );
  }

  const initials = researcher.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Layout isDiego={true} className="bg-gradient-to-br from-[#2D3B22] to-[#1A2A12]">
      <button 
        onClick={() => navigate("/pesquisadores")}
        className="flex items-center gap-2 text-[#C9FF76] hover:text-[#C9FF76]/70 mb-6 font-medium transition-all duration-300 group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Voltar para Pesquisadores
      </button>

      <div className="relative rounded-xl p-8 text-white mb-16 overflow-hidden min-h-[540px]">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D3B22] to-[#1A2A12] -z-10"></div>
        <div className="absolute top-10 right-24 w-20 h-20 rounded-full bg-[#91C12D]/20 blur-md animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-16 h-16 rounded-full bg-[#91C12D]/20 blur-md animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Elementos destacados */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#FF6932] rounded-full flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 z-10 group">
          <PlayCircle className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>

        <div className="absolute top-10 right-10 w-24 h-24 bg-[#FF6932] rounded-full flex items-center justify-center z-10 opacity-80">
          <Monitor className="h-14 w-14 text-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-lg opacity-80 font-light">Hello There! <span className="text-xl">👋</span></p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                Eu sou <span className="text-[#C9FF76]">{researcher.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-light text-[#BACD8E] mt-2">
                {researcher.role}
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-light leading-relaxed text-white/80">
              {researcher.bio}
            </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                <div className="flex items-center text-white/70">
                  <Mail className="h-4 w-4 mr-2 text-[#C9FF76]" />
                  <span className="text-sm">{researcher.email}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Globe className="h-4 w-4 mr-2 text-[#C9FF76]" />
                  <span className="text-sm">{researcher.area}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="relative rounded-full w-36 h-36 border border-white/30 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 rounded-full border border-[#C9FF76]/30 animate-ping"></div>
                <div className="text-center">
                  <span className="text-sm font-light">Get</span>
                  <span className="block text-base font-medium">In Touch</span>
                  <span className="text-[#C9FF76] absolute bottom-10 right-6 text-xl group-hover:translate-x-1 transition-transform">↗</span>
                </div>
                <div className="absolute bottom-0 left-12 w-4 h-4 bg-[#C9FF76] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#91C12D]/20 to-[#FF6932]/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage 
                  src={researcher.image} 
                  alt={researcher.name} 
                  className="object-cover w-full h-full transition-transform duration-700 scale-105 group-hover:scale-110" 
                />
              <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
            </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Sobre - estilo About Me */}
      <div className="relative py-20 mb-20">
        {/* Texto gigante "About" no fundo */}
        <div className="absolute inset-0 text-white/5 font-bold text-[200px] flex items-center justify-center z-0 overflow-hidden select-none pointer-events-none">
          <span className="transform -translate-y-10">Sobre</span>
        </div>
        
        <div className="relative z-10 mb-16">
          <span className="text-[#C9FF76] text-lg">Sobre Mim</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#C9FF76]/20 mx-auto">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src={researcher.image} 
                    alt={researcher.name} 
                    className="object-cover w-full h-full" 
                  />
                  <AvatarFallback className="text-6xl">{initials}</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Badge de premiação */}
              {researcher.awards && researcher.awards.length > 0 && (
                <div className="absolute top-0 right-8 bg-[#1A2A12]/90 border border-[#C9FF76]/30 rounded-lg p-3 text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#C9FF76]/20 rounded-full p-2">
                      <Award className="h-5 w-5 text-[#C9FF76]" />
                    </div>
                <div>
                      <div className="text-sm font-bold">{researcher.awards[0].title}</div>
                      <div className="text-xs text-[#BACD8E]">{researcher.awards[0].organization}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-light text-white mb-4">Hello! Eu sou <span className="font-bold">{researcher.name}</span></h2>
              <p className="text-lg text-white/70 mb-3">
                <span className="text-white font-medium">{researcher.role}</span> & Pesquisadora
                <span className="text-[#C9FF76]"> com mais de {researcher.statistics?.yearsExperience} anos 
                de experiência.</span> Especialista em desenvolvimento de soluções inovadoras utilizando 
                inteligência artificial e aprendizado de máquina.
              </p>
              <p className="text-lg text-white/70">
                Comecei minha jornada na área acadêmica e me especializei em <span className="text-white">aplicações 
                práticas de IA</span> para resolver problemas complexos em diversos setores.
              </p>
              
              {/* Estatísticas - Contadores */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <span className="text-5xl font-bold text-[#C9FF76]">{researcher.statistics?.publications}+</span>
                  <p className="text-sm text-white/70 mt-1">Publicações</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-bold text-[#C9FF76]">{researcher.statistics?.yearsExperience}+</span>
                  <p className="text-sm text-white/70 mt-1">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-bold text-[#C9FF76]">{researcher.statistics?.projectsLed}+</span>
                  <p className="text-sm text-white/70 mt-1">Projetos Liderados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="text-center mb-14">
          <span className="text-[#91C12D] text-sm rotate-6 inline-block mb-2 relative">
            <span className="absolute -top-4 -right-4 w-8 h-8 bg-[#C9FF76]/10 rounded-full"></span>
            Advantage
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">Skills & tools</h2>
          <p className="text-white/70 max-w-xl mx-auto">Para aqueles que querem conhecer as especialidades</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A2A12]/70 rounded-full p-1">
            <button className="px-8 py-2.5 rounded-full bg-[#C9FF76] text-[#1A2A12] font-medium min-w-32">Tech</button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10 mb-8">
          {researcher.technologies.map((tech, index) => {
                  const IconComponent = iconMap[tech.icon];
            const iconColors = [
              { bg: "bg-red-600", text: "text-white", trailColor: "#432722", progressColor: "#C41E3A" },
              { bg: "bg-white", text: "text-[#1A2A12]", trailColor: "#22432B", progressColor: "#FFFFFF" },
              { bg: "bg-[#91C12D]", text: "text-white", trailColor: "#22432B", progressColor: "#91C12D" },
              { bg: "bg-[#FF6932]", text: "text-white", trailColor: "#432722", progressColor: "#FF6932" },
            ];
            const color = iconColors[index % iconColors.length];
            const percentage = parseInt(tech.proficiency);
            
                  return (
              <div key={tech.name} className="flex flex-col items-center">
                <div className="relative w-36 h-36 mb-4">
                  {/* Círculo base (trail) */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="43" 
                      fill="none" 
                      stroke={color.trailColor} 
                      strokeWidth="8"
                      opacity="0.3"
                    />
                    
                    {/* Anel de progresso */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="43" 
                      fill="none" 
                      stroke={color.progressColor} 
                      strokeWidth="6"
                      strokeDasharray={`${2.7 * percentage} 1000`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      opacity="0.85"
                    />
                    
                    {/* Círculo interno */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="32" 
                      fill="#1A2A12" 
                    />
                    
                    {/* Texto da porcentagem */}
                    <text 
                      x="50" 
                      y="55" 
                      fontFamily="sans-serif" 
                      fontSize="16" 
                      fontWeight="bold"
                      fill="white" 
                      textAnchor="middle"
                    >
                        {tech.proficiency}
                    </text>
                  </svg>
                  
                  {/* Ícone */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ${color.bg} flex items-center justify-center transform -translate-y-6`}>
                    {IconComponent && <IconComponent className={`h-8 w-8 ${color.text}`} />}
                  </div>
                </div>
                <span className="text-white font-medium text-center">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
      </div>

      {/* Seção de Publicações (estilo Awards & recognitions) */}
      <div className="relative py-24 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-y-0 left-1/2 w-[600px] h-[600px] border border-[#C9FF76]/5 rounded-full opacity-20"></div>
        <div className="absolute inset-y-0 left-1/2 w-[400px] h-[400px] border border-[#C9FF76]/5 rounded-full opacity-20"></div>
        <div className="absolute inset-y-0 left-1/2 w-[200px] h-[200px] border border-[#C9FF76]/5 rounded-full opacity-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          <div>
            <span className="text-[#91C12D] text-sm rotate-6 inline-block mb-2">Publicações</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Artigos &<br />
              contribuições
            </h2>
          </div>
          
          <div className="space-y-6">
                {researcher.publications.map((pub, index) => (
              <div key={index} className="border-b border-[#C9FF76]/10 pb-6 last:border-b-0 group">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#C9FF76] transition-colors duration-300">
                          {pub.title}
                    </h3>
                    <p className="text-sm text-[#BACD8E] uppercase tracking-wide mt-1">
                      {pub.journal} {pub.year}
                    </p>
                  </div>
                  
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 rounded-full border border-[#C9FF76]/30 flex items-center justify-center shrink-0 hover:bg-[#C9FF76]/10 transition-colors duration-300"
                  >
                    <MoveUpRight className="h-4 w-4 text-[#C9FF76]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResearcherProfile;
