"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { CalendarIcon, CrownIcon, HomeIcon, MicIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* LOGO */}
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="DentWise Logo" width={32} height={32} className="w-11" />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className={`flex items-center gap-2 transition-colors ${
                  pathname === "/dashboard"
                    ? "text-foreground hover:text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <HomeIcon className="w-4 h-4" />
                <span className="hidden md:inline">Dashboard</span>
              </Link>

              <Link
                href="/appointments"
                className={`flex items-center gap-2 transition-colors hover:text-foreground ${
                  pathname === "/appointments" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <CalendarIcon className="w-4 h-4" />
                <span className="hidden md:inline">Appointments</span>
              </Link>

              <Link
                href="/voice"
                className={`flex items-center gap-2 transition-colors hover:text-foreground ${
                  pathname === "/voice" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <MicIcon className="w-4 h-4" />
                <span className="hidden md:inline">Voice</span>
              </Link>
              <Link
                href="/pro"
                className={`flex items-center gap-2 transition-colors hover:text-foreground ${
                  pathname === "/pro" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <CrownIcon className="w-4 h-4" />
                <span className="hidden md:inline">Pro</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-sm font-medium text-foreground">
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="text-xs text-muted-foreground">
                  {user?.emailAddresses?.[0]?.emailAddress}
                </span>
              </div>

              <UserButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border/50 h-14 flex justify-around items-center md:hidden">
        <Link href="/dashboard" className={pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"}>
          <HomeIcon className="w-6 h-6" />
        </Link>
        <Link href="/appointments" className={pathname === "/appointments" ? "text-primary" : "text-muted-foreground"}>
          <CalendarIcon className="w-6 h-6" />
        </Link>
        <Link href="/voice" className={pathname === "/voice" ? "text-primary" : "text-muted-foreground"}>
          <MicIcon className="w-6 h-6" />
        </Link>
        <Link href="/pro" className={pathname === "/pro" ? "text-primary" : "text-muted-foreground"}>
          <CrownIcon className="w-6 h-6" />
        </Link>
      </nav>
    </>
  );
}
export default Navbar;