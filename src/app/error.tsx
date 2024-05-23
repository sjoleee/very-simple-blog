"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col tablet:gap-8 gap-4 mx-auto max-w-[1024px] py-16 items-center justify-center min-h-[100dvh]">
      <h2 className="font-bold tablet:text-2xl text-xl">Something went wrong!😱</h2>
      <Link href="/" className="contents">
        <button
          type="button"
          className=" bg-primary tablet:text-xl tablet:rounded-xl tablet:px-6 tablet:py-4 text-base rounded-lg px-4 py-2 text-white hover:brightness-90 transition-all cursor-pointer active:scale-95"
        >
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default Error;
