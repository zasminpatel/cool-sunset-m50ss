import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import FrontLayout from "./layouts/front";
import AdminLayout from "./layouts/admin";
import AppLayout from "./layouts/app";
import Authenticated from "./components/Authenticated";
import SuspenseLoader from "./components/SuspenseLoader";
// https://stackblitz.com/edit/react-role-based-authorization-example?file=_components%2FPrivateRoute.js
// above link for role based url examples.
const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);
const LoginPage = Loader(lazy(() => import("./pages/auth/Login")));
const RegisterPage = Loader(lazy(() => import("./pages/auth/Register")));

const HomePage = Loader(lazy(() => import("./pages/front/Home")));
const AboutUsPage = Loader(lazy(() => import("./pages/front/AboutUs")));
const CustomeTablePage = Loader(
  lazy(() => import("./pages/front/CustomeTable"))
);
// const HomePage = Loader(
//   lazy(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(import("./pages/front/Home")), 3000);
//     });
//   })
// );
// const AboutUsPage = Loader(
//   lazy(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(import("./pages/front/AboutUs")));
//     });
//   })
// );
const Status404Page = Loader(
  lazy(() => import("./pages/front/Status/Status404"))
);
const StatusComingSoonPage = Loader(
  lazy(() => import("./pages/front/Status/StatusComingSoon"))
);
const StatusAdmin404Page = Loader(
  lazy(() => import("./pages/admin/Status/Status404"))
);
const DashboardPage = Loader(lazy(() => import("./pages/admin/Dashboard")));
const SettingPage = Loader(lazy(() => import("./pages/admin/Setting")));
const ProfilePage = Loader(lazy(() => import("./pages/admin/Profile")));
const UsersPage = Loader(lazy(() => import("./pages/admin/Users/Users")));
const UserPage = Loader(lazy(() => import("./pages/admin/Users/User")));

//const BlogsPage = Loader(lazy(() => import("./pages/admin/Users/User")));
const BlogPage = Loader(lazy(() => import("./pages/admin/Blogs/Blog")));

const routes = [
  {
    path: "app",
    element: (
      <Authenticated>
        <AppLayout />
      </Authenticated>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="/app/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "setting",
        element: <SettingPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "users",
        element: <UsersPage />
      },
      {
        path: "users/add",
        element: <UserPage />
      },
      {
        path: "users/edit/:id",
        element: <UserPage />
      },
      // {
      //   path: "blogs",
      //   element: <BlogsPage />
      // },
      {
        path: "blog",
        element: <BlogPage />
      },
      {
        path: "404",
        element: <StatusAdmin404Page />
      },
      {
        path: "*",
        element: <Navigate to="/app/404" replace />
      }
    ]
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/admin/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "setting",
        element: <SettingPage />
      },
      {
        path: "404",
        element: <StatusAdmin404Page />
      },
      {
        path: "*",
        element: <Navigate to="/admin/404" replace />
      }
    ]
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutUsPage />
      },
      {
        path: "table",
        element: <CustomeTablePage />
      },
      {
        path: "404",
        element: <Status404Page />
      },
      {
        path: "coming-soon",
        element: <StatusComingSoonPage />
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />
      }
    ]
  }
];
export default routes;
