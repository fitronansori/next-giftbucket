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
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
          <Title
            title="Koleksi Produk Unggulan"
            subtitle="Setiap gift bucket dibuat dengan cinta dan perhatian detail untuk menciptakan kebahagiaan yang tak terlupakan."
            className="text-center md:text-start"
            subClassName="max-w-[500px]"
          />

          <Button size={"lg"} asChild>
            <Link href={"/produk-kami"}>
              <ShoppingBagIcon className="size-5" />
              Semua Produk
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Product;
