import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { productsData } from "@/constants/data";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container space-y-8">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0">
          <Title
            title="Koleksi Produk Unggulan"
            subtitle="Setiap gift bucket dibuat dengan cinta dan perhatian detail untuk menciptakan kebahagiaan yang tak terlupakan."
            className="text-center md:text-start"
            subClassName="max-w-[500px]"
          />

          <Button size="lg" asChild className="shrink-0">
            <Link
              href="/produk-kami"
              className="flex items-center gap-2 transition-colors hover:bg-primary/90"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              Semua Produk
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productsData.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Product;
