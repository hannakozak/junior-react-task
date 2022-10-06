import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.emerald};
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  min-height: 5.2rem;
  padding: 1.6rem 4rem;
  border: none;

  cursor: pointer;

  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.colors.screaminGreen};
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.shark};
      border: 1px solid ${({ theme }) => theme.colors.shark};
      &:hover,
      :focus,
      :active {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.emerald};
        border: 1px solid ${({ theme }) => theme.colors.emerald};
      }
    `}
`;
