import styled from 'styled-components';
import { darken } from "polished"

export const FormWrapper = styled.div`
  margin-top: 26px;
  padding: calc(1.5vw + 24px);
  background: #F8F9FE;
  border-radius:  24px 24px 0 0;
  width: 100%;
  height: 100%;

  min-height: 500px;

  @media screen and (min-width: 425px) {
    height: fit-content;
    border-radius: 6px;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  letter-spacing: 0.01em;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  > a {
    color: ${({ theme, mobile }) => mobile ? theme.green_2 : theme.white};
    cursor: pointer;
    &:active {
      color: ${({ theme, mobile }) => mobile ? darken(0.05, theme.green_2) : theme.white};
    }
  }
`;