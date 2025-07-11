import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface Researcher {
  id: string;
  name: string;
  title: string;
  area: string;
  description: string;
  image: string;
}

const Researchers = () => {
  const containerRef = useRef(null);
  
  // Configuração para animações de scroll
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
  
  // Dados dos pesquisadores
  const researchers: Researcher[] = [
    {
      id: "klenilmar-dias",
      name: "Klenilmar Dias",
      title: "Coordenador do Laboratório",
      area: "Inteligência Artificial e Linguagem Natural",
      description: "Klenilmar Lopes é Doutor em Engenharia Elétrica com ênfase em Inteligência Computacional pela UFMG e Mestre em Computação Aplicada pela UFPA. Possui graduação em Computação (UNAMA) e Licenciatura em Informática (UNIFAP), além de especializações em Redes de Computadores (UFPA) e Gestão da Educação Profissional e Tecnológica (IFRN). Atuou como Diretor Geral e Reitor Substituto do IFAP, além de cargos de gestão em outras instituições como UFPA e Estácio Seama. É professor do IFAP – Campus Macapá e do Mestrado Profissional em Educação Profissional e Tecnológica (ProfEPT). Sua atuação envolve temas como Ciência de Dados, Aprendizado de Máquina, PLN, Big Data, Computação em Nuvem, Redes e Inteligência Computacional, com foco em metodologias educacionais inovadoras e tecnologias assistivas.",
      image: "/images/researchers/carlos.jpg"
    },
    {
      id: "klessis-dias",
      name: "Klessis Dias",
      title: "Pesquisador Sênior",
      area: "Visão Computacional e IA Generativa",
      description: "Klessis Lopes Dias é Mestre em Informática pela PUC-Rio e graduado em Ciência da Computação pela UFPA. Realizou estágio no Niagara College, no Canadá. Atuou como Pró-Reitor de Pesquisa, Pós-Graduação e Inovação do IFAP (2011–2014), liderando a implantação de programas como PIBIC, PIBID e cursos de especialização. Foi coordenador da Região Norte no Fórum de Pró-Reitores de Pesquisa dos IFs e contribuiu para a criação de 16 grupos de pesquisa no IFAP. É Vice-Líder do GPTICAM (grupo de pesquisa credenciado ao CNPq) e professor efetivo do IFAP desde 2010. Tem experiência em Engenharia de Software, Banco de Dados, Algoritmos, TICs na Educação e Sistemas de Informação.",
      image: "/images/researchers/ana.jpg"
    },
    {
      id: "eonay-barbosa",
      name: "Eonay Barbosa",
      title: "Pesquisador Sênior",
      area: "Aprendizado de Máquina e Segurança de Dados",
      description: "Eonay Barbosa Gurjão é graduado em Sistemas de Informação (2011) e possui diversas especializações nas áreas de tecnologia, educação e docência. Atua como Técnico em Tecnologia da Informação no IFAP desde 2011 e tem experiência como professor em instituições de ensino superior. Desenvolve pesquisas em inteligência computacional, ambientes virtuais de aprendizagem e chatbots. É autor de artigos e capítulos de livros sobre software livre na educação, participação feminina na tecnologia e práticas curriculares. Também participa de bancas, eventos acadêmicos e orientações de TCC. Sua atuação abrange Ciência da Computação, Educação Tecnológica e Engenharia de Software.",
      image: "/images/researchers/paulo.jpg"
    },
    {
      id: "celio-rodrigues",
      name: "Celio Rodrigues",
      title: "Pesquisador Sênior",
      area: "Ética em IA e Impactos Sociais",
      description: "Possui graduação em Ciência da Computação pela Universidade de Franca, Mestrado em Ciências em Educação Agrícola, Especialização em Didática do Ensino Superior e Complementação Pedagógica em Informática. Tem experiência na área de informática, com ênfase em Ciência da Computação e 14 anos em sala de aula.",
      image: "/images/researchers/mariana.jpg"
    },
  ];

  // Variantes para animações de entrada
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } }
  };

  return (
    <Layout className="bg-gradient-to-br from-[#376A63] to-[#20423E] min-h-screen">
      <div ref={containerRef} className="max-w-6xl mx-auto py-16 relative">
        {/* Elementos decorativos de fundo */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ y: bgY }}
        >
          <div className="absolute top-40 right-10 w-64 h-64 bg-[#FDD744]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#7DCB80]/5 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="mb-20 relative"
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#FDD744] rounded-full blur-3xl opacity-20"></div>
          <motion.h1 
            className="text-center text-5xl md:text-6xl font-bold text-white mb-6"
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
            className="text-center text-[#7DCB80] max-w-3xl mx-auto text-lg text-justify"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Conheça nossos pesquisadores e suas contribuições para o avanço da pesquisa em inteligência artificial
          </motion.p>
        </motion.div>

        {/* Grade de pesquisadores */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {researchers.map((researcher, index) => (
            <motion.div 
              key={researcher.id} 
              variants={item}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-[#2C5550]/50 rounded-2xl p-8 border border-[#376A63] relative overflow-hidden group`}
            >
              {/* Borda decorativa */}
              <motion.div 
                className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-0 bottom-0 w-1 bg-[#FDD744]`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              ></motion.div>
              
              {/* Imagem do pesquisador */}
              <motion.div 
                className="relative w-full md:w-1/3 aspect-[4/5]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FDD744] to-[#7DCB80] rounded-xl opacity-20 blur-sm"></div>
                <div className="relative h-full w-full rounded-xl bg-[#20423E]/50 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-[#20423E] flex items-center justify-center text-7xl font-bold text-[#FDD744]/20"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    {researcher.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-[#20423E]/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  ></motion.div>
                </div>
              </motion.div>
              
              {/* Conteúdo */}
              <motion.div 
                className="flex-1 space-y-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[#7DCB80] text-sm"
                >
                  {`0${index + 1}`}
                </motion.div>
                
                <motion.h2 
                  className="text-3xl font-bold text-white group-hover:text-[#FDD744] transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {researcher.name}
                </motion.h2>
                
                <motion.div 
                  className="text-[#7DCB80] text-xl mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {researcher.title}
                </motion.div>
                    
                <motion.div 
                  className="h-0.5 w-20 bg-[#FDD744]/30 my-4"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
                  
                <motion.div 
                  className="text-[#7DCB80]/70 mb-2 text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className="text-[#FDD744]/80">Área:</span> {researcher.area}
                </motion.div>
                
                <motion.p 
                  className="text-white/80 mb-6 text-justify"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {researcher.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-[#FDD744] text-[#FDD744] hover:bg-[#FDD744]/10"
                  >
                    Ver Perfil Completo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Elemento decorativo */}
              <motion.div 
                className={`absolute ${index % 2 === 0 ? '-right-20' : '-left-20'} -bottom-20 w-40 h-40 rounded-full bg-[#FDD744]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Researchers;
