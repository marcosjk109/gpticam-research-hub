
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PersonCardProps {
  name: string;
  role: string;
  image?: string;
  area: string;
  email?: string;
}

const PersonCard = ({ name, role, image, area, email }: PersonCardProps) => {
  // Get initials from name for avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
