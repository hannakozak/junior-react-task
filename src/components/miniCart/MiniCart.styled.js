import styled from 'styled-components';

export const MiniCartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  width: 36.5rem;
  height: 60rem;
  right: 15rem;
  top: 0rem;
  z-index: 150;
  overflow: auto;

  background-color: ${({ theme }) => theme.colors.white};
`;
export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5rem 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 160%;
  padding: 1rem;
`;

export const ProductBrand = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 160%;
`;

export const ProductName = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 160%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const SummaryLabel = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 1.8rem;
`;

export const SummaryValue = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 2.8rem;
`;

export const Icon = styled.div`
  cursor: pointer;
  & img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const CartAction = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 2rem;
`;

export const CartActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.5rem;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`;
