import styled from 'styled-components';
import { darken } from "polished"

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.green} 0%, rgba(93, 199, 77, 0.67) 100%)`};

  padding: 7vh 0 0 0;
  overflow-y: auto;

  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: 100%;
  grid-template-rows: min-content auto;


  > svg {
    min-width: 250px;
    width: 25vw;
  }

  #animation-wrapper {
    width: 100%;
  }

  @media screen and (min-width: 425px) {
    grid-template-columns: max(410px, 38vw);
    padding: 9vh 0;
  }
`;

export const FormWrapper = styled.div`
  margin-top: 26px;
  padding: calc(1.5vw + 20px);
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