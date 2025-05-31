import Image from "next/image";
import Link from "next/link";

import { MessageSquareMoreIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TCategory } from "@/constants/data";

type CategoryCardProps = {
  category: TCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="group dark:shadow-primary/20 dark:hover:shadow-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-xl dark:shadow-lg">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden md:h-72 lg:h-80">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Card Header */}
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary flex-shrink-0 rounded-full p-2">
            <category.icon className="h-5 w-5" />
          </div>

          <CardTitle className="text-foreground line-clamp-1 text-lg font-semibold md:text-xl">
            {category.title}
          </CardTitle>
        </div>

        <CardDescription className="text-muted-foreground line-clamp-2 text-sm leading-relaxed md:text-base">
          {category.description}
        </CardDescription>
      </CardHeader>
      {/* Card Content */}
      <CardContent className="space-y-4">
        {/* Price Section */}
        <div className="space-y-3">
          <p className="text-primary text-xl font-bold md:text-2xl">
            Mulai dari Rp {category.price}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {category.features.map((feature, index) => (
              <li
                key={index}
                className="text-muted-foreground flex items-start gap-3 text-sm"
              >
                <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            size="lg"
            asChild
            className="w-full transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <MessageSquareMoreIcon className="h-5 w-5" />
              <span>Pesan Sekarang</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default CategoryCard;
