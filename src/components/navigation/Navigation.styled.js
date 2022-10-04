import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  position: absolute;
  left: 10.1rem;
  bottom: 0;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5.6rem;
  padding: 0;

  & nav {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    padding: 0;
    height: 5.6rem;
  }
`;

export const Label = styled(Link)`
  color: ${({ theme }) => theme.colors.tuna};

  padding: 2rem;
  padding-bottom: 3rem;

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 120%;
  text-transform: uppercase;

  &:focus,
  :active {
    color: ${({ theme }) => theme.colors.emerald};
    border-bottom: 2px solid ${({ theme }) => theme.colors.emerald};
  }
`;

export const NavLink = styled.div`
  padding-bottom: 5rem;
  height: 5.2rem;
`;
