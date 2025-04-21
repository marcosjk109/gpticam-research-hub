
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import PersonCard from "@/components/ui/person-card";

const Scholars = () => {
  // Sample scholars data
  const scholars = [
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
    {
      name: "Julia Costa",
      role: "Bolsista de Iniciação Científica",
      area: "Visão Computacional",
      email: "julia.costa@gpticam.org"
    },
    {
      name: "Lucas Ferreira",
      role: "Bolsista de Mestrado",
      area: "Inteligência Artificial",
      email: "lucas.ferreira@gpticam.org"
    },
    {
      name: "Camila Rodrigues",
      role: "Bolsista de Doutorado",
      area: "Segurança de Dados",
      email: "camila.rodrigues@gpticam.org"
    },
    {
      name: "Bruno Lima",
      role: "Bolsista de Iniciação Científica",
      area: "Desenvolvimento Web",
      email: "bruno.lima@gpticam.org"
    },
    {
      name: "Mariana Alves",
      role: "Bolsista de Mestrado",
      area: "Machine Learning",
      email: "mariana.alves@gpticam.org"
    },
    {
      name: "Felipe Souza",
      role: "Bolsista de Iniciação Científica",
      area: "Banco de Dados",
      email: "felipe.souza@gpticam.org"
    },
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Bolsistas" 
        subtitle="Conheça os bolsistas do GPTICAM"
      />
      
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <p className="text-gray-700">
          Nossos bolsistas são estudantes de graduação e pós-graduação que contribuem significativamente 
          para os projetos de pesquisa desenvolvidos pelo grupo, ao mesmo tempo em que expandem seus 
          conhecimentos e desenvolvem suas habilidades acadêmicas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholars.map((scholar, index) => (
          <PersonCard
            key={index}
            name={scholar.name}
            role={scholar.role}
            area={scholar.area}
            email={scholar.email}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Scholars;
