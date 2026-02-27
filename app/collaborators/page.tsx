import { Plus } from "lucide-react";
import PageTitle from "../_components/PageTitle";
import TitlePageButton from "../_components/TitlePageButton";

export default function CollaboratorsPage() {
  return (
    <div className="flex flex-col mb-6 p-4 w-full gap-2 tablet:flex-row tablet:justify-between tablet:gap-0">
      <PageTitle
        title="Colaboradores"
        description="Gerencie colaboradores e facilitadores"
      />
      <TitlePageButton iconButton={Plus} titleButton="Adicionar colaborador" />
    </div>
  );
}
