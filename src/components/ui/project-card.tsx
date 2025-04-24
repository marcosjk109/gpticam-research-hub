import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  status: "Em andamento" | "Concluído" | "Planejado";
  tags: string[];
  year: string;
}

const ProjectCard = ({ title, description, image, status, tags, year }: ProjectCardProps) => {
  const statusColor = {
    "Em andamento": "bg-primary",
    "Concluído": "bg-green-500",
    "Planejado": "bg-secondary",
  }[status];

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all-slow hover:shadow-lg hover:-translate-y-1 animate-scale">
      {image && (
        <div className="h-36 sm:h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
      )}
      <CardHeader className="px-4 sm:px-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <CardTitle className="transition-colors hover:text-primary text-lg sm:text-xl break-words">{title}</CardTitle>
          <div className={`text-xs rounded-full px-2 py-1 text-white transition-colors ${statusColor} whitespace-nowrap`}>
            {status}
          </div>
        </div>
        <CardDescription className="text-sm">{year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-4 sm:px-6">
        <p className="text-sm text-muted-foreground transition-colors hover:text-foreground line-clamp-3 sm:line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t pt-4 px-4 sm:px-6">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="transition-all-slow hover:scale-105 text-xs whitespace-nowrap">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
