import styled from 'styled-components';
import { darken } from "polished"

export const FormWrapper = styled.div`
  margin-top: 26px;
  padding: calc(1.5vw + 24px);
  background: #F8F9FE;
  border-radius:  24px 24px 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;

  min-height: fit-content;

  @media screen and (min-width: 425px) {
    height: fit-content;
    border-radius: 6px;
  }
`;