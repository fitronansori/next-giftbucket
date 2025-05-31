import Category from "@/components/layouts/Category";
import Hero from "@/components/layouts/Hero";
import Prices from "@/components/layouts/Prices";
import Product from "@/components/layouts/Product";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Category />
      <Product />
      <Prices />
    </>
  );
};
export default HomePage;
