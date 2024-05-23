import MainPageHeader from "@/components/Header/MainPageHeader";
import PostListSection from "@/components/PostListSection";
import getCategories from "@/utils/getCategories";
import { notFound } from "next/navigation";

const Category = ({ params }: { params: { category: string } }) => {
  const categories = getCategories();

  if (!categories.includes(params.category)) {
    notFound();
  }

  return (
    <main className="w-full mx-auto min-h-[100dvh] h-full flex flex-col">
      <MainPageHeader className="desktop:hidden" />
      <PostListSection category={params.category} />
    </main>
  );
};

export default Category;
