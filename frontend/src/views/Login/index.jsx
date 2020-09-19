import React, { useLayoutEffect } from 'react'
import * as S from './styles'
import { Link } from "react-router-dom"
import LoginLayout from "../../layouts/loginLayout"
import LoginForm from "./LoginForm"

const Links = ({ mobile }) => (
  <S.LinksWrapper mobile={mobile}>
    <Link to="/">Esqueceu sua senha?</Link>
    <Link to="/">Cadastrar-se</Link>
  </S.LinksWrapper>
)

const RegisterUser = () => {
  useLayoutEffect(() =>
    window.scrollTo(0, 0)
    , [])
  return (
    <LoginLayout>
      {({ mobile }) => [
        <S.FormWrapper>
          <LoginForm />
          {mobile && <Links mobile={mobile} />}
        </S.FormWrapper>,
        !mobile && <Links mobile={mobile} />
      ]}
    </LoginLayout>
  )
}

export default RegisterUser
