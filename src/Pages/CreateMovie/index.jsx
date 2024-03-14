import { Container } from "./styles";
import { Header } from "../../components/Header"
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function CreateMovie() {
    return (
        <>
            <Container>
                <Header />
                <main>
                    <Link to="/">
                        <FiArrowLeft />
                        <a href="#">Voltar</a>
                    </Link>

                    <h1>Novo Filme</h1>

                    <div className="inputWrapper">
                        <Input type="text" placeholder="Título" />
                        <Input type="text" placeholder="Sua nota(de 0 a 5)" />
                    </div>

                    <textarea placeholder="Observações"></textarea>

                    <h3>Marcadores</h3>
                    <div className="tags">
                        <div>
                            <Tag title="React" icon={IoMdClose} />
                        </div>
                        <div className="newHighLither">
                            <Tag title="Novo Marcador" icon={FiPlus} />
                        </div>
                    </div>
                    <div className="buttons">
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </main>
            </Container>
        </>
    )
}