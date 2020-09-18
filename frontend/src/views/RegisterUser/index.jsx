import React from 'react'
import * as S from './styles'
import ProfitfyLogo from "../../components/ProfitfyLogo"
import useMobile from '../../hooks/useMobile'
import { Link } from "react-router-dom"
import { Fade } from "react-reveal";

const Links = ({ mobile }) => (
  <S.LinksWrapper mobile={mobile}>
    <Link to="/">Esqueceu sua senha?</Link>
    <Link to="/login">Entrar</Link>
  </S.LinksWrapper>
)

const RegisterUser = () => {
  const [mobile] = useMobile(425)

  return (
    <S.Container>
      <ProfitfyLogo />
      <Fade bottom distance="50px">
        <div id="animation-wrapper">
          <S.FormWrapper>
            content here
        {mobile && <Links mobile={mobile} />}
          </S.FormWrapper>
          {!mobile && <Links mobile={mobile} />}
        </div>
      </Fade>
    </S.Container>
  )
}

export default RegisterUser
