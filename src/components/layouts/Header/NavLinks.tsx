import Link from "next/link";

import { cn } from "@/lib/utils";

// Use underscore for field names as per user instructions
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
  class_name_link?: string; // Use underscore for field names
};

const NavLinks = ({ className, class_name_link }: NavLinkProps) => {
  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {nav_links.map((link_item, index) => (
        <Link
          key={index}
          href={link_item.href}
          className={cn(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring relative text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
            "after:bg-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
            class_name_link
          )}
        >
          {link_item.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
