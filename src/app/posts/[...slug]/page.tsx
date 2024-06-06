import Badge from "@/components/Badge";
import Mdx from "@/components/Mdx";
import { USER_INFORMATIONS } from "@/constants/data";
import convertDate from "@/utils/convertDate";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = async (params: PostProps["params"]) => {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
};

export const generateMetadata = async ({ params }: PostProps): Promise<Metadata> => {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: { absolute: post.title },
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${USER_INFORMATIONS.domain}/${post.slug}`,
      images: post.thumbnail ?? "/images/share.png",
    },
  };
};

export const generateStaticParams = async (): Promise<PostProps["params"][]> => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
};

const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-[2.3rem] tablet:text-[3rem] font-extrabold leading-tight break-keep">
              {post.title}
            </h1>
            <div className="flex flex-col items-center gap-2">
              <Badge>{post.category}</Badge>
              <span className="text-sm opacity-50">{convertDate(post.date)}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <Mdx code={post.body.code} />
    </section>
  );
};

export default PostPage;
