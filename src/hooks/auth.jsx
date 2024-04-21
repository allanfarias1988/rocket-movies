import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function SignIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

      localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovie:token", token);

    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível fazer login. Tente novamente mais tarde!")
      }
    }
  }

  function SignOut() {
    localStorage.removeItem("@rocketmovie:user");
    localStorage.removeItem("@rocketmovie:token");

    setData({});
  }

  async function updateProfile({ user }) {
    try {

      await api.put("/users", { user });
      localStorage.setItem("@rockemovie:user", JSON.stringify(user));
      setData({ user, token: data.token })
      alert("Perfil atualizado!")

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o seu perfil!")
      }

    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovie:token");
    const user = localStorage.getItem("@rocketmovie:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        SignIn,
        SignOut,
        updateProfile,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

