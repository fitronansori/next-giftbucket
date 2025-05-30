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
    <Card className="pt-0 dark:shadow-lg dark:shadow-primary gap-4">
      <div className="relative w-full h-80">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.title}
          fill
          className="size-full object-cover rounded-t-xl"
        />
      </div>

      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <category.icon />
          </div>

          <CardTitle className="text-xl font-semibold dark:text-white">
            {category.title}
          </CardTitle>
        </div>

        <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
          {category.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <div className="mb-4">
          <p className="text-2xl font-bold text-primary mb-3">
            Mulai dari Rp {category.price}
          </p>

          <ul className="space-y-2">
            {category.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <Button size={"lg"} asChild>
            <Link href={"/"} className="w-full">
              <MessageSquareMoreIcon className="size-5" /> Pesan Sekarang
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default CategoryCard;
