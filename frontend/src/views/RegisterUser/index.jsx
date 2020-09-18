import React from 'react'
import * as S from './styles'
import { Link } from "react-router-dom"
import LoginLayout from "../../layouts/loginLayout"
import RegisterUserForm from "./components/RegisterUserForm"

const Links = ({ mobile }) => (
  <S.LinksWrapper mobile={mobile}>
    <Link to="/">Esqueceu sua senha?</Link>
    <Link to="/login">Entrar</Link>
  </S.LinksWrapper>
)

const RegisterUser = () => {
  return (
    <LoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <RegisterUserForm />
          {mobile && <Links mobile={mobile} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} />
      ]}
    </LoginLayout>
  )
}

export default RegisterUser
