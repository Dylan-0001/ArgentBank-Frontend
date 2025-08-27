import {Header} from "./Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer.tsx";

export const Layout = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    );
}