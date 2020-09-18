import styled from 'styled-components';

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

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;

  *:first-child {
    margin-right: 14px;
  }

`;