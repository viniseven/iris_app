import { Button } from "./ui/button";

interface TitlePageButtonProps {
  iconButton: React.ElementType;
  titleButton: string;
}

export default function TitlePageButton({
  iconButton: Icon,
  titleButton,
}: TitlePageButtonProps) {
  return (
    <Button className="bg-blue-200 text-white-100 hover:bg-gray-200">
      <Icon />
      {titleButton}
    </Button>
  );
}
