"use client";

import Category from "../Category";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MainLogo from "../MainLogo";
import MenuButton from "./MenuButton";

import { useEffect, useState } from "react";
import { headerVariants } from "@/constants/motions";
import { m, useAnimationControls } from "framer-motion";
import cn from "@/utils/cn";
import { USER_INFORMATIONS } from "@/constants/data";
import { Github, Page } from "iconoir-react";

interface MainPageHeaderProps {
  className?: string;
}

const MainPageHeader = ({ className }: MainPageHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimationControls();

  const closeMenu = async () => {
    await controls.start("close");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    isMenuOpen && controls.start("open");
  }, [isMenuOpen, controls]);

  const handleMenuButtonClick = async () => {
    if (isMenuOpen) {
      await closeMenu();
      return;
    }

    setIsMenuOpen((prev) => !prev);
  };

  return (
    <m.header
      className={cn(
        "z-10 fixed top-0 left-0 flex flex-col items-center px-4 w-full bg-backgroundHeavy/50 overflow-hidden border-b-[0.5px] border-textColor/70 backdrop-blur-md max-h-[100dvh] overscroll-none",
        className,
      )}
      variants={headerVariants}
      initial="initial"
      animate={controls}
    >
      <div className="flex items-center justify-between w-full h-10 shrink-0">
        <MainLogo onClick={closeMenu} />
        <div className="flex justify-center items-center h-full desktop:hidden">
          <ThemeToggle className="px-2" />
          <MenuButton open={isMenuOpen} onClick={handleMenuButtonClick} className="px-2" />
        </div>
      </div>
      {isMenuOpen && (
        <nav className="flex flex-col gap-8 py-4 w-full overflow-y-scroll overscroll-none">
          <div className="flex flex-col w-full gap-1">
            <div>
              <span className=" text-textColor/20 font-light text-xs">Categories</span>
              <div className="h-[0.5px] w-full bg-textColor/20" />
            </div>
            <Category onCategoryItemClick={closeMenu} />
          </div>

          <div className="flex gap-4 w-full items-center justify-end">
            {"github" in USER_INFORMATIONS && !!USER_INFORMATIONS["github"] && (
              <a
                href={USER_INFORMATIONS["github"]}
                target="_blank"
                rel="noreferrer"
                className="flex text-xs hover:text-primary transition-colors gap-1 items-center"
                aria-label={`go to ${USER_INFORMATIONS.userName}'s github`}
              >
                <Github />
                Github
              </a>
            )}

            {"resume" in USER_INFORMATIONS && !!USER_INFORMATIONS["resume"] && (
              <a
                href={USER_INFORMATIONS["resume"]}
                target="_blank"
                rel="noreferrer"
                className="flex text-xs hover:text-primary transition-colors gap-1 items-center"
                aria-label={`go to ${USER_INFORMATIONS.userName}'s resume`}
              >
                <Page />
                Resume
              </a>
            )}
          </div>
        </nav>
      )}
    </m.header>
  );
};

export default MainPageHeader;
