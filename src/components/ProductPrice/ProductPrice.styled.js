import styled from 'styled-components';

export const PriceStyled = styled.div`
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.8rem;

  color: ${({ theme }) => theme.colors.shark};
`;
