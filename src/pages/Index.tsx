
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import PersonCard from "@/components/ui/person-card";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white rounded-lg mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GPTICAM</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Grupo de Pesquisa em Tecnologia da Informação e Comunicação Aplicada à Multimídia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/projetos">Nossos Projetos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/pesquisadores">Conheça Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <SectionHeader 
          title="Sobre o GPTICAM" 
          subtitle="Inovação e pesquisa em tecnologias multimídia"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            O Grupo de Pesquisa em Tecnologia da Informação e Comunicação Aplicada à Multimídia (GPTICAM) 
            é dedicado ao avanço científico e tecnológico na área de aplicações multimídia, 
            inteligência artificial e processamento de dados.
          </p>
          <p className="text-lg text-gray-700">
            Nossa missão é desenvolver soluções inovadoras que possam impactar positivamente 
            a sociedade através da pesquisa aplicada e formação de recursos humanos altamente qualificados.
          </p>
        </div>
      </section>

      {/* Featured Researchers Section */}
      <section className="mb-16">
        <SectionHeader 
          title="Pesquisadores em Destaque" 
          subtitle="Conheça alguns de nossos principais pesquisadores"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredResearchers.map((researcher, index) => (
            <PersonCard
              key={index}
              name={researcher.name}
              role={researcher.role}
              area={researcher.area}
              email={researcher.email}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/pesquisadores">Ver Todos os Pesquisadores</Link>
          </Button>
        </div>
      </section>

      {/* Featured Scholars Section */}
      <section className="mb-16">
        <SectionHeader 
          title="Bolsistas em Destaque" 
          subtitle="Conheça alguns de nossos bolsistas"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredScholars.map((scholar, index) => (
            <PersonCard
              key={index}
              name={scholar.name}
              role={scholar.role}
              area={scholar.area}
              email={scholar.email}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/bolsistas">Ver Todos os Bolsistas</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <SectionHeader 
          title="Projetos em Destaque" 
          subtitle="Conheça alguns de nossos projetos de pesquisa"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
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
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/projetos">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
