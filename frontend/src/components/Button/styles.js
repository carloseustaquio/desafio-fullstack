import styled from 'styled-components';
import { darken, transparentize } from "polished"

const getButtonColor = (color, theme) => {
  switch (color) {
    case "red":
      return theme.red
    case "green":
      return theme.green_2
    case "grey":
      return theme.grey_1
    default:
      return theme.green_2
  }
}

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 24px 10px 25px;
  border-radius: 4px;
  width: fit-content;

  cursor: pointer;
  background: ${({ color, theme }) => getButtonColor(color, theme)};
  box-shadow: ${({ color, theme }) => `0px 4px 10px ${transparentize(0.6, getButtonColor(color, theme))}`};
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
    background: ${({ color, theme }) => darken(0.04, getButtonColor(color, theme))};
  }

  &:focus {
    transform: scale(0.98);
    background: ${({ color, theme }) => darken(0.04, getButtonColor(color, theme))};
  }
`;