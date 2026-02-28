import PageTitle from "@/app/_components/PageTitle";
import RegisterSectorDialog from "./_components/registerSectorDialog";

export default function SectorsPage() {
  return (
    <div className="flex flex-col mb-6 p-4 w-full gap-2 tablet:flex-row tablet:justify-between tablet:gap-0">
      <PageTitle
        title="Setores"
        description="Gerencie os setores cadastrados"
      />
      <RegisterSectorDialog />
    </div>
  );
}
