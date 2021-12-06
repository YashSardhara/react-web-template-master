import Album from "../pages/gallery/Album";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signup/SignUp";
export const menuItem = [
  { path: "/", component: HomePage },
  { path: "/album", component: Album },
  { path: "/signup", component: SignUp },

  // { component: NotFound },
];
