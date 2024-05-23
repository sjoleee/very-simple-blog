import { Post } from "contentlayer/generated";

const sortDatesDescending = (posts: Post[]) => {
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });
};

export default sortDatesDescending;
