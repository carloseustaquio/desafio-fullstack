import React from 'react'
import * as S from './styles'
import LoginLayout from "../../layouts/loginLayout"
import RegisterUserForm from "./RegisterUserForm"
import Links from "../components/Links"

const registerLinks = [
  { link: "/", text: "Esqueceu a senha?" },
  { link: "/login", text: "Entrar" },
]

const RegisterUser = () => {
  return (
    <LoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <RegisterUserForm />
          {mobile && <Links mobile={mobile} links={registerLinks} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} links={registerLinks} />
      ]}
    </LoginLayout>
  )
}

export default RegisterUser
