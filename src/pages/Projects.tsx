
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/ui/project-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Define project status filters
  const statusFilters = ["Todos", "Em andamento", "Concluído", "Planejado"];
  const [activeFilter, setActiveFilter] = useState("Todos");

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
    <Layout>
      <SectionHeader 
        title="Projetos" 
        subtitle="Conheça os projetos de pesquisa do GPTICAM"
      />
      
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          Nossa equipe desenvolve projetos inovadores nas áreas de inteligência artificial, 
          visão computacional, processamento de linguagem natural e outras tecnologias avançadas, 
          sempre buscando soluções para problemas reais da sociedade.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {statusFilters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="min-w-24"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            status={project.status}
            tags={project.tags}
            year={project.year}
          />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Nenhum projeto encontrado para o filtro selecionado.</p>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
