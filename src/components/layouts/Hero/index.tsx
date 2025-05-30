import { Button } from "@/components/ui/button";
import { FlowerIcon, MessageSquareMoreIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container py-10 md:h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="w-full lg:h-[500px] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:flex-1 h-full flex flex-col items-center lg:items-start justify-center  gap-4 lg:gap-8">
            <h2 className="text-3xl md:text-6xl font-bold text-center lg:text-start">
              Gift Bucket Unik untuk Semua Momen
            </h2>

            <p className="max-w-[430px] text-sm md:text-base text-muted-foreground text-center lg:text-start">
              Ciptakan kebahagiaan tak terlupakan dengan gift bucket premium
              yang dirancang khusus dengan cinta untuk setiap momen spesial.
            </p>

            <div className="flex items-center gap-4">
              <Button size={"lg"} asChild>
                <Link href={"/"}>
                  <MessageSquareMoreIcon className="size-5" /> Pesan Sekarang
                </Link>
              </Button>

              <Button size={"lg"} asChild>
                <Link href={"/"}>
                  <FlowerIcon className="size-5" /> Lihat Koleksi
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full h-[350px] md:h-[580px] lg:flex-1 lg:h-full relative">
            <Image
              src={"/assets/images/hero.png"}
              alt="Hero Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg shadow-lg dark:shadow-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
