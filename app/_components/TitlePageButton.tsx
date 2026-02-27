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
    <Button className="bg-button text-button-text hover:bg-gray-200">
      <Icon />
      {titleButton}
    </Button>
  );
}
