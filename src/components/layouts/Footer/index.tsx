import Link from "next/link";
import Logo from "../../common/Logo";

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Platform terpercaya untuk hadiah dan produk berkualitas dengan
              layanan terbaik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Menu Utama</h3>
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
                  href="/tentang"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kategori</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kategori/elektronik"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Elektronik
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/fashion"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/rumah"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rumah & Dekorasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/hadiah"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hadiah Spesial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 info@giftbucket.com</p>
              <p>📱 +62 812-3456-7890</p>
              <p>📍 Lombok, Indonesia</p>

              <div className="flex space-x-4 mt-4">
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
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
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
