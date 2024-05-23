"use client";

import useTheme from "@/hooks/useTheme";
import Giscus from "@giscus/react";

const Comments = () => {
  const { theme } = useTheme();

  return (
    // https://giscus.app/ko 를 확인해 주세요
    <Giscus
      repo="수정해/주세요"
      repoId="수정해주세요"
      category="수정해주세요"
      categoryId="수정해주세요"
      id="comments"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="ko"
      loading="eager"
      theme={theme}
    />
  );
};

export default Comments;
