"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center gap-2 rounded-full transition-all duration-300 px-4 py-2 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white shadow-lg border border-white/20"
                      : "text-white/70 hover:text-white hover:bg-white/10 hover:shadow-md"
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline font-medium">
                    {item.label}
                  </span>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Social Links */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                title={social.label}
              >
                <Icon
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
