import styled from 'styled-components';
import { darken } from "polished"

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 24px 10px 25px;
  border-radius: 4px;
  width: fit-content;

  cursor: pointer;
  background: ${({ theme }) => theme.green_2};
  box-shadow: 0px 4px 10px rgba(125, 213, 111, 0.4);
  color: ${({ theme }) => theme.white};
  transition: all 0.2s ease-in-out;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;

  display: flex;
  align-items: center;

  *:first-child {
    margin-right: 14px;
  }

  &:hover {
    transform: scale(0.98);
    background: ${({ theme }) => darken(0.04, theme.green_2)};
  }

  &:focus {
    transform: scale(0.98);
    background: ${({ theme }) => darken(0.04, theme.green_2)};
  }
`;