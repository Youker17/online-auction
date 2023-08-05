// import { Image } from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import image from "../assets/auth/bg.png";


export default function AuthLayout() {
    return (
        <div className="w-screen backdrop-blur-lg h-screen relative flex flex-col justify-center bg-slate-100" >
            <Outlet />
        </div>
    )
}