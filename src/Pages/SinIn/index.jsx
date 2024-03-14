import { BackgroundImg, Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

export function SinIn() {
    return (
        <Container>
            <div className="formWrapper">
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Faça seu login</h3>
                <Form id="login">
                    <Input icon={FiMail} placeholder="E-mail" type="email" />
                    <Input icon={FiLock} placeholder="Senha" type="password" />
                    <Link to="/">
                        <Button title="Entrar" />
                    </Link>
                </Form>
                <Link to="/register">
                    <a href="#">Criar Conta</a>
                </Link>
            </div>
            <BackgroundImg />
        </Container>
    )
}