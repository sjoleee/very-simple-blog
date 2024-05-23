"use client";

import Badge from "../Badge";
import ImageWithFallback from "../ImageWithFallback";

import { HTMLAttributes } from "react";
import cn from "@/utils/cn";
import convertDate from "@/utils/convertDate";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: string;
  description?: string;
  thumbnail?: string;
  category: string;
  date: string;
}

const Card = ({ className, title, description, thumbnail, category, date }: CardProps) => {
  return (
    <div
      className={cn(
        "group bg-backgroundLight relative rounded-lg w-full tablet:h-48 flex overflow-hidden flex-col tablet:flex-row",
        className,
      )}
    >
      <div
        className={cn(
          "w-full overflow-hidden shrink-0 relative flex aspect-video tablet:w-auto tablet:h-full",
        )}
      >
        <ImageWithFallback
          alt={title}
          src={thumbnail}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover group-hover:scale-110 duration-300 transition-transform"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
        />
      </div>
      <div
        className={cn(
          "relative p-6 flex flex-col gap-4 tablet:gap-8 justify-between bg-backgroundLight overflow-hidden flex-grow",
        )}
      >
        <div className="flex flex-col gap-2">
          <Badge>{category}</Badge>
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                " group-hover:text-primary text-textColor font-semibold overflow-x-hidden text-base whitespace-nowrap break-words text-ellipsis transition-colors",
              )}
            >
              {title}
            </span>
            <p
              className={cn(
                "text-textColor text-sm whitespace-nowrap break-words text-ellipsis overflow-hidden",
              )}
            >
              {description}
            </p>
          </div>
        </div>
        <span className={cn("text-xs font-light text-textColor")}>{convertDate(date)}</span>
      </div>
    </div>
  );
};

export default Card;
