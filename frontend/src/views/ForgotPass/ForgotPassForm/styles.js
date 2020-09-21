import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
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

export const SubmitBtnWrapper = styled.div`
    position: relative;
  margin-top: 32px;
  display: flex;
  flex-flow: column;
  align-items: center;

  .errorMessage {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    width: fit-content;
  }
`;

export const Loading = styled.img`
  width: 16px;
  height: 16px;
`;