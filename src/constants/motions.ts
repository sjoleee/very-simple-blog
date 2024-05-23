import { Variants } from "framer-motion";

export const opacityVariants: Variants = {
  initial: { opacity: 0 },
  show: { opacity: 1, transition: { opacity: { duration: 0.15 } } },
  exit: { opacity: 0, transition: { opacity: { duration: 0.15 } } },
};

export const heightVariants: Variants = {
  initial: { height: 0 },
  show: { height: "auto", transition: { height: { duration: 0.3 } } },
  exit: { height: 0, transition: { height: { duration: 0.3 } } },
};

export const categoryListVariants: Variants = {
  initial: { opacity: 0, height: 0, width: 0 },
  show: {
    opacity: 1,
    height: "auto",
    width: "120px",
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    width: 0,
  },
};

export const headerVariants: Variants = {
  initial: { height: "2.5rem" },
  open: { height: "auto", transition: { height: { duration: 0.3 } } },
  close: { height: "2.5rem", transition: { height: { duration: 0.3 } } },
};
