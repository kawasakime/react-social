import React from "react";
import { AllPosts, IPost } from "../@types/types";

export function usePosts(posts: AllPosts, id: string) {
  const [data, setData] = React.useState<IPost[]>([]);

  React.useEffect(() => {
    setData(!!Object.keys(posts).length ? posts[`${id}`] : []);
  }, [posts]);

  return data;
}
