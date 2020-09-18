import React from 'react'
import * as S from './styles'
import ProfitfyLogo from "../../icons/ProfitfyLogo"
import useMobile from '../../hooks/useMobile'
import { Link } from "react-router-dom"
import { Fade } from "react-reveal";

const LoginLayout = ({ children: Children }) => {
  const [mobile] = useMobile(425)

  return (
    <S.Container>
      <ProfitfyLogo />
      <Fade bottom distance="50px">
        <div id="animation-wrapper">
          <Children mobile={mobile} />
        </div>
      </Fade>
    </S.Container>
  )
}

export default LoginLayout
