import React, { useLayoutEffect } from 'react'
import * as S from './styles'
import RegisterLoginLayout from "../../layouts/registerLoginLayout"
import LoginForm from "./LoginForm"
import api from "../../functions/api"
import Links from "../components/Links"

const loginLinks = [
  { link: "/", text: "Esqueceu a senha?" },
  { link: "/", text: "Cadastrar-se" },
]

const RegisterUser = ({ history }) => {
  const handleApiLogin = async (values) => {
    const response = await api.post("/auth", values)
    saveUserToLocalStorage(response.data)
    history.push("/app")
  }

  const saveUserToLocalStorage = ({ token, name, email }) => {
    localStorage.setItem("profitfy_token", token);
    localStorage.setItem("profitfy_user", JSON.stringify({ name, email }));
  };

  return (
    <RegisterLoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <LoginForm handleApiLogin={handleApiLogin} />
          {mobile && <Links mobile={mobile} links={loginLinks} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} links={loginLinks} />
      ]}
    </RegisterLoginLayout>
  )
}

export default RegisterUser
