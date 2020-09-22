import React from 'react'
import { Button } from '../../components/Button/styles'
import TemporaryLayout from '../../layouts/registerLoginLayout'
import * as S from "./styles"

const Welcome = () => {
  const handleLogout = () => {
    localStorage.removeItem("profitfy_token");
    localStorage.removeItem("profitfy_user");
    window.location.reload()
  }

  return (
    <TemporaryLayout>
      {({ mobile }) => (
        <S.Container>
          <h2>Hello, welcome!</h2>
          <Button onClick={handleLogout} color="grey">Logout</Button>
        </S.Container>
      )}
    </TemporaryLayout>
  )
}

export default Welcome
