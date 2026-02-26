import { Plus } from "lucide-react";
import Header from "../_components/Header";
import PageContent from "../_components/PageContent";
import PageTitle from "../_components/PageTitle";
import TitlePageButton from "../_components/TitlePageButton";

export default function CollaboratorsPage() {
  return (
    <div className="w-full">
      <Header />
      <PageContent>
        <PageTitle
          title="Colaboradores"
          description="Gerencie colaboradores e facilitadores"
        />
        <TitlePageButton
          iconButton={Plus}
          titleButton="Adicionar colaborador"
        />
      </PageContent>
    </div>
  );
}
