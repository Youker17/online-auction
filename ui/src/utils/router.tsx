import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import AuthLayout from "../layouts/AuthLayouts";
import Login from "../pages/auth/Login";
import GlobalLayout from "../layouts/GlobalLayout";
import AccountLayout from "../layouts/AccountLayout";
import Signup from "../pages/auth/Signup";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                path: "/auth",
                element: <AuthLayout />,
                children: [                    //auth
                    {
                        path: "/auth/login",
                        element: <Login />
                    },
                    {
                        path: "/auth/signup",
                        element: <Signup />
                    }
                ]
            },
            {
                path: "/account",
                element: <AccountLayout />,

            }



        ],

    }
])