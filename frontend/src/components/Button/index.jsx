import React from 'react'
import * as S from './styles'

const Button = ({ children, ...props }) => {
  return (
    <S.Button {...props}>
      {children}
    </S.Button>
  )
}

export default Button
