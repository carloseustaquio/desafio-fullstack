import React from 'react'
import * as S from "./styles"
import { Formik, Field, Form } from "formik";
import api from "../../../../functions/api"

import TextInput from "../../../../components/TextInput"
import ErrorMessage from "../../../../components/ErrorMessage"
import MaskedInput from '../../../../components/MaskedInput';
import Button from "../../components/Button"

import BRFlagIcon from "../../../../icons/BRFlagIcon"
import UserIcon from "../../../../icons/UserIcon"
import UserIcon2 from "../../../../icons/UserIcon2"
import EmailIcon from "../../../../icons/EmailIcon"
import LockIcon from "../../../../icons/LockIcon"

import validationSchema, { removeMask } from './validationSchema';
import PaperPlaneIcon from '../../../../icons/PaperPlaneIcon';
import LoadingIcon from '../../../../icons/LoadingIcon';

const RegisterUserForm = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/user", values)
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <S.Container>
      <S.TextTop>Informe seus dados</S.TextTop>
      <Formik
        initialValues={{
          firstName: "Test",
          secondName: "Two",
          email: "test@two.com",
          phone: "12341234123",
          password: "1234",
          confirmPassword: "1234",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, action) => {
          values.phone = removeMask(values.phone)
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
                  name="firstName"
                  type="text"
                  icon={() => <UserIcon />}
                  placeholder="Nome"
                  as={TextInput}
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <Field
                  name="secondName"
                  type="text"
                  icon={() => <UserIcon2 />}
                  placeholder="Sobrenome"
                  as={TextInput}
                />
                <ErrorMessage name="secondName" />
              </div>
              <div>
                <Field
                  name="email"
                  type="text"
                  icon={() => <EmailIcon />}
                  placeholder="Email Pessoal"
                  as={TextInput}
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <Field
                  name="phone"
                  type="text"
                  icon={() => <BRFlagIcon />}
                  placeholder="Telefone"
                  mask="(99) 99999-9999"
                  as={MaskedInput}
                />
                <ErrorMessage name="phone" />
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
              <div>
                <Field
                  name="confirmPassword"
                  type="password"
                  icon={() => <LockIcon />}
                  placeholder="Confirmar Senha"
                  as={TextInput}
                />
                <ErrorMessage name="confirmPassword" />
              </div>

            </S.FormInputsGrid>
            <S.TermsAndSubmitBtn>
              <div>
                Ao se cadastrar você automaticamente concorda com nossos
                <span>&nbsp;Termos de Uso</span>
              </div>
              <Button type="submit">
                {isSubmitting ? <LoadingIcon /> : <PaperPlaneIcon />}
                Enviar
              </Button>
            </S.TermsAndSubmitBtn>
          </Form>
        )}
      </Formik>
    </S.Container>
  )
}

export default RegisterUserForm
