import React from 'react'
import * as S from "./styles"
import { Formik, Field, Form } from "formik";
// import api from "../../../../functions/api"

import TextInput from "../../../components/TextInput"
import ErrorMessage from "../../../components/ErrorMessage"
import Button from "../../../components/Button"

import UserIcon from "../../../icons/UserIcon"
import LockIcon from "../../../icons/LockIcon"
import PaperPlaneIcon from '../../../icons/PaperPlaneIcon';
import LoadingIcon from '../../../icons/LoadingIcon';

import validationSchema from './validationSchema';

const LoginForm = () => {
  const handleSubmit = async (values) => {
    try {
      // const response = await api.post("/user", values)
      await new Promise(r => setTimeout(r, 3000))
      // console.log(response)
    } catch (error) {
      console.log(error.response)
    }
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
                <ErrorMessage name="email" />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  icon={() => <LockIcon />}
                  placeholder="Senha"
                  as={TextInput}
                />
                <ErrorMessage name="password" />
              </div>
            </S.FormInputsGrid>
            <S.SubmitBtnWrapper>
              <Button type="submit">
                {isSubmitting ? <LoadingIcon /> : <PaperPlaneIcon />}
                Enviar
              </Button>
            </S.SubmitBtnWrapper>
          </Form>
        )}
      </Formik>
    </S.Container>
  )
}

export default LoginForm
