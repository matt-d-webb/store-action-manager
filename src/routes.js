import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./Overview")),
    exact: true,
  },
  {
    path: "/tasks/:taskId",
    component: lazy(() => import("./TaskView")),
    exact: true,
  },
  {
    path: "/tasks/pdf/:attachmentId",
    component: lazy(() => import("./PDFViewer")),
    exact: true,
  }
];

export default routes;