"use client";

import { PropsWithChildren } from "react";

import { LazyMotion, domMax } from "framer-motion";

const FramerLazyMotion = ({ children }: PropsWithChildren) => {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
};

export default FramerLazyMotion;
