import { BackgroundImg, Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

export function SinUp() {
    return (
        <Container>
            <div className="formWrapper">
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h3>Crie sua conta</h3>
                </div>
                <Form id="login">
                    <Input icon={FiUser} placeholder="Nome" type="text" />
                    <Input icon={FiMail} placeholder="E-mail" type="email" />
                    <Input icon={FiLock} placeholder="Senha" type="password" />
                    <Link to="/login">
                        <Button title="Cadastrar" />
                    </Link>
                </Form>
                <Link to="/login">
                    <a href="#"> <FiArrowLeft />Voltar para o login</a>
                </Link>
            </div>
            <BackgroundImg />
        </Container>
    )
}