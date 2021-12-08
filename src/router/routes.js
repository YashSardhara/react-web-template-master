import Album from "../pages/gallery/Album";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signup/SignUp";
import Counter from "../pages/counter/Counter";

export const menuItem = [
  { path: "/", component: HomePage },
  { path: "/album", component: Album },
  { path: "/signup", component: SignUp },
  { path: "/counter", component: Counter },

  // { component: NotFound },
];
