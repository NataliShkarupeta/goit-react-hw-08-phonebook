import styled from 'styled-components';

export const Span = styled.div`
  color: #42a2bc;
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  width: 300px;
  margin: 60px auto 30px;
  padding: 10px;
  position: relative;

  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: linear-gradient(#eeefef, #ffffff 10%);
`;

export const Field = styled.p`
  position: relative;
`;

export const SubmitButton = styled.div`
  width: 65px;
  height: 65px;
  position: absolute;
  top: 17px;
  right: -25px;
  padding: 10px;
  z-index: 2;

  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.1),
    inset 0 -3px 2px rgba(0, 0, 0, 0.2);
  /* &:after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    top: -2px;
    left: 30px;

    background: #ffffff;

    box-shadow: 0 62px white, -32px 31px white;
  } */
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  margin-top: -1px;

  font-size: 1.4em;
  line-height: 1.75;
  color: white;

  border: none;
  border-radius: inherit;
  background: linear-gradient(#52cfeb, #42a2bc);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.35), inset 0 3px 2px rgba(255, 255, 255, 0.2),
    inset 0 -3px 2px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  &:focus {
    outline: none;
    background: #52cfeb;
    transition: all 0.3s ease-out;
  }
  &:active {
    background: #42a2bc;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),
      inset 0 3px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const Input = styled.input`
  font-family: 'Lato', Calibri, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);

  width: 80%;
  padding: 10px 18px 10px 45px;

  border: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1),
    inset 0 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: #f9f9f9;
  color: #777;
  transition: color 0.3s ease-out;
  &:hover {
    color: #52cfeb;
  }
  &:focus {
    color: #42a2bc;
    outline: none;
  }
`;

export const I = styled.i`
  left: 0px;
  top: 0px;
  position: absolute;
  height: 36px;
  width: 36px;

  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);

  color: #777777;
  text-align: center;
  line-height: 42px;
  transition: all 0.3s ease-out;
  pointer-events: none;
`;
