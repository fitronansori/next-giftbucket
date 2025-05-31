import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categoriesData } from "@/constants/data";

type ProductSelectProps = {
  onCategoryChange: (value: string) => void;
};

const ProductSelect = ({ onCategoryChange }: ProductSelectProps) => {
  return (
    <div className="w-full min-w-[200px] sm:w-auto">
      <Select defaultValue="all" onValueChange={onCategoryChange}>
        <SelectTrigger className="border-input bg-background hover:border-primary focus:border-primary focus:ring-primary/20 rounded-md transition-colors focus:ring-2">
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
          <SelectGroup>
            <SelectLabel className="text-muted-foreground font-medium">
              Kategori
            </SelectLabel>
            {categoriesData.map(category => (
              <SelectItem
                key={category.value}
                value={category.value}
                className="hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors"
              >
                {category.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProductSelect;
