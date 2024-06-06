import { USER_INFORMATIONS } from "@/constants/data";
import getCategories from "@/utils/getCategories";
import sortDatesDescending from "@/utils/sortDatesDescending";
import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const posts: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${USER_INFORMATIONS.domain}/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
    changeFrequency: "weekly",
  }));

  const categories: MetadataRoute.Sitemap = getCategories().map((category) => {
    const currentPost = sortDatesDescending(allPosts).find((post) => post.category === category);

    if (!currentPost) throw new Error("카테고리와 매칭되는 글이 없습니다.");

    return {
      url: `${USER_INFORMATIONS.domain}/${category}`,
      lastModified: new Date(currentPost.date).toISOString().split("T")[0],
      changeFrequency: "monthly",
    };
  });

  return [
    {
      url: USER_INFORMATIONS.domain,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 1,
    },
    ...posts,
    ...categories,
  ];
};

export default sitemap;
