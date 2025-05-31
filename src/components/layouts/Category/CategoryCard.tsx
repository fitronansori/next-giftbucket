import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TCategory } from "@/constants/data";
import { MessageSquareMoreIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  category: TCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="pt-0 group overflow-hidden transition-all duration-300 hover:shadow-xl dark:shadow-lg dark:shadow-primary/20 dark:hover:shadow-primary/30">
      {/* Image Container */}
      <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Header */}
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full text-primary">
            <category.icon className="w-5 h-5" />
          </div>

          <CardTitle className="text-lg md:text-xl font-semibold text-foreground line-clamp-1">
            {category.title}
          </CardTitle>
        </div>

        <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
          {category.description}
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="space-y-4">
        {/* Price Section */}
        <div className="space-y-3">
          <p className="text-xl md:text-2xl font-bold text-primary">
            Mulai dari Rp {category.price}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {category.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
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
              <MessageSquareMoreIcon className="w-5 h-5" />
              <span>Pesan Sekarang</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default CategoryCard;
