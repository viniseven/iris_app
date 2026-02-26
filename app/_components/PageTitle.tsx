interface IPageTitleProps {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: IPageTitleProps) {
  return (
    <div className="flex justify-between ">
      <div>
        <h1 className="text-2xl font-bold text-blue-200">{title}</h1>
        <p className="text-gray-100">{description}</p>
      </div>
    </div>
  );
}
