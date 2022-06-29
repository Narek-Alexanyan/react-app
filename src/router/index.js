import About from "../views/About";
import Posts from "../views/Posts";
import PostIdPage from "../views/PostIdPage";
import NotFound from "../views/NotFound";
import Login from "../views/Login";

export const privateRoutes = [
  {
    path: "/about",
    component: <About />,
    exact: true,
  },
  {
    path: "/posts",
    component: <Posts />,
    exact: true,
  },
  {
    path: "/posts/:postId",
    component: <PostIdPage />,
    exact: true,
  },
  {
    path: "*",
    component: <NotFound />,
    exact: false,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
];
