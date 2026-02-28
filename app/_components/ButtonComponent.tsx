import { Button } from "./ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconButton?: React.ElementType;
  titleButton: string;
}

export default function ButtonComponent({
  iconButton: Icon,
  titleButton,
  ...props
}: ButtonProps) {
  return (
    <Button {...props} className="bg-button text-button-text hover:bg-gray-200">
      {Icon && <Icon />}
      {titleButton}
    </Button>
  );
}
