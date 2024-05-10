import { useState } from "react";
import { useEffect } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useAuth } from "../../hooks/auth";
import { Container, Form, Header, ProfileIcon, ProfileImg } from "./styles";

function Profile() {
    const { user, updateProfile, getAvatar } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    
    const [avatar, setAvatar] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdateProfile() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
            avatar: avatarFile
        }
        await updateProfile({ user, avatarFile })
    }


    async function handleChangeAvatar(event) {
        const file = event.target.files[0];

        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    

    
  useEffect(() => {


        async function getAvatarAsync(_URL) {
            const avatar  = await getAvatar();
            if(avatar){
                const avatarBlob = new Blob([avatar.data], { type: 'image/jpeg' });
                const avatarURL = URL.createObjectURL(avatarBlob);
              setAvatar(avatarURL)
            }

            
        }
        if (!avatar) {
            getAvatarAsync(URL)
        }

    }, [avatar, getAvatar])

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
                <ProfileImg style={{ backgroundImage: `url(${avatar})` }}>
                    <ProfileIcon>
                        <label htmlFor="fileInput">
                            <FiCamera />
                            <Input
                                type="file"
                                accept="image/jpeg, image/png"
                                id="fileInput"
                                name="fileInput"
                                aria-label="Trocar foto"
                                style={{ display: "none" }}
                                onChange={handleChangeAvatar}

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