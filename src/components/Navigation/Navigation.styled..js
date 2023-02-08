import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: black;
  margin: 10px;
  font-size: 20px;
  &.active {
    color: #42a2bc;
  }
`;
