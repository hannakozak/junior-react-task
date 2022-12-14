import styled from 'styled-components';

export const ProductWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 144rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  padding: 0 10rem;
  padding-top: 12rem;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.div`
  width: 29.2rem;
  height: 20rem;

  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.description};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 2.6rem;
  margin-bottom: 5rem;
`;

export const ProductBrand = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 2.7rem;
`;

export const ProductName = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 2.7rem;
  margin-bottom: 2rem;
`;
