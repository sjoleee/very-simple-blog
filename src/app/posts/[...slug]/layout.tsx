"use client";

import Comments from "@/components/Comments";
import PostPageHeader from "@/components/Header/PostPageHeader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollTop from "@/components/ScrollTop";

const PostLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <ScrollTop />
      <PostPageHeader />
      <div className="relative flex flex-col mx-auto w-full max-w-[768px] px-4 py-16 tablet:px-8 desktop:px-0 tablet:py-12 gap-8">
        <ScrollProgress />

        {children}
        <div className="py-24">
          <Comments />
        </div>
      </div>
    </main>
  );
};

export default PostLayout;
