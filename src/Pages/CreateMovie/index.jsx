import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { Container } from "./styles";

function CreateMovie() {
    return (
        <>
            <Container>
                <Header />
                <main>
                    <Link to="/home">
                        <FiArrowLeft />
                        Voltar
                    </Link>

                    <h1>Novo Filme</h1>

                    <div className="inputWrapper">
                        <Input type="text" placeholder="Título" />
                        <Input type="text" placeholder="Sua nota(de 0 a 5)" />
                    </div>

                    <textarea placeholder="Observações" />

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

export default CreateMovie;