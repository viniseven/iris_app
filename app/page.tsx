import Header from "./_components/Header";
import PageTitle from "./_components/PageTitle";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <Header />
      <PageTitle title="Dashboard" description="Visão geral dos indicadores" />
    </div>
  );
}
