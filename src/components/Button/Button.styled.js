import styled from 'styled-components';

export const ButtonLabel = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.emerald};

  width: 29.2rem;
  height: 5.2rem;
  padding: 1.6rem 3.2rem;
  border: none;

  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.colors.screaminGreen};
  }
`;
