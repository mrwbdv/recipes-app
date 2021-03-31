import { HomePage } from "./home/home";
import { AuthPage } from "./auth/auth";
import { NotFoundPage } from "./not-found/not-found";

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/auth",
    exact: true,
    component: AuthPage,
  },
  {
    component: NotFoundPage,
  },
];
