"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function SiteMain({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const needsNavbarSpacing =
    pathname !== "/" &&
    pathname !== "/documents" &&
    ![
      "/admin",
      "/dashboard",
      "/events",
      "/fetchuid",
      "/gallery",
      "/login",
      "/signup",
    ].some((route) => pathname.startsWith(route));

  return (
    <main
      className={`min-h-screen bg-[#0b0f17] text-white ${
        needsNavbarSpacing ? "pt-24 sm:pt-28" : ""
      }`}
    >
      {children}
    </main>
  );
}
