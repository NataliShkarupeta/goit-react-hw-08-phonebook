import styled from "styled-components";

export const But = styled.button`
width: 100px;
  display: block;
  background: #42a2bc;
  color: white;
  border-color: transparent;
  border-radius: 5px;
  padding: 5px;
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
  &:focus {
    background: #42a2bc;
    outline: none;
    -webkit-transition: color 0.3s ease-out;
    transition: color 0.3s ease-out;
  }
  &:hover {
    color: #777;
    background: #52cfeb;
  }
`;

