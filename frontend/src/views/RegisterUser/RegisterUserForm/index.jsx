import React, { useRef, useState } from 'react'
import * as S from "./styles"
import { Formik, Field, Form } from "formik";
import HeadShake from "react-reveal/HeadShake"

import TextInput from "../../../components/TextInput"
import { ErrorMessage, FormikCustomErrorMessage } from "../../../components/ErrorMessage"
import MaskedInput from '../../../components/MaskedInput';
import Button from "../../../components/Button"

import BRFlagIcon from "../../../icons/BRFlagIcon"
import UserIcon from "../../../icons/UserIcon"
import UserIcon2 from "../../../icons/UserIcon2"
import EmailIcon from "../../../icons/EmailIcon"
import LockIcon from "../../../icons/LockIcon"

import validationSchema, { removeMask } from './validationSchema';
import PaperPlaneIcon from '../../../icons/PaperPlaneIcon';
import LoadingIcon from '../../../icons/LoadingIcon';
import { useHistory } from 'react-router-dom';
import SuccessIcon from '../../../icons/SuccessIcon';

const RegisterUserForm = ({ handleApiRegisterUser }) => {
  const history = useHistory()
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(null)
  const submitErrorCount = useRef(0)

  const handleSubmit = async (values) => {
    try {
      await handleApiRegisterUser(values)
      setSubmitSuccess(true)
    }
    catch (error) {
      handleSubmitError(error)
      console.log(error.response)
    }
  }

  const handleSubmitError = (error) => {
    submitErrorCount.current++
    setSubmitError("Ocorreu um erro ao tentar fazer o login.")
    setTimeout(() => { setSubmitError(null) }, 3000)
  }

  const switchIcon = (isSubmitting) => {
    if (isSubmitting) return <LoadingIcon />
    if (submitSuccess) return <SuccessIcon />
    else return <PaperPlaneIcon />
  }

  return (
    <S.Container>
      <S.TextTop>Informe seus dados</S.TextTop>
      <Formik
        initialValues={{
          firstName: "",
          secondName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, action) => {
          values.phone = removeMask(values.phone)
          action.setSubmitting(true)
          await handleSubmit(values)
          action.setSubmitting(false)
          action.resetForm()
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
                <FormikCustomErrorMessage name="firstName" />
              </div>
              <div>
                <Field
                  name="secondName"
                  type="text"
                  icon={() => <UserIcon2 />}
                  placeholder="Sobrenome"
                  as={TextInput}
                />
                <FormikCustomErrorMessage name="secondName" />
              </div>
              <div>
                <Field
                  name="email"
                  type="text"
                  icon={() => <EmailIcon />}
                  placeholder="Email Pessoal"
                  as={TextInput}
                />
                <FormikCustomErrorMessage name="email" />
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
                <FormikCustomErrorMessage name="phone" />
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
              <div>
                <Field
                  name="confirmPassword"
                  type="password"
                  icon={() => <LockIcon />}
                  placeholder="Confirmar Senha"
                  as={TextInput}
                />
                <FormikCustomErrorMessage name="confirmPassword" />
              </div>
            </S.FormInputsGrid>
            <S.TermsAndSubmitBtn>
              <div>
                Ao se cadastrar você automaticamente concorda com nossos
                <span>&nbsp;Termos de Uso</span>
              </div>
              <HeadShake spy={submitErrorCount.current}>
                <Button type="submit" color={submitError && "red"}>
                  {switchIcon(isSubmitting)}
                  {submitSuccess ? "Enviado!" : "Enviar"}
                </Button>
              </HeadShake>
              <ErrorMessage>{submitError}</ErrorMessage>
            </S.TermsAndSubmitBtn>
          </Form>
        )}
      </Formik>
    </S.Container>
  )
}

export default RegisterUserForm
