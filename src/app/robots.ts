import { USER_INFORMATIONS } from "@/constants/data";
import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${USER_INFORMATIONS.domain}/sitemap.xml`,
  };
};

export default robots;
