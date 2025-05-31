import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/assets/icon/logo.svg"}
        alt="loremipsum logo"
        width={40}
        height={40}
        className="size-10 cursor-pointer"
      />

      <h1 className="text-primary font-great-vibes text-2xl">Gift Bucket</h1>
    </Link>
  );
};
export default Logo;
