import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TPricingPlan } from "@/constants/data";
import { CheckIcon, MessageSquareMoreIcon } from "lucide-react";
import Link from "next/link";

type PriceCardProps = {
  pricing_plan: TPricingPlan;
};

const PriceCard = ({ pricing_plan }: PriceCardProps) => {
  const format_price = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      className={`dark:shadow-lg gap-4 relative ${
        pricing_plan.popular
          ? "border-primary dark:shadow-primary scale-105"
          : "dark:shadow-primary"
      }`}
    >
      <CardHeader className="text-center">
        <div className="mb-4">
          {pricing_plan.badge && (
            <Badge variant={pricing_plan.badge_variant} className="mb-3">
              {pricing_plan.badge}
            </Badge>
          )}

          <CardTitle className="text-2xl font-bold mb-2">
            {pricing_plan.name}
          </CardTitle>

          <div className="mb-3">
            <span className="text-4xl font-bold text-primary">
              {format_price(pricing_plan.price)}
            </span>
            <span className="text-muted-foreground text-sm ml-1">/paket</span>
          </div>

          <CardDescription className="text-muted-foreground leading-relaxed">
            {pricing_plan.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <ul className="space-y-3">
            {pricing_plan.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckIcon className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          size="lg"
          className={`w-full ${
            pricing_plan.popular ? "bg-primary hover:bg-primary/90" : ""
          }`}
          variant={pricing_plan.popular ? "default" : "outline"}
          asChild
        >
          <Link href="#kontak">
            <MessageSquareMoreIcon className="size-5 mr-2" />
            Pilih Paket
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
