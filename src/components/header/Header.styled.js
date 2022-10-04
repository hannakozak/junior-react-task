import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 144rem;
  height: 8rem;
  left: 0;
  top: 0;
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
