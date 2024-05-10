import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import avatarDefault from "../../assets/avatar-default.svg";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

export function Profile() {
    const { SignOut, getAvatar } = useAuth();
    
    const [avatar, setAvatar] = useState(null);
    const user = JSON.parse(localStorage.getItem("@rocketmovie:user"));
    
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

    const avatarURL = user.avatar ? avatar: avatarDefault;

    return (
        <Container>
            <div>
                <strong>{user.name}</strong>
                <Link to="/" onClick={SignOut}>
                    <p>Sair</p>
                </Link>
            </div>
            <Link to="/profile">
                <img src={ avatarURL } alt="Avatar do usuário" />
            </Link>
        </Container>
    );
}