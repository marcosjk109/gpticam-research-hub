import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Laptop, Database, Globe, PenTool, Mail, LinkedinIcon, GithubIcon, BookOpen, PlayCircle, Award, Terminal, Monitor, MoveRight, MoveUpRight, Book, FileText, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Interface para os projetos do bolsista
interface Project {
  title: string;
  description: string;
  link?: string;
}

// Interface para as habilidades do bolsista
interface Skill {
  name: string;
  icon: string;
  proficiency: string;
}

// Interface para o Scholar (bolsista)
interface Scholar {
  id: string;
  name: string;
  role: string;
  area: string;
  email: string;
  image?: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  institution?: string;
  courseName?: string;
  startYear?: string;
  endYear?: string;
  supervisor?: string;
}

const ScholarProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const iconMap = {
    "code": Code,
    "laptop": Laptop,
    "database": Database,
    "globe": Globe,
    "pen-tool": PenTool,
  };

  // Dados de exemplo para bolsistas
  const scholars: Record<string, Scholar> = {
    "maria-oliveira": {
      id: "maria-oliveira",
      name: "Maria Oliveira",
      role: "Bolsista de Doutorado",
      area: "Processamento de Linguagem Natural",
      email: "maria.oliveira@gpticam.org",
      bio: "Doutoranda em Ciência da Computação com foco em processamento de linguagem natural e análise de sentimentos. Tenho trabalhado em projetos que envolvem a aplicação de técnicas avançadas de NLP para análise de mídias sociais e textos científicos.",
      institution: "Universidade Federal do Amazonas",
      courseName: "Doutorado em Ciência da Computação",
      startYear: "2021",
      endYear: "2025",
      supervisor: "Dr. Ana Silva",
      skills: [
        { name: "Python", icon: "code", proficiency: "95%" },
        { name: "NLTK", icon: "laptop", proficiency: "90%" },
        { name: "SpaCy", icon: "database", proficiency: "85%" },
        { name: "Transformers", icon: "globe", proficiency: "80%" },
      ],
      projects: [
        {
          title: "Análise de Sentimentos em Comentários sobre Políticas Públicas",
          description: "Desenvolvimento de um sistema para análise de sentimentos em comentários de redes sociais sobre políticas públicas na região amazônica.",
          link: "#"
        },
        {
          title: "Classificação Automática de Artigos Científicos",
          description: "Criação de um modelo para classificação automática de artigos científicos em categorias temáticas utilizando técnicas de NLP.",
          link: "#"
        }
      ]
    },
    "pedro-santos": {
      id: "pedro-santos",
      name: "Pedro Santos",
      role: "Bolsista de Mestrado",
      area: "Computação em Nuvem, Big Data",
      email: "pedro.santos@gpticam.org",
      bio: "Mestrando em Engenharia de Software com especialização em computação em nuvem e big data. Minha pesquisa está focada no desenvolvimento de soluções escaláveis para processamento de grandes volumes de dados na nuvem.",
      institution: "Universidade do Estado do Amazonas",
      courseName: "Mestrado em Engenharia de Software",
      startYear: "2022",
      endYear: "2024",
      supervisor: "Dr. Carlos Mendes",
      skills: [
        { name: "AWS", icon: "cloud", proficiency: "92%" },
        { name: "Apache Spark", icon: "database", proficiency: "88%" },
        { name: "Hadoop", icon: "server", proficiency: "85%" },
        { name: "Python", icon: "code", proficiency: "90%" },
      ],
      projects: [
        {
          title: "Plataforma de Processamento de Dados de IoT na Amazônia",
          description: "Desenvolvimento de uma plataforma escalável para processamento de dados de sensores IoT em áreas remotas da Amazônia.",
          link: "#"
        },
        {
          title: "Análise de Grandes Volumes de Dados Meteorológicos",
          description: "Criação de pipeline para processamento e análise de grandes volumes de dados meteorológicos para predição de eventos climáticos.",
          link: "#"
        }
      ]
    }
  };

  // Converter dados dos bolsistas da página Scholars para este formato
  // Primeiro, verificar se o ID passado está no nosso objeto de exemplo
  const scholar = scholars[id as string];

  // Se não encontrar nos dados de exemplo, usar o ID para criar dados básicos
  if (!scholar) {
    return (
      <Layout>
        <div className="text-center">
          <p>Bolsista não encontrado</p>
        </div>
      </Layout>
    );
  }

  const initials = scholar.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Layout isDiego={true} className="bg-gradient-to-br from-[#2D3B22] to-[#1A2A12]">
      <button 
        onClick={() => navigate("/bolsistas")}
        className="flex items-center gap-2 text-[#C9FF76] hover:text-[#C9FF76]/70 mb-6 font-medium transition-all duration-300 group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Voltar para Bolsistas
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
                Eu sou <span className="text-[#C9FF76]">{scholar.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-light text-[#BACD8E] mt-2">
                {scholar.role}
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-light leading-relaxed text-white/80">
                {scholar.bio}
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                <div className="flex items-center text-white/70">
                  <Mail className="h-4 w-4 mr-2 text-[#C9FF76]" />
                  <span className="text-sm">{scholar.email}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Globe className="h-4 w-4 mr-2 text-[#C9FF76]" />
                  <span className="text-sm">{scholar.area}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-[#C9FF76]/30 text-white px-3 py-1">
                {scholar.institution}
              </Badge>
              <Badge variant="outline" className="border-[#C9FF76]/30 text-white px-3 py-1">
                {scholar.courseName}
              </Badge>
              <Badge variant="outline" className="border-[#C9FF76]/30 text-white px-3 py-1">
                {scholar.startYear} - {scholar.endYear || "Atual"}
              </Badge>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#91C12D]/20 to-[#FF6932]/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Avatar className="w-full h-full rounded-none">
                {scholar.image ? (
                  <AvatarImage 
                    src={scholar.image} 
                    alt={scholar.name} 
                    className="object-cover w-full h-full transition-transform duration-700 scale-105 group-hover:scale-110" 
                  />
                ) : (
                  <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Informações Acadêmicas */}
      <div className="relative py-20 mb-20">
        {/* Texto gigante "Acadêmico" no fundo */}
        <div className="absolute inset-0 text-white/5 font-bold text-[200px] flex items-center justify-center z-0 overflow-hidden select-none pointer-events-none">
          <span className="transform -translate-y-10">Acadêmico</span>
        </div>
        
        <div className="relative z-10 mb-16">
          <span className="text-[#C9FF76] text-lg">Formação</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#C9FF76]/20 mx-auto">
                <Avatar className="w-full h-full">
                  {scholar.image ? (
                    <AvatarImage 
                      src={scholar.image} 
                      alt={scholar.name} 
                      className="object-cover w-full h-full" 
                    />
                  ) : (
                    <AvatarFallback className="text-6xl">{initials}</AvatarFallback>
                  )}
                </Avatar>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-light text-white mb-4">Informações sobre <span className="font-bold">minha formação</span></h2>
              
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-[#C9FF76] font-medium">Instituição</h3>
                  <p>{scholar.institution}</p>
                </div>
                
                <div>
                  <h3 className="text-[#C9FF76] font-medium">Curso</h3>
                  <p>{scholar.courseName}</p>
                </div>
                
                <div>
                  <h3 className="text-[#C9FF76] font-medium">Período</h3>
                  <p>{scholar.startYear} - {scholar.endYear || "Atual"}</p>
                </div>
                
                {scholar.supervisor && (
                  <div>
                    <h3 className="text-[#C9FF76] font-medium">Orientador(a)</h3>
                    <p>{scholar.supervisor}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Habilidades */}
      <div className="mb-12">
        <div className="text-center mb-14">
          <span className="text-[#91C12D] text-sm rotate-6 inline-block mb-2 relative">
            <span className="absolute -top-4 -right-4 w-8 h-8 bg-[#C9FF76]/10 rounded-full"></span>
            Vantagens
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">Skills & Ferramentas</h2>
          <p className="text-white/70 max-w-xl mx-auto">Tecnologias e ferramentas que utilizo na minha pesquisa</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A2A12]/70 rounded-full p-1">
            <button className="px-8 py-2.5 rounded-full bg-[#C9FF76] text-[#1A2A12] font-medium min-w-32">Tech</button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10 mb-8">
          {scholar.skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            const iconColors = [
              { bg: "bg-red-600", text: "text-white", trailColor: "#432722", progressColor: "#C41E3A" },
              { bg: "bg-white", text: "text-[#1A2A12]", trailColor: "#22432B", progressColor: "#FFFFFF" },
              { bg: "bg-[#91C12D]", text: "text-white", trailColor: "#22432B", progressColor: "#91C12D" },
              { bg: "bg-[#FF6932]", text: "text-white", trailColor: "#432722", progressColor: "#FF6932" },
            ];
            const color = iconColors[index % iconColors.length];
            const percentage = parseInt(skill.proficiency);
            
            return (
              <div key={skill.name} className="flex flex-col items-center">
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
                      {skill.proficiency}
                    </text>
                  </svg>
                  
                  {/* Ícone */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ${color.bg} flex items-center justify-center transform -translate-y-6`}>
                    {IconComponent && <IconComponent className={`h-8 w-8 ${color.text}`} />}
                  </div>
                </div>
                <span className="text-white font-medium text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seção de Projetos */}
      <div className="relative py-24 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-y-0 left-1/2 w-[600px] h-[600px] border border-[#C9FF76]/5 rounded-full opacity-20"></div>
        <div className="absolute inset-y-0 left-1/2 w-[400px] h-[400px] border border-[#C9FF76]/5 rounded-full opacity-20"></div>
        <div className="absolute inset-y-0 left-1/2 w-[200px] h-[200px] border border-[#C9FF76]/5 rounded-full opacity-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          <div>
            <span className="text-[#91C12D] text-sm rotate-6 inline-block mb-2">Projetos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Pesquisa &<br />
              Desenvolvimento
            </h2>
          </div>
          
          <div className="space-y-6">
            {scholar.projects.map((project, index) => (
              <div key={index} className="border-b border-[#C9FF76]/10 pb-6 last:border-b-0 group">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#C9FF76] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#BACD8E] mt-2">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-11 h-11 rounded-full border border-[#C9FF76]/30 flex items-center justify-center shrink-0 hover:bg-[#C9FF76]/10 transition-colors duration-300"
                    >
                      <MoveUpRight className="h-4 w-4 text-[#C9FF76]" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScholarProfile; 