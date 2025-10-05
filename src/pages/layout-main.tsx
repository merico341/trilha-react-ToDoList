import { Outlet} from "react-router";
import Header from "../core-components/header";
import Footer from "../core-components/footer";
import MainContent from "../core-components/main-component";

export default function LayoutMain() {
    return <>
        <Header />
        <MainContent>
            <Outlet />
        </MainContent>
        <Footer />
    </>
}