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


  #animation-wrapper {
    width: 100%;
  }

  @media screen and (min-width: 425px) {
    grid-template-columns: max(420px, 39.5vw);
    padding: 9vh 0;
  }
`;

export const LogoWrapper = styled.div`
    height: 97px;
  
    > svg {
      min-width: 250px;
      width: 25vw;
      position: fixed;
      transform: translateX(-50%);

      @media screen and (min-width: 425px) {
        position: relative;
        transform: none
      }
    }
`;