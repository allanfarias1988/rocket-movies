import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Films } from "../../components/Films";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

export function Home() {
    return (
        <Container>
            <Header />

            <section>
                <h2>Meus filmes</h2>

                <Link to="/new">
                    <Button title="Adicionar Filmes" icon={FiPlus} />
                </Link>

            </section>

            <main>
                <Films />
                <Films />
                <Films />
            </main>
        </Container>
    )
}