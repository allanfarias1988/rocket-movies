import { Link } from "react-router-dom";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth"

export function Profile() {
    const { SignOut } = useAuth()
    return (
        <Container>
            <div>
                <strong>Allan Farias</strong>
                <Link to="/" onClick={SignOut}>
                    <p>Sair</p>
                </Link>
            </div>
            <Link to="/profile">
                <img src="https://github.com/allanfarias1988.png" alt="Foto perfil do usuário" />
            </Link>
        </Container>
    )
}