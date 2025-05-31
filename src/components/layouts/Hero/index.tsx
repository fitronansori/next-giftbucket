import Image from "next/image";
import Link from "next/link";

import { FlowerIcon, MessageSquareMoreIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="container flex items-center justify-center py-10 md:h-[calc(100vh-64px)]">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:h-[500px] lg:flex-row lg:gap-12">
          {/* Content Section */}
          <div className="flex h-full flex-col items-center justify-center gap-4 lg:flex-1 lg:items-start lg:gap-8">
            <h1 className="text-center text-3xl leading-tight font-bold md:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
              Gift Bucket Unik untuk Semua Momen
            </h1>

            <p className="text-muted-foreground max-w-lg text-center text-sm leading-relaxed md:text-base lg:text-left lg:text-lg">
              Ciptakan kebahagiaan tak terlupakan dengan gift bucket premium
              yang dirancang khusus dengan cinta untuk setiap momen spesial.
            </p>

            <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                className="flex w-full items-center gap-2 px-6 py-3 sm:w-auto"
                asChild
              >
                <Link href="/">
                  <MessageSquareMoreIcon className="h-5 w-5" />
                  Pesan Sekarang
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex w-full items-center gap-2 px-6 py-3 sm:w-auto"
                asChild
              >
                <Link href="/">
                  <FlowerIcon className="h-5 w-5" />
                  Lihat Koleksi
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[350px] w-full md:h-[450px] lg:h-full lg:flex-1">
            <Image
              src="/assets/images/hero.png"
              alt="Hero Image"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="dark:shadow-primary/20 rounded-2xl object-cover shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
