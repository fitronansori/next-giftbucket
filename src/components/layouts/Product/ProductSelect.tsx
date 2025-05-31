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
        <SelectTrigger className="rounded-md border-input bg-background transition-colors hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20">
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
          <SelectGroup>
            <SelectLabel className="font-medium text-muted-foreground">
              Kategori
            </SelectLabel>
            {categoriesData.map((category) => (
              <SelectItem
                key={category.value}
                value={category.value}
                className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
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
