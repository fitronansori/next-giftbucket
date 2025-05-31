import Title from "@/components/common/Title";

import { pricing_plans } from "@/constants/data";

import PriceCard from "./PriceCard";

const Prices = () => {
  return (
    <section id="harga-paket" className="bg-muted/30 py-10 lg:py-14">
      <div className="container space-y-10">
        <Title
          title="Paket Harga Terbaik"
          subtitle="Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk bunga segar berkualitas premium."
          className="text-center"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricing_plans.map(pricing_plan => (
            <PriceCard key={pricing_plan.id} pricing_plan={pricing_plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
