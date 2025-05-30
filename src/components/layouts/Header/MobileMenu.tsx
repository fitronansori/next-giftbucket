import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import { AlignJustifyIcon } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustifyIcon className="size-7" />
      </SheetTrigger>
      <SheetContent>
        {/* Agar tidak error */}
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <NavLinks
          className="w-full h-screen flex-col items-center justify-center"
          classNameLink="text-2xl"
        />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
