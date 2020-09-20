import styled from 'styled-components';
import { darken } from "polished"

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: ${({ mobile }) => mobile ? `30px 0 0 0` : `16px 0 0 0`};
  /* margin: ${({ mobile }) => mobile ? `auto 0 16px 0` : `16px 0 0 0`}; */
  /* margin-top: ${({ mobile }) => mobile ? `120px` : `16px`}; */
  /* margin-top: 16px; */
  letter-spacing: 0.01em;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  > a {
    color: ${({ theme, mobile }) => mobile ? theme.green_2 : theme.white};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:active {
      color: ${({ theme, mobile }) => mobile ? darken(0.05, theme.green_2) : theme.white};
    }

    &:hover {
      transform: scale(0.98);
      color: ${({ theme, mobile }) => mobile ? darken(0.05, theme.green_2) : theme.white};
    }
  }
`;