import { createBrowserRouter } from "react-router";
import { AsideContextProvider } from "../context/AsideContext";
import RootLayout from "../components/layout/RootLayout";
import Home from "../views/Home";
import Faculty from "../views/Faculty";
import { PostContextProvider } from "../context/PostContext";
import { ModalContextProvider } from "../context/ModalContext";
import Posts from "../views/Posts";
import Post from "../views/Post";
import PageNotFound from "../views/PageNotFound";

const routes = [
  {
    element: (
      <AsideContextProvider>
        <RootLayout />
      </AsideContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "faculty",
        element: <Faculty />,
      },
      {
        path: "posts",
        element: (
          <PostContextProvider>
            <ModalContextProvider>
              <Posts />
            </ModalContextProvider>
          </PostContextProvider>
        ),
      },
      {
        path: "posts/:id",
        element: (
          <ModalContextProvider>
            <Post />
          </ModalContextProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export const router = createBrowserRouter(routes);
