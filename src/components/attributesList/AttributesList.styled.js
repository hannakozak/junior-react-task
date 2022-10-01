import styled from 'styled-components';

export const AttributeColor = styled.button`
  width: 3.2rem;
  height: 3.2rem;
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
  min-width: 6rem;
  min-height: 4.5rem;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.colors.shark};
  margin-right: 1rem;

  color: ${({ theme }) => theme.colors.mineShaft};
  background-color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontFamily.tertiary};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 4.5rem;
  letter-spacing: 0.05em;
  align-self: center;

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

  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 700;
  line-height: 1.8rem;
  text-align: center;
  text-transform: uppercase;
`;
