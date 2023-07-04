import { createBrowserRouter } from "react-router-dom";
import Landing from "../views/Landing";
import HomeLayout from "../layouts/HomeLayout";
import About from "../views/About";
import Search from "../views/Search";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout/>,
        children: [
            {
                path: "/",
                element: <Landing/>
            },
            {
                path: "/search",
                element: <Search/>
            },
            {
                path: "/about",
                element: <About/>
            }

        ]
    }
])