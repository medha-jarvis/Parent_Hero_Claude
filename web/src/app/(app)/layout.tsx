"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const HIDE_NAV_PATHS = ["/campaign/", "/script/", "/practice/", "/quiz/"];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = HIDE_NAV_PATHS.some((p) => pathname.includes(p));

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      <main className={`flex-1 ${hideNav ? "" : "pb-20"}`}>{children}</main>
      {!hideNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-100 shadow-lg z-50">
          <div className="flex">
            <NavItem href="/dashboard" icon="🏠" label="Home" active={pathname === "/dashboard"} />
            <NavItem href="/progress" icon="📊" label="Progress" active={pathname === "/progress"} />
            <NavItem href="/library" icon="📚" label="Library" active={pathname === "/library"} />
            <NavItem href="/settings" icon="⚙️" label="Settings" active={pathname === "/settings"} />
          </div>
        </nav>
      )}
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex-1 flex flex-col items-center py-3 gap-0.5 transition-colors"
    >
      <span className="text-xl">{icon}</span>
      <span
        className="text-xs font-semibold"
        style={{ color: active ? "#1CB0F6" : "#9CA3AF" }}
      >
        {label}
      </span>
      {active && (
        <div className="absolute bottom-0 w-8 h-0.5 rounded-full bg-[#1CB0F6]" />
      )}
    </Link>
  );
}
