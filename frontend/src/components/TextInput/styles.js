import styled from "styled-components";
import { darken } from "polished"

export const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 12px;
  padding: 0 0 0 12px;
  color: ${({ theme }) => theme.grey_1};
  max-width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);

  input,
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: none;
    outline: none;
    background: inherit;
    color: ${({ theme }) => darken(0.2, theme.grey_1)};
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.01em;
    padding: 12px 0;
  }

  input::placeholder {
    color: ${({ theme }) => theme.grey_1};
  }
`;
