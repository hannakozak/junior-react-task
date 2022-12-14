import styled from 'styled-components';

export const CartWrapper = styled.div`
  position: relative;
  width: 144rem;
  min-height: 100vh;
  padding: 0 10rem;
  padding-top: 12rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 160%;
  text-transform: capitalize;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem 0rem;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.mercury};
  padding: 3rem 0;
  & div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const SummaryLabel = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 2.8rem;
`;

export const SummaryValue = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 2.8rem;
`;

export const ButtonAction = styled.div`
  width: 29rem;
`;
