import Container from "../components/container";
import { NavLink, Outlet} from "react-router";

export default function LayoutMain() {
    return <>
        <Container as="header" className="mt-3 md:mt-20">
            Olá mundo - Header
        </Container>
        <main className="mt-4 md:mt-8">
            <Outlet />
        </main>

        <footer className="my-5 md:my-10">
            <nav className="flex items-center justify-center gap-4">
                <NavLink to="/" className="text-gray-300">
                    Tarefas
                </NavLink>
            </nav>
            <nav className="flex items-center justify-center gap-4">
                <NavLink to="/componentes" className="text-gray-300">
                    componentes
                </NavLink>
            </nav>
        </footer>
    </>
}