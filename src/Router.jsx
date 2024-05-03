import { Navigate, Route, Routes } from "react-router-dom";

import AuthProvider from "./features/auth/AuthProvider";
import Login from "./features/auth/Login";
import AboutMeBrand from "./features/dashboard/about_me/AboutMeBrand";
import AboutMeDescription from "./features/dashboard/about_me/AboutMeDescription";
import SocialLinks from "./features/dashboard/about_me/SocialLinks";
import WhatIdoAndAm from "./features/dashboard/about_me/WhatIdoAndAm";
import DisplayExperiences from "./features/dashboard/display/DisplayExperiences";
import DisplayRegular from "./features/dashboard/display/DisplayRegular";
import DashboardLayout from "./features/dashboard/header/DashboardLayout";
import EditProject from "./features/dashboard/projects/EditProject";
import NewProject from "./features/dashboard/projects/NewProject";
import Project from "./features/dashboard/projects/Project";
import User from "./features/dashboard/user/User";
import AboutMe from "./pages/AboutMe";
import CategoryDisplay from "./pages/CategoryDisplay";
import Certifications from "./pages/Certifications";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";

function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <DashboardLayout />
            </AuthProvider>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard/about-me" />} />
          <Route path="/about-me" element={<AboutMe />}>
            <Route
              path="/about-me"
              element={<Navigate to="/dashboard/about-me/description" />}
            />
            <Route path="description" element={<AboutMeDescription />} />
            <Route path="what-i-do" element={<WhatIdoAndAm />} />
            <Route path="social" element={<SocialLinks />} />
            <Route path="brand" element={<AboutMeBrand />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/projects/edit/:projectId" element={<EditProject />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="user" element={<User />} />
          <Route path="/display" element={<CategoryDisplay />}>
            <Route
              path="/display"
              element={<Navigate to="/dashboard/display/regular" replace />}
            />
            <Route path="regular" element={<DisplayRegular />} />
            <Route path="experiences" element={<DisplayExperiences />} />
          </Route>
          <Route path="certifications" element={<Certifications />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
