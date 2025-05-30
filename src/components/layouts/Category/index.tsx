import Title from "@/components/common/Title";
import { categories } from "@/constants/data";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section id="kategori" className="py-10 lg:py-14">
      <div className="container space-y-8">
        <Title
          title="Kategori Produk Kami"
          subtitle="Temukan gift bucket perfect untuk setiap momen spesial dalam hidup Anda"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <CategoryCard key={item.id} category={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
