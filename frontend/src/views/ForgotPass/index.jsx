import React, { useLayoutEffect } from 'react'
import * as S from './styles'
import RegisterLoginLayout from "../../layouts/registerLoginLayout"
import ForgotPassForm from "./ForgotPassForm"
import api from "../../functions/api"
import Links from "../components/Links"

const forgotPassLinks = [
  { link: "/register", text: "Cadastrar-se" },
  { link: "/login", text: "Login" },
]

const ForgotPass = ({ history }) => {
  const handleApi = async (values) => {
    const response = await api.post("/auth/recover-password", values)
  }

  return (
    <RegisterLoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <ForgotPassForm handleApiLogin={handleApi} />
          {mobile && <Links mobile={mobile} links={forgotPassLinks} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} links={forgotPassLinks} />
      ]}
    </RegisterLoginLayout>
  )
}

export default ForgotPass
