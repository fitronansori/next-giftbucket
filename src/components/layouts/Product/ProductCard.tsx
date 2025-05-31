import Image from "next/image";
import Link from "next/link";

import { MessageSquareMoreIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TProduct } from "@/constants/data";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const format_price = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="dark:shadow-primary gap-4 pt-0 shadow-md transition-all duration-300 hover:shadow-lg dark:shadow-lg dark:hover:shadow-xl">
      {/* Product Image Section */}
      <div className="relative h-80 w-full">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-t-xl object-cover"
        />

        {/* Badge */}
        <Badge
          variant={product.badgeVariant}
          className="absolute top-3 left-3 z-10"
        >
          {product.badge}
        </Badge>

        {/* Discount Badge */}
        {product.discount && (
          <Badge variant="destructive" className="absolute top-3 right-3 z-10">
            -{product.discount}%
          </Badge>
        )}

        {/* Stock Status Overlay */}
        {!product.inStock && (
          <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center rounded-t-xl bg-black">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              Stok Habis
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="space-y-3">
        {/* Category and Rating Row */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>

          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>

        {/* Product Title and Description */}
        <div className="space-y-2">
          <CardTitle className="line-clamp-2 text-lg font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2 text-sm">
            {product.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price Section */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl font-bold">
              {format_price(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                {format_price(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button
          size="lg"
          disabled={!product.inStock}
          asChild
          className="w-full"
        >
          <Link href="/" className="flex items-center gap-2">
            <MessageSquareMoreIcon className="h-5 w-5" />
            Pesan Sekarang
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
