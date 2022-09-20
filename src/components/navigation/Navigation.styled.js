import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  position: absolute;
  height: 5.6rem;
  width: 100%;
  left: 10.1rem;
  bottom: 0;
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
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 120%;
  text-transform: uppercase;
  padding: 2rem;
  padding-bottom: 3rem;
  color: ${({ theme }) => theme.colors.tuna};

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
