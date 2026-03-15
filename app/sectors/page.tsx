import PageTitle from "@/app/_components/PageTitle";
import CardComponent from "../_components/CardComponent";
import { getAllSectors } from "../_data_access/sector";
import CreateSectorButton from "./_components/createSectorButton";

export default async function SectorsPage() {
  const resultSectors = await getAllSectors();

  return (
    <div className="w-full p-4 mb-6 flex flex-col gap-4">
      <div className="flex flex-col w-full gap-2 tablet:flex-row tablet:justify-between tablet:gap-0">
        <PageTitle
          title="Setores"
          description="Gerencie os setores cadastrados"
        />
        <CreateSectorButton />
      </div>

      <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3">
        {resultSectors.map((sector) => (
          <CardComponent
            key={sector.id}
            title={sector.name.replaceAll("_", " ").toUpperCase()}
            id={sector.id}
          />
        ))}
      </div>
    </div>
  );
}
