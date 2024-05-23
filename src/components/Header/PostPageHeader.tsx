"use client";

import MainLogo from "../MainLogo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import { useRouter } from "next/navigation";
import cn from "@/utils/cn";
import { ArrowLeft } from "iconoir-react";

interface PostPageHeaderProps {
  className?: string;
}

const PostPageHeader = ({ className }: PostPageHeaderProps) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <nav
      className={cn(
        "z-10 sticky top-0 h-10 w-full flex justify-between items-center px-4 bg-backgroundHeavy/50 border-b-[0.5px] border-textColor/70 backdrop-blur-lg",
        className,
      )}
    >
      <button onClick={handleBackButtonClick}>
        <ArrowLeft />
      </button>
      <MainLogo className="hidden tablet:flex" />
      <ThemeToggle />
    </nav>
  );
};

export default PostPageHeader;
