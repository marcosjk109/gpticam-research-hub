import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CalendarIcon, Clock, CheckCircle, CircleDashed } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  // Define project status filters
  const statusFilters = ["Todos", "Em andamento", "Concluído", "Planejado"];
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Status icon mapping
  const statusIcons = {
    "Em andamento": <Clock className="h-4 w-4" />,
    "Concluído": <CheckCircle className="h-4 w-4" />,
    "Planejado": <CircleDashed className="h-4 w-4" />
  };

  // Sample projects data
  const allProjects = [
    {
      title: "Sistema de Visão Computacional para Monitoramento Ambiental",
      description: "Desenvolvimento de um sistema baseado em visão computacional para monitoramento e análise de áreas de preservação ambiental, utilizando drones e câmeras fixas.",
      status: "Em andamento" as const,
      tags: ["Visão Computacional", "Meio Ambiente", "IA"],
      year: "2023-2025",
    },
    {
      title: "Chatbot Inteligente para Atendimento ao Cidadão",
      description: "Criação de um chatbot com processamento de linguagem natural para melhorar o atendimento em serviços públicos, reduzindo filas e agilizando processos.",
      status: "Concluído" as const,
      tags: ["NLP", "Chatbot", "Serviços Públicos"],
      year: "2021-2023",
    },
    {
      title: "Análise de Sentimentos em Redes Sociais",
      description: "Desenvolvimento de algoritmos para análise de sentimentos em textos de redes sociais, permitindo compreensão de tendências e opiniões públicas sobre temas específicos.",
      status: "Concluído" as const,
      tags: ["NLP", "Redes Sociais", "Análise de Dados"],
      year: "2020-2022",
    },
    {
      title: "Plataforma de Telemedicina com IA",
      description: "Criação de uma plataforma de telemedicina com recursos de inteligência artificial para triagem e apoio ao diagnóstico médico remoto.",
      status: "Em andamento" as const,
      tags: ["Telemedicina", "IA", "Saúde"],
      year: "2022-2024",
    },
    {
      title: "Sistema de Recomendação para Biblioteca Digital",
      description: "Desenvolvimento de um sistema de recomendação personalizada para bibliotecas digitais, utilizando técnicas de machine learning e filtragem colaborativa.",
      status: "Planejado" as const,
      tags: ["Sistemas de Recomendação", "Biblioteca Digital", "ML"],
      year: "2024-2026",
    },
    {
      title: "Reconhecimento Facial para Controle de Acesso",
      description: "Implementação de um sistema de reconhecimento facial para controle de acesso em ambientes seguros, com detecção de identidade e tentativas de falsificação.",
      status: "Concluído" as const,
      tags: ["Reconhecimento Facial", "Segurança", "Biometria"],
      year: "2019-2021",
    },
    {
      title: "Assistente Virtual para Educação a Distância",
      description: "Criação de um assistente virtual para apoio à educação a distância, capaz de responder dúvidas e oferecer conteúdo personalizado para estudantes.",
      status: "Em andamento" as const,
      tags: ["Educação", "Assistente Virtual", "IA"],
      year: "2022-2024",
    },
    {
      title: "Sistema de Detecção de Fraudes em Transações Financeiras",
      description: "Desenvolvimento de algoritmos para detecção de fraudes em transações financeiras em tempo real, utilizando técnicas de aprendizado de máquina e análise de padrões.",
      status: "Planejado" as const,
      tags: ["Segurança", "Finanças", "ML"],
      year: "2024-2025",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "Todos" 
    ? allProjects 
    : allProjects.filter(project => project.status === activeFilter);

  return (
    <Layout className="bg-gradient-to-br from-[#2D3B22] to-[#1A2A12] min-h-screen">
      <div className="max-w-6xl mx-auto py-16">
        {/* Header com estilo moderno */}
        <div className="mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#C9FF76] rounded-full blur-2xl opacity-20"></div>
          <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#C9FF76]">Projetos</span>
          </h1>
          <p className="text-center text-[#BACD8E] max-w-3xl mx-auto text-lg">
            Nossa equipe desenvolve projetos inovadores nas áreas de inteligência artificial, 
            visão computacional, processamento de linguagem natural e outras tecnologias avançadas.
          </p>

          {/* Elemento decorativo */}
          <div className="absolute right-0 top-0 w-24 h-24">
            <div className="absolute right-0 top-0 w-10 h-10 bg-[#91C12D] rounded-tl-xl"></div>
            <div className="absolute right-12 top-12 w-12 h-12 border-2 border-[#C9FF76]/20 rounded-full"></div>
          </div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {statusFilters.map(filter => (
            <Button
              key={filter}
              variant="outline"
              onClick={() => setActiveFilter(filter)}
              className={`min-w-24 border-[#2D3B22] bg-[#1A2A12]/80 text-[#BACD8E] hover:text-[#C9FF76] hover:bg-[#1A2A12] ${
                activeFilter === filter ? 'bg-[#223618] border-[#C9FF76] text-[#C9FF76]' : ''
              }`}
            >
              {filter === "Todos" ? filter : (
                <div className="flex items-center gap-1">
                  {filter in statusIcons && statusIcons[filter as keyof typeof statusIcons]}
                  <span>{filter}</span>
                </div>
              )}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="relative group bg-[#1A2A12] border border-[#2D3B22] rounded-xl overflow-hidden p-8 cursor-pointer hover:bg-[#223618] transition-all duration-300"
            >
              {/* Barra lateral colorida */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9FF76] opacity-70 group-hover:opacity-100"></div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#BACD8E] text-sm block mb-1">{`0${index + 1}`}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#C9FF76] transition-colors">{project.title}</h2>
                  </div>
                  
                  <div className={`flex items-center gap-1 py-1 px-3 rounded-full ${
                    project.status === "Em andamento" ? "bg-[#C9FF76]/10 text-[#C9FF76]" :
                    project.status === "Concluído" ? "bg-[#91C12D]/10 text-[#91C12D]" :
                    "bg-[#BACD8E]/10 text-[#BACD8E]"
                  }`}>
                    {statusIcons[project.status]}
                    <span className="text-xs font-medium">{project.status}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[#BACD8E] text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="flex items-center gap-2 text-[#BACD8E]/70 text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        className="bg-[#2D3B22] hover:bg-[#2D3B22]/80 text-[#BACD8E] border-[#3D4B32]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#2D3B22] flex items-center justify-center group-hover:border-[#C9FF76] group-hover:bg-[#C9FF76]/10 transition-all">
                    <ArrowRight className="h-4 w-4 text-[#BACD8E] group-hover:text-[#C9FF76]" />
                  </div>
                </div>
              </div>
              
              {/* Número grande no canto */}
              <div className="absolute -bottom-6 -right-3 text-[120px] font-bold text-[#223618] opacity-30 select-none">{`0${index + 1}`}</div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#BACD8E] text-lg">Nenhum projeto encontrado para o filtro selecionado.</p>
          </div>
        )}

        {/* Navegação entre páginas */}
        <div className="flex justify-between mt-16 text-[#BACD8E]">
          <div className="opacity-50">Previous</div>
          <div className="flex items-center gap-2 text-[#C9FF76]">
            Next <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
