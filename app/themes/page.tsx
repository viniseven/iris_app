import { Plus } from "lucide-react";
import Header from "../_components/Header";
import PageContent from "../_components/PageContent";
import PageTitle from "../_components/PageTitle";
import TitlePageButton from "../_components/TitlePageButton";

export default function ThemesPage() {
  return (
    <div className="w-full">
      <Header />
      <PageContent>
        <PageTitle title="Temas" description="Gerencie temas de treinamento" />
        <TitlePageButton iconButton={Plus} titleButton="Adicionar tema" />
      </PageContent>
    </div>
  );
}
