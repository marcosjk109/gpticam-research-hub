import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CalendarIcon, Clock, CheckCircle, CircleDashed, Users, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Projects = () => {
  // Define project status filters
  const statusFilters = ["Todos", "Em andamento", "Concluído", "Planejado"];
  const [activeFilter, setActiveFilter] = useState("Todos");
  
  // Estado para busca de bolsistas
  const [scholarSearch, setScholarSearch] = useState("");
  
  // Estado para armazenar os bolsistas por projeto - definido antes do useEffect
  const [projectScholars, setProjectScholars] = useState<Record<number, string[]>>({});

  // Status icon mapping
  const statusIcons = {
    "Em andamento": <Clock className="h-4 w-4" />,
    "Concluído": <CheckCircle className="h-4 w-4" />,
    "Planejado": <CircleDashed className="h-4 w-4" />
  };

  // Sample scholars data
  const allScholars = [
    {
      id: "maria-oliveira",
      name: "Maria Oliveira",
      role: "Bolsista de Doutorado",
      area: "Processamento de Linguagem Natural",
      email: "maria.oliveira@gpticam.org",
      initials: "MO"
    },
    {
      id: "pedro-santos",
      name: "Pedro Santos",
      role: "Bolsista de Mestrado",
      area: "Computação em Nuvem, Big Data",
      email: "pedro.santos@gpticam.org",
      initials: "PS"
    },
    {
      id: "julia-costa",
      name: "Julia Costa",
      role: "Bolsista de Iniciação Científica",
      area: "Visão Computacional",
      email: "julia.costa@gpticam.org",
      initials: "JC"
    },
    {
      id: "lucas-ferreira",
      name: "Lucas Ferreira",
      role: "Bolsista de Mestrado",
      area: "Inteligência Artificial",
      email: "lucas.ferreira@gpticam.org",
      initials: "LF"
    },
    {
      id: "camila-rodrigues",
      name: "Camila Rodrigues",
      role: "Bolsista de Doutorado",
      area: "Segurança de Dados",
      email: "camila.rodrigues@gpticam.org",
      initials: "CR"
    },
    {
      id: "bruno-lima",
      name: "Bruno Lima",
      role: "Bolsista de Iniciação Científica",
      area: "Desenvolvimento Web",
      email: "bruno.lima@gpticam.org",
      initials: "BL"
    },
    {
      id: "mariana-alves",
      name: "Mariana Alves",
      role: "Bolsista de Mestrado",
      area: "Machine Learning",
      email: "mariana.alves@gpticam.org",
      initials: "MA"
    },
    {
      id: "felipe-souza",
      name: "Felipe Souza",
      role: "Bolsista de Iniciação Científica",
      area: "Banco de Dados",
      email: "felipe.souza@gpticam.org",
      initials: "FS"
    },
  ];

  // Sample projects data
  const allProjects = [
    {
      title: "Desenvolvimento de Aplicativo Móvel com Inteligência Artificial para Apoio Educacional e Comunicação de Alunos com Transtorno do Espectro Autista",
      description: "REABERTURA EDITAL Nº 13/2022 - PROEN/IFAP - Projeto focado no desenvolvimento de tecnologia assistiva para alunos com TEA, utilizando recursos de IA para melhorar a comunicação.",
      status: "Concluído" as const,
      tags: ["Aplicativo Móvel", "IA", "Educação Inclusiva", "TEA"],
      year: "2022-2023",
      scholarsIds: ["maria-oliveira"]
    },
    {
      title: "Programa de Práticas Pedagógicas Inovadoras 2022/2024",
      description: "Projeto voltado para a implementação de práticas pedagógicas inovadoras no ambiente educacional, promovendo novas metodologias de ensino e aprendizagem.",
      status: "Concluído" as const,
      tags: ["Práticas Pedagógicas", "Inovação", "Educação"],
      year: "2022-2024",
      scholarsIds: ["maria-oliveira", "pedro-santos"]
    },
    {
      title: "Proposta de Elaboração de Aplicativo Móvel de Comunicação Alternativa para Alunos com Transtorno do Espectro Autista",
      description: "EDITAL Nº 13/2022 - PROEN/IFAP - Desenvolvimento de aplicativo de comunicação alternativa, facilitando a interação de alunos com TEA no ambiente educacional.",
      status: "Em andamento" as const,
      tags: ["Aplicativo Móvel", "Comunicação Alternativa", "TEA"],
      year: "2022-2024",
      scholarsIds: ["maria-oliveira"]
    },
    {
      title: "Programa de Práticas Pedagógicas Inovadoras 2023",
      description: "Continuação do programa de práticas pedagógicas, focando em novas metodologias e abordagens para o ensino e aprendizagem no contexto educacional.",
      status: "Em andamento" as const,
      tags: ["Práticas Pedagógicas", "Inovação", "Educação"],
      year: "2023-2024",
      scholarsIds: ["julia-costa"]
    },
    {
      title: "Programa Novos Negócios em TIC",
      description: "EDITAL Nº 12/2022 GABR/REITORIA-IFCE - Programa focado no desenvolvimento de novos negócios na área de Tecnologia da Informação e Comunicação, estimulando o empreendedorismo tecnológico.",
      status: "Concluído" as const,
      tags: ["Empreendedorismo", "TIC", "Negócios"],
      year: "2022-2023",
      scholarsIds: ["lucas-ferreira", "felipe-souza"]
    },
    {
      title: "Clube da Inovação",
      description: "EDITAL n° 21/2022 PROEPPI/IFAP/CNPq - Iniciativa para fomentar a cultura de inovação, criando espaços de experimentação e desenvolvimento de projetos inovadores.",
      status: "Em andamento" as const,
      tags: ["Inovação", "Clube", "Experimentação"],
      year: "2022-2024",
      scholarsIds: ["camila-rodrigues"]
    },
    {
      title: "Inovação Ativa: Construindo conhecimento e vocação através do Clube da Inovação",
      description: "EDITAL n° 30/2023 PROEPPI/IFAP/CNPq - Projeto que busca aplicar metodologias ativas na construção de conhecimento por meio do Clube da Inovação.",
      status: "Em andamento" as const,
      tags: ["Inovação", "Metodologias Ativas", "Conhecimento"],
      year: "2023-2024",
      scholarsIds: ["camila-rodrigues"]
    },
    {
      title: "Clube da Inovação para educação sustentável e tecnológica",
      description: "EDITAL n° 07/2024 PROEPPI/IFAP/CNPq - Iniciativa que integra sustentabilidade e tecnologia no âmbito do Clube da Inovação, promovendo educação voltada para o futuro.",
      status: "Em andamento" as const,
      tags: ["Inovação", "Sustentabilidade", "Tecnologia", "Educação"],
      year: "2024-2025",
      scholarsIds: ["camila-rodrigues"]
    },
    {
      title: "Desenvolvimento de Software Assistivo com Rede Neural Convolucional para Tradução Automática de LIBRAS Utilizando Visão Computacional",
      description: "Projeto que aplica técnicas avançadas de visão computacional e redes neurais para criar um software de tradução automática de LIBRAS, promovendo acessibilidade.",
      status: "Em andamento" as const,
      tags: ["Software Assistivo", "Redes Neurais", "LIBRAS", "Visão Computacional"],
      year: "2023-2024",
      scholarsIds: ["bruno-lima"]
    },
    {
      title: "Modelo de Aprendizado de Máquina para Previsão de Evasão Acadêmica e Apoio à Decisão em Cursos de Graduação",
      description: "EDITAL 04/DIGERAL/DEPPI/IFAP/PIBIC - Desenvolvimento de modelo preditivo utilizando aprendizado de máquina para identificar fatores de risco de evasão em cursos de graduação.",
      status: "Em andamento" as const,
      tags: ["Aprendizado de Máquina", "Evasão Acadêmica", "IA", "Educação"],
      year: "2023-2024",
      scholarsIds: ["mariana-alves"]
    },
    {
      title: "CLUBE DA INOVAÇÃO: PRÁTICA PEDAGÓGICA ATIVA E INOVADORA",
      description: "EDITAL Nº 13/2022 - PROEN/IFAP, Programa de Práticas Pedagógicas Inovadoras - Projeto que integra práticas pedagógicas ativas ao Clube da Inovação.",
      status: "Concluído" as const,
      tags: ["Clube da Inovação", "Prática Pedagógica", "Metodologias Ativas"],
      year: "2022-2023",
      scholarsIds: ["felipe-souza"]
    },
    {
      title: "Inovação Pedagógica com Inteligência Artificial: Capacitação Docente e Aplicações Práticas",
      description: "Programa de Práticas Pedagógicas Inovadoras 2022/2024 - Projeto voltado para a capacitação de docentes no uso de inteligência artificial em práticas pedagógicas.",
      status: "Concluído" as const,
      tags: ["Inovação Pedagógica", "IA", "Capacitação Docente"],
      year: "2022-2024",
      scholarsIds: ["pedro-santos"]
    },
    {
      title: "Açaí Tech 4.0",
      description: "Edital Nº 09/2024/PROPPI/IFAP/CNPq - Projeto que integra tecnologias da Indústria 4.0 à cadeia produtiva do açaí, promovendo inovação e sustentabilidade no processo.",
      status: "Em andamento" as const,
      tags: ["Indústria 4.0", "Açaí", "Tecnologia", "Sustentabilidade"],
      year: "2024-2025",
      scholarsIds: ["lucas-ferreira"]
    }
  ];

  // Inicializar as associações de bolsistas com base nos projetos
  useEffect(() => {
    const initialScholars: Record<number, string[]> = {};
    allProjects.forEach((project, index) => {
      initialScholars[index] = project.scholarsIds || [];
    });
    setProjectScholars(initialScholars);
  }, []);

  // Filtrar bolsistas com base no termo de busca
  const filteredScholars = allScholars.filter(scholar => 
    scholar.name.toLowerCase().includes(scholarSearch.toLowerCase()) ||
    scholar.role.toLowerCase().includes(scholarSearch.toLowerCase()) ||
    scholar.area.toLowerCase().includes(scholarSearch.toLowerCase())
  );

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "Todos" 
    ? allProjects 
    : allProjects.filter(project => project.status === activeFilter);

  // Adicionar um bolsista a um projeto
  const addScholarToProject = (projectIndex: number, scholarId: string) => {
    setProjectScholars(prev => {
      const currentScholars = prev[projectIndex] || [];
      if (!currentScholars.includes(scholarId)) {
        return { ...prev, [projectIndex]: [...currentScholars, scholarId] };
      }
      return prev;
    });
  };

  // Remover um bolsista de um projeto
  const removeScholarFromProject = (projectIndex: number, scholarId: string) => {
    setProjectScholars(prev => {
      const currentScholars = prev[projectIndex] || [];
      return { 
        ...prev, 
        [projectIndex]: currentScholars.filter(id => id !== scholarId)
      };
    });
  };

  // Obter detalhes do bolsista pelo ID
  const getScholarById = (id: string) => {
    return allScholars.find(scholar => scholar.id === id);
  };

  return (
    <Layout className="bg-gradient-to-br from-[#376A63] to-[#20423E] min-h-screen">
      <div className="max-w-6xl mx-auto py-16">
        {/* Header com estilo moderno */}
        <div className="mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FDD744] rounded-full blur-2xl opacity-20"></div>
          <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#FDD744]">Projetos</span>
          </h1>
          <p className="text-center text-[#7DCB80] max-w-3xl mx-auto text-lg">
            Nossa equipe desenvolve projetos inovadores nas áreas de inteligência artificial, 
            visão computacional, processamento de linguagem natural e outras tecnologias avançadas.
          </p>

          {/* Elemento decorativo */}
          <div className="absolute right-0 top-0 w-24 h-24">
            <div className="absolute right-0 top-0 w-10 h-10 bg-[#7DCB80] rounded-tl-xl"></div>
            <div className="absolute right-12 top-12 w-12 h-12 border-2 border-[#FDD744]/20 rounded-full"></div>
          </div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {statusFilters.map(filter => (
            <Button
              key={filter}
              variant="outline"
              onClick={() => setActiveFilter(filter)}
              className={`min-w-24 border-[#376A63] bg-[#20423E]/80 text-[#7DCB80] hover:text-[#FDD744] hover:bg-[#20423E] ${
                activeFilter === filter ? 'bg-[#2C5550] border-[#FDD744] text-[#FDD744]' : ''
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
              className="relative group bg-[#20423E] border border-[#376A63] rounded-xl overflow-hidden p-8 cursor-pointer hover:bg-[#2C5550] transition-all duration-300"
            >
              {/* Barra lateral colorida */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FDD744] opacity-70 group-hover:opacity-100"></div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#7DCB80] text-sm block mb-1">{`0${index + 1}`}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FDD744] transition-colors">{project.title}</h2>
                  </div>
                  
                  <div className={`flex items-center gap-1 py-1 px-3 rounded-full ${
                    project.status === "Em andamento" ? "bg-[#FDD744]/10 text-[#FDD744]" :
                    project.status === "Concluído" ? "bg-[#7DCB80]/10 text-[#7DCB80]" :
                    "bg-[#7DCB80]/10 text-[#7DCB80]"
                  }`}>
                    {statusIcons[project.status]}
                    <span className="text-xs font-medium">{project.status}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[#7DCB80] text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="flex items-center gap-2 text-[#7DCB80]/70 text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        className="bg-[#2C5550] hover:bg-[#2C5550]/80 text-[#7DCB80] border-[#376A63]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Seção de Bolsistas */}
                  <div className="mt-4 border-t border-[#376A63] pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-[#7DCB80]">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium">Bolsistas</span>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 px-2 bg-[#2C5550] border-[#376A63] text-[#FDD744] hover:bg-[#376A63] hover:text-[#FDD744]"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Plus className="h-4 w-4 mr-1" /> Adicionar
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#20423E] border-[#376A63] text-[#7DCB80]">
                          <DialogHeader>
                            <DialogTitle className="text-[#FDD744]">Adicionar Bolsistas ao Projeto</DialogTitle>
                          </DialogHeader>
                          
                          <div className="mt-4">
                            <Input 
                              className="bg-[#2C5550] border-[#376A63] text-[#7DCB80] placeholder:text-[#7DCB80]/50 focus-visible:ring-[#FDD744]"
                              placeholder="Buscar bolsistas..." 
                              value={scholarSearch}
                              onChange={(e) => setScholarSearch(e.target.value)}
                            />
                            
                            <ScrollArea className="h-64 mt-4">
                              <div className="space-y-2">
                                {filteredScholars.map((scholar) => {
                                  const isSelected = (projectScholars[index] || []).includes(scholar.id);
                                  return (
                                    <div 
                                      key={scholar.id}
                                      className={`p-3 rounded-md flex items-center justify-between cursor-pointer transition-all
                                        ${isSelected 
                                          ? 'bg-[#FDD744]/20 border border-[#FDD744]/30' 
                                          : 'bg-[#2C5550] border border-[#376A63] hover:bg-[#376A63]'
                                        }`}
                                      onClick={() => isSelected 
                                        ? removeScholarFromProject(index, scholar.id)
                                        : addScholarToProject(index, scholar.id)
                                      }
                                    >
                                      <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 text-sm">
                                          <AvatarFallback className="bg-[#376A63] text-[#FDD744]">{scholar.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <p className={isSelected ? 'text-[#FDD744]' : 'text-[#7DCB80]'}>{scholar.name}</p>
                                          <p className="text-xs text-[#7DCB80]/70">{scholar.role}</p>
                                        </div>
                                      </div>
                                      {isSelected && <CheckCircle className="h-4 w-4 text-[#FDD744]" />}
                                    </div>
                                  );
                                })}
                                
                                {filteredScholars.length === 0 && (
                                  <div className="text-center py-8 text-[#7DCB80]/70">
                                    Nenhum bolsista encontrado.
                                  </div>
                                )}
                              </div>
                            </ScrollArea>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {(projectScholars[index] || []).length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {(projectScholars[index] || []).map((scholarId) => {
                            const scholar = getScholarById(scholarId);
                            if (!scholar) return null;
                            
                            return (
                              <div 
                                key={scholarId}
                                className="flex items-center bg-[#2C5550] rounded-full pl-1 pr-2 py-1 text-xs text-[#7DCB80] border border-[#376A63]"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Avatar className="h-5 w-5 text-[0.6rem] mr-1">
                                  <AvatarFallback className="bg-[#376A63] text-[#FDD744]">{scholar.initials}</AvatarFallback>
                                </Avatar>
                                <span className="mr-1">{scholar.name}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeScholarFromProject(index, scholarId);
                                  }}
                                  className="text-[#7DCB80]/70 hover:text-[#FDD744] transition-colors"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <span className="text-xs text-[#7DCB80]/50">Nenhum bolsista associado</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#376A63] flex items-center justify-center group-hover:border-[#FDD744] group-hover:bg-[#FDD744]/10 transition-all">
                    <ArrowRight className="h-4 w-4 text-[#7DCB80] group-hover:text-[#FDD744]" />
                  </div>
                </div>
              </div>
              
              {/* Número grande no canto */}
              <div className="absolute -bottom-6 -right-3 text-[120px] font-bold text-[#2C5550] opacity-30 select-none">{`0${index + 1}`}</div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#7DCB80] text-lg">Nenhum projeto encontrado para o filtro selecionado.</p>
          </div>
        )}

        {/* Navegação entre páginas */}
        <div className="flex justify-between mt-16 text-[#7DCB80]">
          <div className="opacity-50">Previous</div>
          <div className="flex items-center gap-2 text-[#FDD744]">
            Next <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
