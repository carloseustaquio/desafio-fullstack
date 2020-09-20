import React from 'react'
import { Link } from "react-router-dom"
import * as S from './styles'

const Links = ({ mobile, links }) => {
  const [first, second] = links

  return (
    <S.LinksWrapper mobile={mobile} >
      <Link to={first.link}>{first.text}</Link>
      <Link to={second.link}>{second.text}</Link>
    </S.LinksWrapper >
  )
}


export default Links
