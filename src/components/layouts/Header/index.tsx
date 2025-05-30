import Logo from "@/components/common/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container h-16 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4 lg:gap-10">
          <NavLinks className="hidden lg:flex" />

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Button className="hidden lg:inline-flex" asChild>
              <Link href={"#kontak"}>Pesan Sekarang</Link>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
