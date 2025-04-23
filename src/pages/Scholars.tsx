import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight, Mail, FileText, UserRound, School, Star } from "lucide-react";
import { useRef } from "react";

interface Scholar {
  id: string;
  name: string;
  role: string;
  area: string;
  bio: string;
  email: string;
  publications?: string[];
  image?: string;
  initials: string;
  skills: string[];
  education: string;
}

const Scholars = () => {
  const containerRef = useRef(null);
  
  // Configurações para animações de scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Valores suavizados para animações
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Transformações baseadas no scroll
  const headerY = useTransform(smoothProgress, [0, 0.1], [0, -20]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0.8]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, -50]);

  const scholars: Scholar[] = [
    {
      id: "scholar1",
      name: "Maria Santos",
      role: "Pesquisadora Principal",
      area: "Inteligência Artificial e Processamento de Linguagem Natural",
      bio: "Doutora em Ciência da Computação com foco em Inteligência Artificial. Atua no desenvolvimento de modelos de linguagem avançados e aplicações de NLP para análise de dados não estruturados.",
      email: "maria.santos@gpticam.org",
      initials: "MS",
      skills: ["Deep Learning", "NLP", "Python", "TensorFlow", "PyTorch"],
      education: "Doutorado em Ciência da Computação",
      publications: [
        "Santos, M. et al. (2022). 'Avanços em Modelos Transformers para Processamento de Linguagem Natural em Português'. Revista Brasileira de IA.",
        "Santos, M. & Oliveira, J. (2023). 'Aplicações de Aprendizado por Reforço em Ambientes Dinâmicos'. Conferência Internacional de Machine Learning."
      ]
    },
    {
      id: "scholar2",
      name: "João Oliveira",
      role: "Analista de Dados",
      area: "Ciência de Dados e Aprendizado de Máquina",
      bio: "Mestre em Ciência de Dados com experiência em projetos de análise preditiva e visualização de dados complexos. Especialista em técnicas de machine learning para análise de dados temporais.",
      email: "joao.oliveira@gpticam.org",
      initials: "JO",
      skills: ["Machine Learning", "Data Visualization", "R", "Python", "SQL"],
      education: "Mestrado em Ciência de Dados",
      publications: [
        "Oliveira, J. (2022). 'Técnicas Avançadas para Análise de Séries Temporais em Dados de Saúde'. Simpósio Brasileiro de Computação.",
        "Santos, M. & Oliveira, J. (2023). 'Aplicações de Aprendizado por Reforço em Ambientes Dinâmicos'. Conferência Internacional de Machine Learning."
      ]
    },
    {
      id: "scholar3",
      name: "Ana Ferreira",
      role: "Coordenadora",
      area: "Gestão de Projetos de Pesquisa e Inovação",
      bio: "Doutora em Administração com especialização em Gestão de Inovação. Coordena projetos interdisciplinares e atua na interface entre pesquisa acadêmica e aplicações industriais.",
      email: "ana.ferreira@gpticam.org",
      initials: "AF",
      skills: ["Gestão de Projetos", "Inovação", "Metodologias Ágeis", "PMI"],
      education: "Doutorado em Administração",
      publications: [
        "Ferreira, A. (2021). 'Modelos de Gestão para Projetos de Pesquisa em IA'. Revista de Administração e Inovação.",
        "Ferreira, A. et al. (2023). 'Desafios na Implementação de Projetos de IA no Setor Público'. Congresso de Administração Pública."
      ]
    },
    {
      id: "scholar4",
      name: "Carlos Mendes",
      role: "Especialista em Machine Learning",
      area: "Aprendizado Profundo e Redes Neurais",
      bio: "Doutor em Engenharia Elétrica com foco em algoritmos de aprendizado profundo. Desenvolve modelos para visão computacional e reconhecimento de padrões em dados complexos.",
      email: "carlos.mendes@gpticam.org",
      initials: "CM",
      skills: ["Deep Learning", "Computer Vision", "Python", "CUDA", "TensorFlow"],
      education: "Doutorado em Engenharia Elétrica",
      publications: [
        "Mendes, C. & Lima, P. (2022). 'Arquiteturas de Redes Neurais para Detecção de Anomalias em Imagens Médicas'. Revista de Inteligência Artificial Aplicada.",
        "Mendes, C. et al. (2023). 'Transfer Learning em Modelos de Visão Computacional para Recursos Limitados'. Simpósio de Computação Aplicada."
      ]
    },
    {
      id: "scholar5",
      name: "Patrícia Lima",
      role: "Engenheira de Dados",
      area: "Engenharia de Dados e Big Data",
      bio: "Mestre em Sistemas de Informação com especialização em processamento de dados em grande escala. Desenvolve pipelines de dados e infraestrutura para projetos de IA.",
      email: "patricia.lima@gpticam.org",
      initials: "PL",
      skills: ["Apache Spark", "Hadoop", "ETL", "SQL", "NoSQL", "Python"],
      education: "Mestrado em Sistemas de Informação",
      publications: [
        "Lima, P. (2022). 'Arquiteturas Escaláveis para Processamento de Dados em Tempo Real'. Conferência Brasileira de Dados.",
        "Mendes, C. & Lima, P. (2022). 'Arquiteturas de Redes Neurais para Detecção de Anomalias em Imagens Médicas'. Revista de Inteligência Artificial Aplicada."
      ]
    },
    {
      id: "scholar6",
      name: "Ricardo Sousa",
      role: "Pesquisador em IA Médica",
      area: "Inteligência Artificial Aplicada à Saúde",
      bio: "Doutor em Ciências Biomédicas com foco na aplicação de técnicas de IA para diagnóstico e análise de imagens médicas. Trabalha na interface entre medicina e computação.",
      email: "ricardo.sousa@gpticam.org",
      initials: "RS",
      skills: ["Medical AI", "Image Processing", "Python", "Deep Learning", "Healthcare Analytics"],
      education: "Doutorado em Ciências Biomédicas",
      publications: [
        "Sousa, R. et al. (2022). 'Modelos de IA para Detecção Precoce de Condições Neurológicas'. Journal of Medical Informatics.",
        "Sousa, R. & Silva, M. (2023). 'Interpretabilidade em Modelos de IA para Decisões Diagnósticas'. Revista Brasileira de Informática Médica."
      ]
    },
    {
      id: "scholar7",
      name: "Lúcia Campos",
      role: "Especialista Ambiental",
      area: "Inteligência Artificial para Sustentabilidade",
      bio: "Doutora em Ciências Ambientais com pesquisa em aplicações de IA para monitoramento ambiental e sustentabilidade. Desenvolve sistemas de previsão para eventos climáticos extremos.",
      email: "lucia.campos@gpticam.org",
      initials: "LC",
      skills: ["Environmental Modeling", "Remote Sensing", "GIS", "Machine Learning", "Python"],
      education: "Doutorado em Ciências Ambientais",
      publications: [
        "Campos, L. (2022). 'Aplicação de Técnicas de Deep Learning para Previsão de Padrões Climáticos'. Revista de Meteorologia Aplicada.",
        "Campos, L. & Costa, F. (2023). 'Sistemas Inteligentes para Monitoramento da Qualidade do Ar'. Simpósio de Tecnologias Ambientais."
      ]
    },
    {
      id: "scholar8",
      name: "Fernando Costa",
      role: "Engenheiro IoT",
      area: "Internet das Coisas e Sistemas Embarcados",
      bio: "Mestre em Engenharia de Computação especializado em sistemas embarcados e IoT. Desenvolve soluções para coleta e processamento de dados em dispositivos com recursos limitados.",
      email: "fernando.costa@gpticam.org",
      initials: "FC",
      skills: ["IoT", "Embedded Systems", "C/C++", "MQTT", "Edge Computing", "Arduino"],
      education: "Mestrado em Engenharia de Computação",
      publications: [
        "Costa, F. (2022). 'Protocolos de Comunicação Eficientes para Redes de Sensores'. Revista de Engenharia de Computação.",
        "Campos, L. & Costa, F. (2023). 'Sistemas Inteligentes para Monitoramento da Qualidade do Ar'. Simpósio de Tecnologias Ambientais."
      ]
    },
    {
      id: "scholar9",
      name: "Mariana Silva",
      role: "Analista de Dados",
      area: "Estatística e Análise Preditiva",
      bio: "Mestre em Estatística Aplicada com experiência em modelagem estatística e análise preditiva. Especialista em métodos quantitativos para tomada de decisão baseada em dados.",
      email: "mariana.silva@gpticam.org",
      initials: "MS",
      skills: ["Statistical Modeling", "Predictive Analytics", "R", "Python", "SAS", "Bayesian Methods"],
      education: "Mestrado em Estatística Aplicada",
      publications: [
        "Silva, M. (2022). 'Métodos Bayesianos para Análise de Dados Esparsos'. Revista Brasileira de Estatística.",
        "Sousa, R. & Silva, M. (2023). 'Interpretabilidade em Modelos de IA para Decisões Diagnósticas'. Revista Brasileira de Informática Médica."
      ]
    }
  ];

  // Variantes para as animações
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 70 }
    }
  };

  return (
    <Layout className="bg-gradient-to-br from-[#376A63] to-[#20423E] min-h-screen">
      <div ref={containerRef} className="container px-4 py-16 mx-auto relative">
        {/* Elementos decorativos de fundo */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ y: bgY }}
        >
          <div className="absolute top-40 right-20 w-64 h-64 bg-[#FDD744]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-60 left-40 w-64 h-64 bg-[#7DCB80]/5 rounded-full blur-3xl"></div>
          <motion.div 
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#FDD744] rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
          <motion.div 
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#7DCB80] rounded-full"
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="mb-16 relative"
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span 
              className="text-[#FDD744]"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{ backgroundPosition: "100% 0%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundImage: "linear-gradient(90deg, #FDD744, #FFEB80, #FDD744)", backgroundSize: "200% 100%", backgroundClip: "text", WebkitBackgroundClip: "text" }}
            >
              Pesquisadores
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-center text-[#7DCB80] max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Conheça nossa equipe de pesquisadores e especialistas em inteligência artificial
          </motion.p>
        </motion.div>

        {/* Lista de Bolsistas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {scholars.map((scholar, index) => (
            <motion.div
              key={scholar.id}
              variants={item}
              className="bg-[#2C5550]/60 rounded-xl overflow-hidden border border-[#376A63] hover:shadow-lg transition-all group relative"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 40px -15px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Elemento decorativo superior */}
              <motion.div 
                className="h-3 w-full bg-[#FDD744]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              
              {/* Corpo do card */}
              <div className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="relative mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-[#FDD744]/20 rounded-full blur-md"></div>
                    <Avatar className="h-24 w-24 border-4 border-[#FDD744]/40 relative">
                      {scholar.image ? (
                        <AvatarImage src={scholar.image} alt={scholar.name} />
                      ) : null}
                      <AvatarFallback className="bg-[#376A63] text-[#FDD744] text-2xl font-bold">
                        {scholar.initials}
                      </AvatarFallback>
                  </Avatar>
                    <motion.div 
                      className="absolute inset-0 border-4 border-[#FDD744]/0 rounded-full"
                      animate={{ 
                        borderColor: ["rgba(253, 215, 68, 0)", "rgba(253, 215, 68, 0.3)", "rgba(253, 215, 68, 0)"],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-1 text-center group-hover:text-[#FDD744] transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {scholar.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p className="text-[#7DCB80] text-center mb-1">{scholar.role}</p>
                    <Badge className="bg-[#20423E] text-[#FDD744] hover:bg-[#20423E]/80 border-[#376A63]">
                      {scholar.area}
                    </Badge>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-white/80">
                    <School className="h-4 w-4 text-[#7DCB80]" />
                    <span className="text-sm">{scholar.education}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail className="h-4 w-4 text-[#7DCB80]" />
                    <span className="text-sm overflow-hidden text-ellipsis">{scholar.email}</span>
                    </div>
                    
                  <div className="text-white/80 text-sm">
                    <div className="flex items-start gap-2">
                      <UserRound className="h-4 w-4 text-[#7DCB80] mt-1 shrink-0" />
                      <p className="line-clamp-3">{scholar.bio}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="text-[#7DCB80] text-sm font-medium mb-2 flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Habilidades
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {scholar.skills.map((skill, idx) => (
                        <motion.div
                          key={`${scholar.id}-${skill}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + (idx * 0.05) }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-[#20423E]/60 text-white hover:bg-[#20423E] border-[#376A63]"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-6 pt-4 border-t border-[#376A63]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full text-[#FDD744] border-[#FDD744] hover:bg-[#FDD744]/10 group"
                  >
                    <span>Ver Perfil Completo</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
              
              {/* Publicações tooltip no hover */}
              {scholar.publications && scholar.publications.length > 0 && (
                <div className="absolute left-0 right-0 bottom-0 p-4 bg-[#20423E] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 border-t border-[#376A63]">
                  <div className="flex items-center gap-2 text-[#FDD744] text-sm font-medium mb-2">
                    <FileText className="h-4 w-4" />
                    Publicações Recentes
                  </div>
                  <ul className="text-white/80 text-xs space-y-2">
                    {scholar.publications.map((pub, idx) => (
                      <li key={idx} className="list-disc ml-4">{pub}</li>
                    ))}
                  </ul>
            </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Scholars;
