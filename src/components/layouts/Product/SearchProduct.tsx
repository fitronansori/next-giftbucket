import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type SearchProductProps = {
  onSearchChange: (value: string) => void;
};

const SearchProduct = ({ onSearchChange }: SearchProductProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <form>
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
        <SearchIcon className="size-5 text-muted-foreground" />

        <Input
          type="text"
          placeholder="Search produk..."
          className="border-0 focus-visible:ring-0 shadow-none"
          onChange={handleSearchChange}
        />
      </div>
    </form>
  );
};
export default SearchProduct;
