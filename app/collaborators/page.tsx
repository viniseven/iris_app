import PageTitle from "../_components/PageTitle";
import AddCollaboratorsButton from "./_components/addCollaboratorButton";

export default function CollaboratorsPage() {
  return (
    <div className="flex flex-col mb-6 p-4 w-full gap-2 tablet:flex-row tablet:justify-between tablet:gap-0">
      <PageTitle
        title="Colaboradores"
        description="Gerencie colaboradores e facilitadores"
      />
      <AddCollaboratorsButton />
    </div>
  );
}
