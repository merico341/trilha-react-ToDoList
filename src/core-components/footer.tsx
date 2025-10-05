import { NavLink } from "react-router"
import Text from "../components/text"


export default function Footer() {
    return (
        <footer className="my-5 md:my-10">
            <nav className="flex items-center justify-center gap-4">
                <NavLink to="/" className="text-gray-300">
                    <Text>Tarefas</Text>
                </NavLink>
            </nav>
            <nav className="flex items-center justify-center gap-4">
                <NavLink to="/componentes" className="text-gray-300">
                    <Text>componentes</Text>
                </NavLink>
            </nav>
        </footer>
    )
}