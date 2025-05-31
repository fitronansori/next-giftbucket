import { cn } from "@/lib/utils";

type TitleProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  subClassName?: string;
};

const Title = ({ title, subtitle, className, subClassName }: TitleProps) => {
  return (
    <div className={cn("text-center space-y-2", className)}>
      <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>

      {subtitle && (
        <p
          className={cn(
            "text-sm md:text-base text-muted-foreground",
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
