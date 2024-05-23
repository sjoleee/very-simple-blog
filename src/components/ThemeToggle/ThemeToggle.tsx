import { ButtonHTMLAttributes, MouseEvent } from "react";

import useTheme from "@/hooks/useTheme";
import cn from "@/utils/cn";
import { MotionProps, m } from "framer-motion";
import Image from "next/image";

export interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  lightImageSrc?: string;
  darkImageSrc?: string;
}

const ThemeToggle = ({
  onClick,
  lightImageSrc,
  darkImageSrc,
  className,
  ...restProps
}: ThemeToggleProps & MotionProps) => {
  const { theme, setTheme } = useTheme();

  const handleButtonToggle = (e: MouseEvent<HTMLButtonElement>) => {
    setTheme(theme === "light" ? "dark" : "light");
    onClick?.(e);
  };

  const isImageButton = !!lightImageSrc && !!darkImageSrc;
  const themeEmoji = theme === "light" ? "🌞" : "🌛";

  return (
    <m.button
      onClick={handleButtonToggle}
      className={cn(
        "text-2xl",
        {
          "relative w-full h-24 overflow-hidden rounded-lg flex justify-center items-center border-[0.5px] border-textColor/50":
            isImageButton,
        },
        className,
      )}
      {...restProps}
    >
      {isImageButton ? (
        <>
          <Image
            src={lightImageSrc}
            alt=""
            width={480}
            height={240}
            className={cn("absolute w-full h-full top-0 left-0 object-cover transition-all", {
              "opacity-0": theme === "dark",
            })}
          />
          <Image
            src={darkImageSrc}
            alt=""
            width={480}
            height={240}
            className={cn("absolute w-full h-full top-0 left-0 object-cover transition-all", {
              "opacity-0": theme === "light",
            })}
          />
        </>
      ) : (
        themeEmoji
      )}
    </m.button>
  );
};

export default ThemeToggle;
