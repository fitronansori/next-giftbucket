import { AlignJustifyIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./NavLinks";

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
          className="h-screen w-full flex-col items-center justify-center"
          class_name_link="text-2xl"
        />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
