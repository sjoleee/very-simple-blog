import { HTMLAttributes } from "react";
import cn from "@/utils/cn";

const Badge = ({ className, children, ...restProps }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center text-xs rounded-full w-fit px-2 h-5 text-textColor shrink-0 bg-textColor/10",
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Badge;
