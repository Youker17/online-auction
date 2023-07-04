import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
    return (
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <Navbar authenticated={false}/>
        <Outlet/>
        {/* <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/>
        <Outlet/> */}
        </div>
    )
}