"use client";

import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ISidebarButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarButton({ children, href }: ISidebarButtonProps) {
  const pathname = usePathname();
  return (
    <Button
      asChild
      className={`hover:text-white-100 hover:bg-gray-200 w-[90%] text-lg ${pathname == href ? "text-white-100" : ""}`}
      variant={pathname == href ? "secondary" : "ghost"}
    >
      <Link href={href} className="flex justify-start gap-2">
        {children}
      </Link>
    </Button>
  );
}
