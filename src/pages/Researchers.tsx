
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import PersonCard from "@/components/ui/person-card";

const Researchers = () => {
  // Sample researchers data
  const researchers = [
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
    {
      name: "Dr. Carla Mendes",
      role: "Pesquisadora",
      area: "Sistemas Distribuídos, Computação em Nuvem",
      email: "carla.mendes@gpticam.org"
    },
    {
      name: "Dr. Ricardo Oliveira",
      role: "Pesquisador",
      area: "Segurança da Informação, Criptografia",
      email: "ricardo.oliveira@gpticam.org"
    },
    {
      name: "Dr. Fernanda Lima",
      role: "Pesquisadora",
      area: "Redes Neurais, Deep Learning",
      email: "fernanda.lima@gpticam.org"
    },
    {
      name: "Dr. Marcos Santos",
      role: "Pesquisador",
      area: "Processamento de Linguagem Natural, Análise de Sentimentos",
      email: "marcos.santos@gpticam.org"
    },
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Pesquisadores" 
        subtitle="Conheça a equipe de pesquisadores do GPTICAM"
      />
      
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <p className="text-gray-700">
          Nossa equipe de pesquisadores é composta por profissionais altamente qualificados, com ampla experiência 
          em suas respectivas áreas de atuação. Juntos, eles lideram projetos inovadores e orientam estudantes em 
          todos os níveis acadêmicos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchers.map((researcher, index) => (
          <PersonCard
            key={index}
            name={researcher.name}
            role={researcher.role}
            area={researcher.area}
            email={researcher.email}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Researchers;
