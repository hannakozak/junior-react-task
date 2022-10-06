import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 144rem;
  height: 8rem;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`;

export const Actions = styled.div`
  position: absolute;
  right: 10.1rem;
  top: 2.3rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 20.4rem;
  height: 4rem;
  padding: 0;
  gap: 2.2rem;
`;

export const BasketItemsAmount = styled.div`
  position: absolute;
  right: -1rem;
  top: 0;

  display: table-cell;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.shark};
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
`;

export const BasketIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CartWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20rem;
  background: red;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  top: 78px;

  background: rgba(57, 55, 72, 0.22);
`;
