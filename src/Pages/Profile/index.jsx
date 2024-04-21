import { Container, Header, ProfileImg, ProfileIcon, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function handleUpdateProfile() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({ user })
    }


    return (
        <>
            <Header>
                <div>
                    <Link to="/home">
                        <FiArrowLeft /><span>Voltar</span>
                    </Link>
                </div>
            </Header>

            <Container>
                <ProfileImg>
                    <ProfileIcon>
                        <label htmlFor="fileInput">
                            <FiCamera />
                            <Input
                                type="file"
                                id="fileInput"
                                name="fileInput"
                                aria-label="Trocar foto"
                                style={{ display: "none" }}
                            />
                        </label>
                    </ProfileIcon>
                </ProfileImg>
                <Form>
                    <label htmlFor="name">
                        <Input
                            icon={FiUser}
                            type="text"
                            placeholder="Nome"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="email" name="email">
                        <Input icon={FiMail}
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                    </label>
                    <label htmlFor="password">
                        <Input
                            icon={FiLock}
                            type="password"
                            placeholder="Senha atual"
                            name="password"
                            onChange={e => setPasswordOld(e.target.value)}
                        />

                    </label>
                    <label htmlFor="newPassword">
                        <Input
                            icon={FiLock}
                            type="password"
                            placeholder="Nova senha"
                            name="newPassword"
                            onChange={e => setPasswordNew(e.target.value)}
                        />
                    </label>
                    <Button title="Salvar" onClick={handleUpdateProfile} />
                </Form>
            </Container>
        </>
    )
}

export default Profile;