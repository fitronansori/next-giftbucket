import { cn } from "@/lib/utils";

type TitleProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  subClassName?: string;
};

const Title = ({ title, subtitle, className, subClassName }: TitleProps) => {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <h3 className="text-2xl font-bold md:text-4xl">{title}</h3>

      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-sm md:text-base",
            subClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default Title;
