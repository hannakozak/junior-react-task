import styled from 'styled-components';

export const CurrencyDropdown = styled.div`
  position: absolute;
  z-index: 2;
  top: 6.5rem;
  right: 0rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11.4rem;
  min-height: 20rem;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.25);
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.25));

  background-color: ${({ theme }) => theme.colors.white};
`;

export const CurrencyOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;

  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gallery};
    width: 100%;
  }
`;

export const CurrnecyCheckerView = styled.div`
  display: flex;
  align-items: flex-end;
  width: 3.8rem;
  height: 2.9rem;

  color: ${({ theme }) => theme.colors.shark};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  cursor: pointer;

  & img {
    position: absolute;
    left: 76.47%;
    top: 61.25%;
    bottom: 31.25%;
  }
`;

export const CurrencyPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem;
`;
