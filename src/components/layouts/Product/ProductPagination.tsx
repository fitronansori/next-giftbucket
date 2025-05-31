import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ProductPaginationProps = {
  current_page: number;
  total_pages: number;
  on_page_change: (page: number) => void;
};

const ProductPagination = ({
  current_page,
  total_pages,
  on_page_change,
}: ProductPaginationProps) => {
  // Helper function to create page links
  const create_page_link = (page: number, is_active = false) => (
    <PaginationItem key={page}>
      <PaginationLink
        isActive={is_active}
        onClick={() => on_page_change(page)}
        className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );

  // Generate page numbers with ellipsis logic
  const render_page_numbers = () => {
    const pages = [];

    if (total_pages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= total_pages; i++) {
        pages.push(create_page_link(i, i === current_page));
      }
    } else {
      // Always show first page
      pages.push(create_page_link(1, current_page === 1));

      // Determine range around current page
      const start = Math.max(2, current_page - 1);
      const end = Math.min(total_pages - 1, current_page + 1);

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Add pages around current page
      for (let i = start; i <= end; i++) {
        pages.push(create_page_link(i, i === current_page));
      }

      // Add ellipsis before last page if needed
      if (end < total_pages - 1) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Always show last page
      if (total_pages > 1) {
        pages.push(create_page_link(total_pages, current_page === total_pages));
      }
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent className="flex items-center justify-center gap-1">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => current_page > 1 && on_page_change(current_page - 1)}
            className={`cursor-pointer transition-colors ${
              current_page === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary hover:text-primary-foreground"
            }`}
          />
        </PaginationItem>

        {render_page_numbers()}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              current_page < total_pages && on_page_change(current_page + 1)
            }
            className={`cursor-pointer transition-colors ${
              current_page === total_pages
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary hover:text-primary-foreground"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default ProductPagination;
