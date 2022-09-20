import styled from 'styled-components';

export const CurrencyDropdown = styled.div`
  position: absolute;
  width: 114px;
  min-height: 200px;
  top: 65px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.25);
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.25));
`;

export const CurrencyOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.shark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gallery};
    width: 100%;
  }
`;

export const CurrnecyCheckerView = styled.div`
  width: 38px;
  height: 29px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.shark};
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
  padding: 0px;
`;
