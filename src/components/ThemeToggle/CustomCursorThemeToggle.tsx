import { ThemeToggleProps } from "./ThemeToggle";

import { MouseEvent, useEffect, useRef, useState } from "react";
import useTheme from "@/hooks/useTheme";
import cn from "@/utils/cn";
import { AnimatePresence, MotionProps, m, useMotionValue } from "framer-motion";
import Image from "next/image";

const CustomCursorThemeToggle = ({
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLButtonElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (rect) {
      const scrollX = window.scrollX;

      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + 20);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const isImageButton = !!lightImageSrc && !!darkImageSrc;
  const themeEmoji = theme === "light" ? "🌞" : "🌛";

  return (
    <m.button
      ref={ref}
      onClick={handleButtonToggle}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className={cn(
        "text-2xl",
        {
          "relative w-full h-24 rounded-lg flex justify-center items-center border-[0.5px] border-textColor/20 shrink-0":
            isImageButton,
        },
        className,
      )}
      aria-label="theme toggle button"
      {...restProps}
    >
      <AnimatePresence>
        {isInside && (
          <m.div
            className="rounded-full top-4 bg-backgroundLight/10 border-[0.5px] border-textColor/50 backdrop-blur-sm absolute z-50 whitespace-nowrap text-xs px-2 py-1"
            style={{
              top: y,
              left: x,
              pointerEvents: "none",
            }}
            initial={{
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
          >
            {`Click for ${theme === "light" ? "Dark" : "Light"}Mode`}
          </m.div>
        )}
      </AnimatePresence>
      {isImageButton ? (
        <>
          <Image
            src={lightImageSrc}
            alt=""
            width={480}
            height={240}
            className={cn(
              "absolute w-full h-full top-0 left-0 object-cover transition-all rounded-lg ",
              {
                "opacity-0": theme === "dark",
              },
            )}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          />
          <Image
            src={darkImageSrc}
            alt=""
            width={480}
            height={240}
            className={cn(
              "absolute w-full h-full top-0 left-0 object-cover transition-all rounded-lg ",
              {
                "opacity-0": theme === "light",
              },
            )}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          />
        </>
      ) : (
        themeEmoji
      )}
    </m.button>
  );
};

export default CustomCursorThemeToggle;
