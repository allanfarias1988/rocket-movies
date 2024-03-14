import { Container, Header, ProfileImg, ProfileIcon, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <>
            <Header>
                <div>
                    <Link to="/">
                        <FiArrowLeft /><span>Voltar</span>
                    </Link>
                </div>
            </Header>

            <Container>
                <ProfileImg>
                    <ProfileIcon>
                        <label htmlFor="fileInput">
                            <FiCamera />
                            <Input type="file" id="fileInput" name="fileInput" aria-label="Trocar foto" style={{ display: "none" }} />
                        </label>
                    </ProfileIcon>
                </ProfileImg>
                <Form>
                    <label htmlFor="name">
                        <Input icon={FiUser} type="text" placeholder="Nome" name="name" />
                    </label>
                    <label htmlFor="email" name="email">
                        <Input icon={FiMail} type="email" placeholder="E-mail" name="email" />

                    </label>
                    <label htmlFor="password">
                        <Input icon={FiLock} type="password" placeholder="Senha atual" name="password" />

                    </label>
                    <label htmlFor="newPassword">
                        <Input icon={FiLock} type="password" placeholder="Nova senha" name="newPassword" />
                    </label>
                    <Button title="Salvar" />
                </Form>
            </Container>
        </>
    )
}
