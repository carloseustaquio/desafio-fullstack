import React from 'react'
import * as S from './styles'
import RegisterLoginLayout from "../../layouts/registerLoginLayout"
import RegisterUserForm from "./RegisterUserForm"
import Links from "../components/Links"
import api from "../../functions/api"

const registerLinks = [
  { link: "/", text: "Esqueceu a senha?" },
  { link: "/login", text: "Entrar" },
]

const RegisterUser = ({ history }) => {
  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/user", values)
      history.push("/login")
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <RegisterLoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <RegisterUserForm handleSubmit={handleSubmit} />
          {mobile && <Links mobile={mobile} links={registerLinks} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} links={registerLinks} />
      ]}
    </RegisterLoginLayout>
  )
}

export default RegisterUser
