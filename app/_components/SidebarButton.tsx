"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface ISidebarButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarButton({ children, href }: ISidebarButtonProps) {
  const pathname = usePathname();
  return (
    <Button
      asChild
      className={`hover:text-white-100 w-[90%] text-lg hover:bg-foreground-sidebar ${pathname == href ? "text-white-100 bg-foreground-sidebar" : ""}`}
      variant={pathname == href ? "secondary" : "ghost"}
    >
      <Link href={href} className="flex justify-start gap-2">
        {children}
      </Link>
    </Button>
  );
}
