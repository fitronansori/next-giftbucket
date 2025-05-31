import Link from "next/link";

import Logo from "../../common/Logo";

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Platform terpercaya untuk hadiah dan produk berkualitas dengan
              layanan terbaik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk-kami"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#kontak"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Kategori</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Elektronik
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rumah & Dekorasi
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hadiah Spesial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Hubungi Kami</h3>
            <div className="text-muted-foreground space-y-2 text-sm">
              <p>📧 info@giftbucket.com</p>
              <p>📱 +62 812-3456-7890</p>
              <p>📍 Lombok, Indonesia</p>

              <div className="mt-4 flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {current_year} Gift Bucket. Semua hak dilindungi.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
