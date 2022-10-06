import styled from 'styled-components';

export const PriceStyled = styled.div`
  color: ${({ theme }) => theme.colors.shark};

  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}rem;
  line-height: 1.8rem;
`;
