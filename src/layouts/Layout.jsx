import Header from "../components/Header";
import PageTemplate from "../components/PageTemplate";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(<>
        <Header />
        <Outlet />
    </>)
}