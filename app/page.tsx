import PageTitle from "./_components/PageTitle";

export default function DashboardPage() {
  return (
    <div className="flex flex-col mb-6 p-4 w-full gap-2 tablet:flex-row tablet:justify-between tablet:gap-0">
      <PageTitle title="Dashboard" description="Visão geral dos indicadores" />
    </div>
  );
}
