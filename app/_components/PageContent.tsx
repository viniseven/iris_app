import { ReactNode } from "react";

export default function PageContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between items-center mb-6 p-4">{children}</div>
  );
}
