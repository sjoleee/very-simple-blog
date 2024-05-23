import { ButtonHTMLAttributes } from "react";

import cn from "@/utils/cn";

interface MenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  open: boolean;
}

const MenuButton = ({ open, onClick, className, ...restProps }: MenuButtonProps) => {
  return (
    <button
      type="button"
      className={cn("flex w-full h-full items-center justify-center", className)}
      onClick={onClick}
      {...restProps}
    >
      <div
        className={cn(
          "flex flex-col justify-between h-[14px] w-[16px] transform transition-all origin-center overflow-hidden",
          { "-rotate-90 -translate-y-[5px] scale-110": open },
        )}
      >
        <div
          className={cn(
            "bg-textColor h-[2px] w-full rounded-sm transform transition-all origin-left",
            {
              "rotate-[45deg] w-[calc(70%-2px)]": open,
            },
          )}
        />
        <div
          className={cn("bg-textColor h-[2px] w-full rounded-sm transform transition-all", {
            "opacity-0 translate-x-10": open,
          })}
        />
        <div
          className={cn(
            "bg-textColor h-[2px] w-full rounded-sm transform transition-all origin-left",
            {
              "-rotate-[45deg] w-[calc(70%-2px)]": open,
            },
          )}
        />
      </div>
    </button>
  );
};

export default MenuButton;
