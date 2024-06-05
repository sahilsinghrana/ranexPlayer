import NotFound from "../pages/NotFound";

import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <NotFound />,
      async lazy() {
        const Component = await import("../components/Layout");
        return {Component: Component.default};
      },
      children: [
        {
          path: "/",
          async lazy() {
            const Component = await import("../pages/Home/index.jsx");
            return {Component: Component.default};
          },
        },
        {
          path: "/now-playing",
          async lazy() {
            const Component = await import("../pages/NowPlaying/index.jsx");
            return {Component: Component.default};
          },
        },
      ],
    },
  ],
  {basename: import.meta.env.BASE_URL}
);

router.displayName = "Router";

export default router;
