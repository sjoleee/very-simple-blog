import { m, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      className="h-0.5 tablet:h-1 bg-primary fixed top-0 left-0 origin-[0%] w-full z-10"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
