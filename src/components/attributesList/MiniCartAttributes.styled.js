import styled from 'styled-components';

export const AttributeColor = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.shark};
  margin-right: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &:hover,
  :focus,
  :active {
    border: 1px solid ${({ theme }) => theme.colors.emerald};
    outline: double ${({ theme }) => theme.colors.emerald};
  }
`;

export const AttributeItem = styled.button`
  min-width: 2.4rem;
  min-height: 2.4rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.shark};
  margin-right: 1rem;

  color: ${({ theme }) => theme.colors.mineShaft};
  background-color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontFamily.tertiary};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 2.2rem;
  letter-spacing: 0.05em;

  cursor: pointer;

  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.colors.mineShaft};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const AttributeSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
`;

export const AttributeLabel = styled.div`
  display: flex;

  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.6rem;
  text-align: center;
`;
