"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <></>;
};

export default ScrollTop;
