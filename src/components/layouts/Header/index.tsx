import Link from "next/link";

import { MessageSquareMoreIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation Section */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Desktop Navigation */}
          <NavLinks className="hidden lg:flex" />

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button className="hidden lg:inline-flex" size="lg" asChild>
              <Link href="#kontak">
                <MessageSquareMoreIcon className="size-5" />
                Pesan Sekarang
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
