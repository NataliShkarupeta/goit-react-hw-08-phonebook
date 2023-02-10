import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavigationLink = styled(NavLink)`
  color: black;
  margin: 10px;
  font-size: 17px;
  &.active {
    color: #42a2bc;
  }
`;

export const Nav = styled.nav`
  /* background: ${p => p.theme.colors.background}; */
  padding: 20px;
  margin: 10px;
`;
