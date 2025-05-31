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
import { MessageSquareMoreIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="pt-0 dark:shadow-lg dark:shadow-primary gap-4">
      <div className="relative w-full h-80">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="size-full object-cover  rounded-t-xl"
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

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Stok Habis
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>

          <div className="flex items-center gap-1">
            <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>

        <CardTitle className="text-lg font-semibold line-clamp-2">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button size={"lg"} disabled={!product.inStock} asChild>
            <Link href={"/"} className="w-full">
              <MessageSquareMoreIcon className="size-5" /> Pesan Sekarang
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
