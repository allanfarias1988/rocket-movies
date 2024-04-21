import { BackgroundImg, Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api.js"

function SinUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navegate = useNavigate();

    async function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todas as informações!")
        }

        try {
            await api.post("/users", { name, email, password })
            alert("Usuário cadastrado com sucesso!")
            navegate("/")
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message)
            } else {
                alert("Não foi possível cadastrar!")
            }
        }
    }
    return (
        <Container>
            <div className="formWrapper">
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h3>Crie sua conta</h3>
                </div>
                <Form id="login">
                    <Input
                        icon={FiUser}
                        placeholder="Nome"
                        type="text"
                        onChange={event => setName(event.target.value)}
                    />
                    <Input
                        icon={FiMail}
                        placeholder="E-mail"
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input
                        icon={FiLock}
                        placeholder="Senha"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                    />


                    <Button
                        onClick={handleSignUp}
                        title="Cadastrar"
                    />
                </Form>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </div>
            <BackgroundImg />
        </Container>
    )
}

export default SinUp;