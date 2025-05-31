import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

type SearchProductProps = {
  onSearchChange: (value: string) => void;
};

const SearchProduct = ({ onSearchChange }: SearchProductProps) => {
  const handle_search_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <form className="w-full min-w-[250px] sm:w-auto">
      <div className="border-input bg-background hover:border-primary focus-within:border-primary focus-within:ring-primary/20 relative flex items-center rounded-md border transition-colors focus-within:ring-2">
        <div className="flex items-center justify-center pl-3">
          <SearchIcon className="text-muted-foreground h-5 w-5" />
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
