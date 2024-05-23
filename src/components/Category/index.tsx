"use client";

import { CATEGORY_ICONS } from "@/constants/data";
import cn from "@/utils/cn";
import getCategories from "@/utils/getCategories";
import { useParams, useRouter } from "next/navigation";

interface CategoryProps {
  onCategoryItemClick?: () => void | Promise<void>;
}

const Category = ({ onCategoryItemClick }: CategoryProps) => {
  const categories = getCategories();
  const params = useParams();
  const router = useRouter();

  const handleCategoryClick = (category?: string) => async () => {
    await onCategoryItemClick?.();

    if (!category) {
      router.push("/");
      return;
    }

    router.push(`/${category}`);
  };

  return (
    <ul className="flex flex-col w-full gap-1">
      <li>
        <button
          type="button"
          onClick={handleCategoryClick()}
          className={cn(
            "flex items-center gap-2 text-textColor text-sm transition-all w-full text-left py-2 px-4 rounded-lg desktop:border-none hover:bg-textColor/5",
          )}
        >
          {!!CATEGORY_ICONS["All"] && <span>{CATEGORY_ICONS["All"]}</span>}
          <span className="font-medium">All</span>
        </button>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <button
            type="button"
            onClick={handleCategoryClick(category)}
            className={cn(
              "flex items-center gap-2 text-textColor text-sm transition-all w-full text-left py-2 px-4 rounded-lg desktop:border-none tablet:hover:bg-textColor/5",
              {
                "bg-textColor/5": params.category === category,
              },
            )}
          >
            {!!CATEGORY_ICONS[category] && <span>{CATEGORY_ICONS[category]}</span>}
            <span className="font-medium">{category}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
