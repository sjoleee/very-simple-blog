import MainPageHeader from "@/components/Header/MainPageHeader";
import PostListSection from "@/components/PostListSection";

const Home = () => {
  return (
    <main className="w-full mx-auto min-h-[100dvh] h-full flex flex-col">
      <MainPageHeader className="desktop:hidden" />
      <PostListSection />
    </main>
  );
};

export default Home;
