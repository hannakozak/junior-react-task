import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: #ffffff;
  width: 100%;
  height: 45rem;

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
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  color: #1d1f22;
  padding: 2rem 0;
`;
