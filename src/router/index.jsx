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
        {
          path: "/profile",
          async lazy() {
            const Component = await import("../pages/Profile/index.jsx");
            return {Component: Component.default};
          },
        },
      ],
    },
    {
      path: "/login",
      async lazy() {
        const Component = await import("../pages/Login/index.jsx");
        return {Component: Component.default};
      },
    },
    {
      path: "/signup",
      async lazy() {
        const Component = await import("../pages/SignUp/index.jsx");
        return {Component: Component.default};
      },
    },
    {
      path: "/settings",
      errorElement: <NotFound />,
      async lazy() {
        const Component = await import("../pages/Settings/index.jsx");
        return {Component: Component.default};
      },
      children: [
        {
          path: "profile",
          errorElement: <NotFound />,
          async lazy() {
            const Component = await import("../pages/Settings/Profile.jsx");
            return {Component: Component.default};
          },
        },
        {
          path: "cloudIntegrations",
          errorElement: <NotFound />,
          async lazy() {
            const Component = await import(
              "../pages/Settings/CloudIntegrations.jsx"
            );
            return {Component: Component.default};
          },
        },
        {
          path: "account",
          errorElement: <NotFound />,
          async lazy() {
            const Component = await import(
              "../pages/Settings/AccountSettings.jsx"
            );
            return {Component: Component.default};
          },
        },
        {
          path: "",
          errorElement: <NotFound />,
          async lazy() {
            const Component = await import("../pages/Settings/Profile.jsx");
            return {Component: Component.default};
          },
        },
      ],
    },
  ],
  {basename: import.meta.env.VITE_BASE_URL}
);

export default router;
