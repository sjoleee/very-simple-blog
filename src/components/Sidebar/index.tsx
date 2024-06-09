"use client";

import Category from "../Category";
import MainLogo from "../MainLogo";
import Search from "../Search";
import CustomCursorThemeToggle from "../ThemeToggle/CustomCursorThemeToggle";

import { USER_INFORMATIONS } from "@/constants/data";
import { Github, Page } from "iconoir-react";

const Sidebar = () => {
  return (
    <aside className="bg-backgroundLight flex flex-col justify-between gap-24 relative h-full rounded-lg py-4 px-6 overscroll-none overflow-y-scroll shrink-0 z-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <MainLogo />
          <CustomCursorThemeToggle
            lightImageSrc="/images/light.png"
            darkImageSrc="/images/dark.png"
          />
          <Search />
        </div>
        <div className="flex flex-col w-full gap-2">
          <span className=" text-textColor font-light text-[0.6rem]">Categories</span>
          <Category />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center gap-8">
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

        <div className="flex flex-col items-center text-[10px] text-textColor/30">
          <span className="whitespace-pre-wrap text-center">{`Copyright 2024. ${USER_INFORMATIONS.userName} All rights reserved.`}</span>
          <a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/very-simple-blog">
            Powered by very-simple-blog
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
