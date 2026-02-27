import PageContent from "./_components/PageContent";
import PageTitle from "./_components/PageTitle";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <PageContent>
        <PageTitle
          title="Dashboard"
          description="Visão geral dos indicadores"
        />
      </PageContent>
    </div>
  );
}
