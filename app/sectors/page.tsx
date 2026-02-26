import { Plus } from "lucide-react";
import Header from "../_components/Header";
import PageContent from "../_components/PageContent";
import PageTitle from "../_components/PageTitle";
import TitlePageButton from "../_components/TitlePageButton";

export default function SectorsPage() {
  return (
    <div className="w-full">
      <Header />
      <PageContent>
        <PageTitle
          title="Setores"
          description="Gerencie os setores cadastrados"
        />
        <TitlePageButton iconButton={Plus} titleButton="Adicionar setor" />
      </PageContent>
    </div>
  );
}
