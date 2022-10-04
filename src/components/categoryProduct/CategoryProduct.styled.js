import styled from 'styled-components';

export const Product = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  height: 45rem;
  padding: 2rem;

  background: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.21);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 80%;
`;

export const ProductDetails = styled.div`
  color: ${({ theme }) => theme.colors.shark};
  padding: 2rem 0;

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 160%;
`;

export const BasketIcon = styled.div`
  position: absolute;
  z-index: 100;
  right: 2rem;
  bottom: 2rem;
`;
