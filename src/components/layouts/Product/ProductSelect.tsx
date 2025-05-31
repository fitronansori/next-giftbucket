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
    <div>
      <Select defaultValue="all" onValueChange={onCategoryChange}>
        <SelectTrigger className="rounded-full">
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Kategori</SelectLabel>
            {categoriesData.map((category) => (
              <SelectItem key={category.value} value={category.value}>
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
