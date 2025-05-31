import Link from "next/link";

import { CheckIcon, MessageSquareMoreIcon } from "lucide-react";

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
      className={`relative gap-4 dark:shadow-lg ${
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

          <CardTitle className="mb-2 text-2xl font-bold">
            {pricing_plan.name}
          </CardTitle>

          <div className="mb-3">
            <span className="text-primary text-4xl font-bold">
              {format_price(pricing_plan.price)}
            </span>
            <span className="text-muted-foreground ml-1 text-sm">/paket</span>
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
                <CheckIcon className="text-primary mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
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
            <MessageSquareMoreIcon className="mr-2 size-5" />
            Pilih Paket
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
