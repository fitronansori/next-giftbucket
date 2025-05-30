import { cn } from "@/lib/utils";
import Link from "next/link";

const nav_links = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Kategori",
    href: "#kategori",
  },
  {
    name: "Produk",
    href: "/produk-kami",
  },
  {
    name: "Harga Paket",
    href: "#harga-paket",
  },
  {
    name: "Kontak",
    href: "#kontak",
  },
];

type NavLinkProps = {
  className?: string;
  classNameLink?: string;
};

const NavLinks = ({ className, classNameLink }: NavLinkProps) => {
  return (
    <nav className={cn("flex items-center gap-10", className)}>
      {nav_links.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "font-semibold hover:text-primary transition-colors duration-300 ease-in-out",
            classNameLink
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
