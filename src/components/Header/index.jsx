import { Input } from "../Input";
import { Profile } from "../Profile";
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi"

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            <Profile />
        </Container>
    )
}