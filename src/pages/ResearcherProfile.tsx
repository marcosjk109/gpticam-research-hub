
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Researcher } from "@/types/researcher";

const ResearcherProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - In a real application, this would come from an API or database
  const researchers: Record<string, Researcher> = {
    "ana-silva": {
      id: "ana-silva",
      name: "Dr. Ana Silva",
      role: "Coordenadora",
      area: "Inteligência Artificial, Aprendizado de Máquina",
      email: "ana.silva@gpticam.org",
      bio: "Pesquisadora com mais de 10 anos de experiência em Inteligência Artificial e Aprendizado de Máquina. Coordena projetos de pesquisa em aplicações de IA em problemas complexos.",
      technologies: [
        { name: "Python", proficiency: "Avançado" },
        { name: "TensorFlow", proficiency: "Avançado" },
        { name: "PyTorch", proficiency: "Avançado" },
        { name: "Scikit-learn", proficiency: "Avançado" },
      ],
      publications: [
        {
          title: "Deep Learning Applications in Computer Vision: A Comprehensive Review",
          year: "2024",
          journal: "Journal of Artificial Intelligence",
          link: "#"
        },
        {
          title: "Machine Learning Approaches for Complex Problem Solving",
          year: "2023",
          journal: "AI Research Quarterly",
          link: "#"
        }
      ]
    },
    // Add more researchers here...
  };

  const researcher = researchers[id as string];

  if (!researcher) {
    return (
      <Layout>
        <div className="text-center">
          <p>Pesquisador não encontrado</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <button 
        onClick={() => navigate("/pesquisadores")}
        className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Pesquisadores
      </button>

      <div className="animate-fade-in">
        <SectionHeader 
          title={researcher.name}
          subtitle={researcher.role}
        />

        <Card className="mb-8 hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Área de Atuação</h3>
                <p className="text-muted-foreground">{researcher.area}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contato</h3>
                <p className="text-muted-foreground">{researcher.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="about" className="w-full animate-fade-in">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="technologies">Tecnologias</TabsTrigger>
            <TabsTrigger value="publications">Publicações</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{researcher.bio}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technologies" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {researcher.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <span className="font-medium">{tech.name}</span>
                      <Badge 
                        variant="secondary"
                        className="transition-all hover:scale-105"
                      >
                        {tech.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {researcher.publications.map((pub, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium hover:text-primary transition-colors">
                        {pub.link ? (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ResearcherProfile;
