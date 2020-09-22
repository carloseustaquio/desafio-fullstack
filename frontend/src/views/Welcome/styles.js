import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 12px;
  align-items: center;
  justify-content:center;
  text-align: center;
  color: ${({ theme }) => theme.white}
`