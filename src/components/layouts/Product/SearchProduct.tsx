import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type SearchProductProps = {
  onSearchChange: (value: string) => void;
};

const SearchProduct = ({ onSearchChange }: SearchProductProps) => {
  const handle_search_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <form className="w-full min-w-[250px] sm:w-auto">
      <div className="relative flex items-center rounded-md border border-input bg-background transition-colors hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <div className="flex items-center justify-center pl-3">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </div>

        <Input
          type="text"
          placeholder="Cari produk..."
          className="border-0 bg-transparent shadow-none focus-visible:ring-0"
          onChange={handle_search_change}
        />
      </div>
    </form>
  );
};
export default SearchProduct;
