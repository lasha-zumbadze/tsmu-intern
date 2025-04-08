type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostContextType = {
  loadingPosts: boolean;
  page: number;
  error: Error | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  dataPerPage: Post[] | undefined;
};

export type PostContextProviderProps = {
  children: React.ReactNode;
};
