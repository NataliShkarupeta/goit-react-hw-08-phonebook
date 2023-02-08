import styled from 'styled-components';

export const ButtonBack = styled.button`
  padding: 5px;
  margin: 10px;
  display: inline-block;
  width: 60px;
  border-radius: 4px;
  border-color: transparent;
  background-color: transparent;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0.1);
  color: #777;
`;

export const ButtonBlue = styled.button`
  margin: auto;
  display: block;
  background: #42a2bc;
  color: white;
  border-color: transparent;
  border-radius: 5px;
  padding: 5px;
    transition: color 0.3s ease-out;

  &:hover {
    background: #52cfeb;
    color: #777;
  transition: color 0.3s ease-out;
  }
  &:focus {
    background: #42a2bc;
    outline: none;
      transition: color 0.3s ease-out;
  }
`;
