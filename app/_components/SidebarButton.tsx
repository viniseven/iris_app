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
      variant={pathname == href ? "default" : "ghost"}
      className="w-[90%]"
    >
      <Link href={href} className="flex justify-start gap-2">
        {children}
      </Link>
    </Button>
  );
}
