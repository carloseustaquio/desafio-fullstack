import React from 'react'
import * as S from './styles'
import RegisterLoginLayout from "../../layouts/registerLoginLayout"
import RegisterUserForm from "./RegisterUserForm"
import Links from "../components/Links"
import api from "../../functions/api"

const registerLinks = [
  { link: "/forgot-pass", text: "Esqueceu a senha?" },
  { link: "/login", text: "Entrar" },
]

const RegisterUser = ({ history }) => {
  const handleApiRegisterUser = async (values) => {
    const response = await api.post("/user", values)
    console.log(response)
    setTimeout(() => { history.push("/login") }, 2000)
  }

  return (
    <RegisterLoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <RegisterUserForm handleApiRegisterUser={handleApiRegisterUser} />
          {mobile && <Links mobile={mobile} links={registerLinks} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} links={registerLinks} />
      ]}
    </RegisterLoginLayout>
  )
}

export default RegisterUser
