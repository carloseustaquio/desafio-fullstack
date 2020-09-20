import React, { useLayoutEffect } from 'react'
import * as S from './styles'
import { Link } from "react-router-dom"
import LoginLayout from "../../layouts/loginLayout"
import LoginForm from "./LoginForm"
import api from "../../functions/api"

const Links = ({ mobile }) => (
  <S.LinksWrapper mobile={mobile}>
    <Link to="/">Esqueceu sua senha?</Link>
    <Link to="/">Cadastrar-se</Link>
  </S.LinksWrapper>
)

const RegisterUser = ({ history }) => {

  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/auth", values)
      saveUserToLocalStorage(response.data)
      history.push("/app")
    } catch (error) {
      console.log(error.response)
    }
  }

  const saveUserToLocalStorage = ({ token, name, email }) => {
    localStorage.setItem("profitfy_token", token);
    localStorage.setItem("profitfy_user", JSON.stringify({ name, email }));
  };

  useLayoutEffect(() =>
    window.scrollTo(0, 0)
    , [])

  return (
    <LoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <LoginForm handleSubmit={handleSubmit} />
          {mobile && <Links mobile={mobile} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} />
      ]}
    </LoginLayout>
  )
}

export default RegisterUser
