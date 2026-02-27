import * as z from "zod";
import PageTitle from "../_components/PageTitle";

import AddDepartmentButton from "./_components/addDepartmentButton";

const formDepartmentSchema = z.object({
  name: z.string().trim().min(1, { error: "Nome é obrigatório" }),
});

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col mb-6 p-4 w-full gap-2 tablet:flex-row tablet:justify-between tablet:gap-0">
      <PageTitle
        title="Setores"
        description="Gerencie os departamentos cadastrados"
      />
      <AddDepartmentButton />
    </div>
  );
}
