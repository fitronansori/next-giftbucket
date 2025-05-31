"use client";

import { useState, useMemo, useEffect } from "react";
import Title from "@/components/common/Title";
import ProductCard from "@/components/layouts/Product/ProductCard";
import ProductPagination from "@/components/layouts/Product/ProductPagination";
import ProductSelect from "@/components/layouts/Product/ProductSelect";
import SearchProduct from "@/components/layouts/Product/SearchProduct";
import { productsData } from "@/constants/data";

const ProdukPage = () => {
  const [current_page, setCurrentPage] = useState(1);
  const [search_term, setSearchTerm] = useState("");
  const [selected_category, setSelectedCategory] = useState("all");
  const products_per_page = 8;

  // Filter and search logic
  const filtered_products = useMemo(() => {
    return productsData.filter((product) => {
      const matches_search =
        product.name.toLowerCase().includes(search_term.toLowerCase()) ||
        product.description.toLowerCase().includes(search_term.toLowerCase());
      const matches_category =
        selected_category === "all" ||
        product.category.toLowerCase() === selected_category.toLowerCase();

      return matches_search && matches_category;
    });
  }, [search_term, selected_category]);

  // Pagination logic
  const total_pages = Math.ceil(filtered_products.length / products_per_page);
  const start_index = (current_page - 1) * products_per_page;
  const end_index = start_index + products_per_page;
  const current_products = filtered_products.slice(start_index, end_index);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search_term, selected_category]);

  return (
    <section className="py-10 lg:py-14">
      <div className="container space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4">
          <Title
            title="Koleksi Produk Unggulan"
            subtitle="Setiap gift bucket dibuat dengan cinta dan perhatian detail untuk menciptakan kebahagiaan yang tak terlupakan."
            className="text-center lg:text-start"
            subClassName="max-w-[500px]"
          />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <SearchProduct onSearchChange={setSearchTerm} />
            <ProductSelect onCategoryChange={setSelectedCategory} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {current_products.length > 0 ? (
            current_products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                Tidak ada produk yang ditemukan
              </p>
            </div>
          )}
        </div>

        {total_pages > 1 && (
          <ProductPagination
            current_page={current_page}
            total_pages={total_pages}
            on_page_change={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};
export default ProdukPage;
