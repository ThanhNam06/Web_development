import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { SeoManager } from "./seo/SeoManager";

function RootWithSeo() {
  return (
    <>
      <SeoManager />
      <Root />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootWithSeo,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
]);