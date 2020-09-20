import React from 'react'
import { ErrorMessage as ErrMsg } from 'formik'

import styled from 'styled-components'

const Wrapper = styled.span`
    font-family: sans-serif;
    color: ${props => props.theme.red};
    font-size: 12px;
    line-height: 8px;
`

export const ErrorMessage = ({ children }) => <Wrapper className="errorMessage">{children}</Wrapper>

export const FormikCustomErrorMessage = (props) => (
    <Wrapper className="errorMessage"><ErrMsg {...props} /></Wrapper>
)

export default FormikCustomErrorMessage
