import React, { useRef, useState } from 'react'
import * as S from "./styles"
import { Formik, Field, Form } from "formik";
import HeadShake from "react-reveal/HeadShake"

import TextInput from "../../../components/TextInput"
import { ErrorMessage, FormikCustomErrorMessage } from "../../../components/ErrorMessage"
import Button from "../../../components/Button"

import UserIcon from "../../../icons/UserIcon"
import LockIcon from "../../../icons/LockIcon"
import PaperPlaneIcon from '../../../icons/PaperPlaneIcon';
import LoadingIcon from '../../../icons/LoadingIcon';

import validationSchema from './validationSchema';

const LoginForm = ({ handleApiLogin }) => {
  const [submitError, setSubmitError] = useState(null)
  const submitErrorCount = useRef(0)

  const handleSubmit = async (values) => {
    try {
      await handleApiLogin(values)
    }
    catch (error) {
      handleSubmitError(error)
      console.log(error.response)
    }
  }

  const handleSubmitError = (error) => {
    submitErrorCount.current++
    handleErrorMessage(error.response.status)
    setTimeout(() => { setSubmitError(null) }, 2000)
  }

  const handleErrorMessage = (status) => {
    if ([422, 400].includes(status)) setSubmitError("Email e/ou senha inválidos.")
    else setSubmitError("Ocorreu um erro ao tentar fazer o login.")
  }

  return (
    <S.Container>
      <S.TextTop>Informe seus dados</S.TextTop>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, action) => {
          action.setSubmitting(true);
          await handleSubmit(values)
          action.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <S.FormInputsGrid>
              <div>
                <Field
                  name="email"
                  type="text"
                  icon={() => <UserIcon />}
                  placeholder="Email Pessoal"
                  as={TextInput}
                />
                <FormikCustomErrorMessage name="email" />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  icon={() => <LockIcon />}
                  placeholder="Senha"
                  as={TextInput}
                />
                <FormikCustomErrorMessage name="password" />
              </div>
            </S.FormInputsGrid>
            <S.SubmitBtnWrapper>
              <HeadShake spy={submitErrorCount.current}>
                <Button type="submit" color={submitError && "red"}>
                  {isSubmitting ? <LoadingIcon /> : <PaperPlaneIcon />}
                Enviar
              </Button>
              </HeadShake>
              <ErrorMessage>{submitError}</ErrorMessage>
            </S.SubmitBtnWrapper>
          </Form>
        )}
      </Formik>
    </S.Container>
  )
}

export default LoginForm
