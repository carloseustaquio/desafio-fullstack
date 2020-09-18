import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content 100% min-content;
  gap: 30px;

  .errorMessage {
    color: red
  }
`;

export const TextTop = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #94A3B3;
`

export const FormInputsGrid = styled.div`
  display: grid;
  gap: 20px;
`;

export const TermsAndSubmitBtn = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 18px; 

  > div {
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.blue};
    text-align: center;

    span {
      color: ${({ theme }) => darken(0.2, theme.blue)};
    }
  }
`;