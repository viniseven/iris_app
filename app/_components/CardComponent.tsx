import { Building } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface CardComponentProps {
  title: string;
}

export default function CardComponent({ title }: CardComponentProps) {
  return (
    <Card className="bg-card border-0">
      <CardHeader className="flex gap-6">
        <Building
          className="bg-white-200 text-gray-100 p-1 rounded-lg"
          size={60}
        />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
