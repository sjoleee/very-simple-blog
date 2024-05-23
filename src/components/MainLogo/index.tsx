import { ButtonHTMLAttributes, MouseEvent } from "react";

import { USER_INFORMATIONS } from "@/constants/data";
import { useRouter } from "next/navigation";
import cn from "@/utils/cn";

const MainLogo = ({
  onClick,
  className,
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={cn("flex items-center", className)}
      {...restProps}
    >
      <span className="flex h-fit text-2xl font-bold">
        {children ?? (
          <>
            {USER_INFORMATIONS.headerTitle}
            {USER_INFORMATIONS.mascot}
          </>
        )}
      </span>
    </button>
  );
};

export default MainLogo;
