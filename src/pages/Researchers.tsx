import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Researchers = () => {
  const navigate = useNavigate();
  
  const researchers = [
    {
      id: "ana-silva",
      name: "Dr. Ana Silva",
      role: "Coordenadora",
      area: "Inteligência Artificial, Aprendizado de Máquina",
      email: "ana.silva@gpticam.org",
      initials: "DA"
    },
    {
      id: "rafael-costa",
      name: "Dr. Rafael Costa",
      role: "Pesquisador Sênior",
      area: "Visão Computacional, Processamento de Imagens",
      email: "rafael.costa@gpticam.org",
      initials: "DR"
    },
    {
      id: "carla-mendes",
      name: "Dr. Carla Mendes",
      role: "Pesquisadora",
      area: "Sistemas Distribuídos, Computação em Nuvem",
      email: "carla.mendes@gpticam.org",
      initials: "DC"
    },
    {
      id: "ricardo-oliveira",
      name: "Dr. Ricardo Oliveira",
      role: "Pesquisador",
      area: "Segurança da Informação, Criptografia",
      email: "ricardo.oliveira@gpticam.org",
      initials: "DR"
    },
    {
      id: "fernanda-lima",
      name: "Dr. Fernanda Lima",
      role: "Pesquisadora",
      area: "Redes Neurais, Deep Learning",
      email: "fernanda.lima@gpticam.org",
      initials: "DF"
    },
    {
      id: "marcos-santos",
      name: "Dr. Marcos Santos",
      role: "Pesquisador",
      area: "Processamento de Linguagem Natural, Análise de Sentimentos",
      email: "marcos.santos@gpticam.org",
      initials: "DM"
    },
  ];

  return (
    <Layout className="bg-gradient-to-br from-[#376A63] to-[#20423E] min-h-screen">
      <div className="max-w-6xl mx-auto py-16">
        {/* Header com estilo moderno */}
        <div className="mb-20 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FDD744] rounded-full blur-2xl opacity-20"></div>
          <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#FDD744]">Pesquisadores</span>
          </h1>
          <p className="text-center text-[#7DCB80] max-w-3xl mx-auto text-lg">
            Nossa equipe de pesquisadores é composta por profissionais altamente qualificados, com ampla experiência 
            em suas respectivas áreas de atuação.
          </p>

          {/* Elemento decorativo */}
          <div className="absolute right-0 top-0 w-24 h-24">
            <div className="absolute right-0 top-0 w-10 h-10 bg-[#7DCB80] rounded-tl-xl"></div>
            <div className="absolute right-12 top-12 w-12 h-12 border-2 border-[#FDD744]/20 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchers.map((researcher, index) => (
            <div 
              key={researcher.id || index}
              className="relative group bg-[#2C5550] border border-[#376A63] rounded-xl overflow-hidden p-8 cursor-pointer hover:bg-[#31625C] transition-all duration-300"
              onClick={() => navigate(`/pesquisadores/${researcher.id || researcher.name.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              {/* Barra lateral colorida */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FDD744] opacity-70 group-hover:opacity-100"></div>
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute w-20 h-20 bg-[#7DCB80] rounded-full -top-3 -left-3 opacity-10 blur-sm"></div>
                  <Avatar className="h-16 w-16 text-2xl bg-[#20423E] ring-2 ring-[#FDD744]/20">
                    <AvatarFallback className="bg-[#7DCB80]/10 text-[#FDD744] font-bold">{researcher.initials}</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[#7DCB80] text-sm block mb-1">{`0${index + 1}`}</span>
                      <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FDD744] transition-colors">{researcher.name}</h2>
                      <p className="text-[#7DCB80] text-sm mb-4">{researcher.role}</p>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full border border-[#376A63] flex items-center justify-center group-hover:border-[#FDD744] group-hover:bg-[#FDD744]/10 transition-all">
                      <ArrowRight className="h-4 w-4 text-[#7DCB80] group-hover:text-[#FDD744]" />
                    </div>
                  </div>
                  
                  <div className="text-[#7DCB80] text-sm space-y-2">
                    <div className="flex items-start gap-1">
                      <span className="text-[#7DCB80]/70 shrink-0">Área:</span> 
                      <span>{researcher.area}</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="text-[#7DCB80]/70 shrink-0">Email:</span> 
                      <span>{researcher.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Número grande no canto */}
              <div className="absolute -bottom-6 -right-3 text-[120px] font-bold text-[#31625C] opacity-30 select-none">{`0${index + 1}`}</div>
            </div>
          ))}
        </div>

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

export default Researchers;
