import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Profile() {
    return (
        <Container>
            <div>
                <strong>Allan Farias</strong>
                <Link to="/login">
                    <p>Sair</p>
                </Link>
            </div>
            <Link to="/profile">
                <img src="https://github.com/allanfarias1988.png" alt="Foto perfil do usuário" />
            </Link>
        </Container>
    )
}