import React from 'react'
import * as S from './styles'
import ProfitfyLogo from "../../icons/ProfitfyLogo"
import useMobile from '../../hooks/useMobile'
import { Link } from "react-router-dom"
import { Fade } from "react-reveal";

const RegisterLoginLayout = ({ children: Children }) => {
  const [mobile] = useMobile(425)

  return (
    <S.Container>
      <S.LogoWrapper>
        <ProfitfyLogo mobile={mobile} />
      </S.LogoWrapper>
      <Fade bottom distance="50px">
        <div id="animation-wrapper">
          <Children mobile={mobile} />
        </div>
      </Fade>
    </S.Container>
  )
}

export default RegisterLoginLayout
