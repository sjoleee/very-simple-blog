"use client";

import { useEffect, useState } from "react";

import { USER_INFORMATIONS } from "@/constants/data";
import cn from "@/utils/cn";
import Image, { ImageProps } from "next/image";

interface ImageWithFallback extends Omit<ImageProps, "src"> {
  src?: string;
}

const ImageWithFallback = ({ alt, src, className, ...restProps }: ImageWithFallback) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      {error || !src ? (
        <div
          className={cn(
            "flex flex-col justify-center items-center px-8 bg-primary w-full h-full",
            className,
          )}
        >
          {USER_INFORMATIONS.mascot && (
            <span className="text-white text-[3rem]">{USER_INFORMATIONS.mascot}</span>
          )}
        </div>
      ) : (
        <Image alt={alt} onError={handleError} src={src} className={className} {...restProps} />
      )}
    </>
  );
};

export default ImageWithFallback;
