import { Button } from "@/components/ui/button";
import { FlowerIcon, MessageSquareMoreIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="container py-10 md:h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="w-full lg:h-[500px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="lg:flex-1 h-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left leading-tight">
              Gift Bucket Unik untuk Semua Momen
            </h1>

            <p className="max-w-lg text-sm md:text-base lg:text-lg text-muted-foreground text-center lg:text-left leading-relaxed">
              Ciptakan kebahagiaan tak terlupakan dengan gift bucket premium
              yang dirancang khusus dengan cinta untuk setiap momen spesial.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto flex items-center gap-2 px-6 py-3"
                asChild
              >
                <Link href="/">
                  <MessageSquareMoreIcon className="w-5 h-5" />
                  Pesan Sekarang
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto flex items-center gap-2 px-6 py-3"
                asChild
              >
                <Link href="/">
                  <FlowerIcon className="w-5 h-5" />
                  Lihat Koleksi
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:flex-1 h-[350px] md:h-[450px] lg:h-full relative">
            <Image
              src="/assets/images/hero.png"
              alt="Hero Image"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover rounded-2xl shadow-2xl dark:shadow-primary/20 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
