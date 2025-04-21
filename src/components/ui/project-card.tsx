
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
    "Em andamento": "bg-blue-500",
    "Concluído": "bg-green-500",
    "Planejado": "bg-amber-500",
  }[status];

  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <div className={`text-xs rounded-full px-2 py-1 text-white ${statusColor}`}>
            {status}
          </div>
        </div>
        <CardDescription>{year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
