import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 144rem;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CategoryTitle = styled.h1`
  position: absolute;
  width: 29.9rem;
  height: 6.8rem;
  left: calc(50% - 299px / 2 - 46.95rem);
  top: 10rem;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 4.2rem;
  line-height: 160%;
  text-transform: capitalize;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.shark};
`;

export const CategoryProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding: 2rem 10rem;
  padding-top: 20rem;
`;
