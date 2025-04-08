import { createContext, useContext, useState } from "react";
import usePosts from "../hooks/usePosts";
import {
  PostContextProviderProps,
  PostContextType,
} from "../types/postContextType";

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostContextProvider({ children }: PostContextProviderProps) {
  const { loadingPosts, posts, error } = usePosts();
  const [page, setPage] = useState(1);

  const ITEM_PER_PAGE = 8;
  const totalPage = Math.ceil(posts?.length / ITEM_PER_PAGE);
  const startIndex = (page - 1) * ITEM_PER_PAGE;
  const dataPerPage = posts?.slice(startIndex, startIndex + ITEM_PER_PAGE);

  return (
    <PostContext.Provider
      value={{ loadingPosts, page, error, setPage, totalPage, dataPerPage }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePostContext() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePostContext must be used within a PostContextProvider");
  }
  return context;
}
