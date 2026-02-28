import { createBrowserRouter } from "react-router";
import { StudentPanel } from "./components/StudentPanel";
import { AdminPanel } from "./components/AdminPanel";
import { SuperAdminPanel } from "./components/SuperAdminPanel";
import { InstitutionPanel } from "./components/InstitutionPanel";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/student",
    Component: StudentPanel,
  },
  {
    path: "/admin",
    Component: AdminPanel,
  },
  {
    path: "/super-admin",
    Component: SuperAdminPanel,
  },
  {
    path: "/institution",
    Component: InstitutionPanel,
  },
]);