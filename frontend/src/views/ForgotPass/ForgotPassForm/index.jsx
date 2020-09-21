import React, { useRef, useState } from 'react'
import * as S from "./styles"
import { Formik, Field, Form } from "formik";
import HeadShake from "react-reveal/HeadShake"

import TextInput from "../../../components/TextInput"
import { ErrorMessage, FormikCustomErrorMessage } from "../../../components/ErrorMessage"
import Button from "../../../components/Button"

import UserIcon from "../../../icons/UserIcon"
import PaperPlaneIcon from '../../../icons/PaperPlaneIcon';
import LoadingIcon from '../../../icons/LoadingIcon';

import validationSchema from './validationSchema';

const ForgotPassForm = ({ handleApiLogin }) => {
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
    setSubmitError("Ocorreu um erro ao tentar fazer o login.")
    setTimeout(() => { setSubmitError(null) }, 2000)
  }

  return (
    <S.Container>
      <S.TextTop>Informe seu email</S.TextTop>
      <Formik
        initialValues={{
          email: "",
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

export default ForgotPassForm
