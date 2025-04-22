import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface PersonCardProps {
  id?: string;
  name: string;
  role: string;
  image?: string;
  area: string;
  email?: string;
  type?: "researcher" | "scholar";
}

const PersonCard = ({ id, name, role, image, area, email, type = "researcher" }: PersonCardProps) => {
  const navigate = useNavigate();
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  // Create URL-friendly ID if not provided
  const urlId = id || name.toLowerCase().replace(/\s+/g, "-");
  
  // Definir o caminho de navegação com base no tipo
  const basePath = type === "scholar" ? "/bolsistas/" : "/pesquisadores/";

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer animate-scale"
      onClick={() => navigate(`${basePath}${urlId}`)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-primary text-white">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><span className="font-medium">Área:</span> {area}</p>
          {email && <p><span className="font-medium">Email:</span> {email}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
