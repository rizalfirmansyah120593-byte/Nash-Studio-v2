import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/capsule", // GitHub Pages repo name
        element: <MainLayout />, // Layout wrapper
        children: [
            { path: "", element: <Home /> }, // default page
            { path: "blog", element: <Blog /> },
        ],
    },
]);

export default router;
