import styled from 'styled-components';

export const Welcome = styled.p`
  text-align: center;
  font-size: 50px;
  color: #42a2bc;
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: 0.25ch;
  font-family: sans-serif;
  padding: 0.5em 2em;
  text-shadow: -1ch 0 8px #42a2bc, -1ch 0 #f0ffff;
  -webkit-text-stroke: 0.1px black;

  &:hover {
    color: #52cfeb;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 300;

  background-color: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255, 255, 255, 0.5) 0px 1.5px 1.5px;
`;

export const Img = styled.img`
  /* width: 70%; */
  /* height: 400px; */
`;

export const WrapMoreInfo = styled.div`
padding: 20px;
display: flex;
justify-content: space-evenly;
gap:20px;
`;
export const Hiword= styled.p`
font-size: 35px;
font-weight: 100;
margin: 20px;
padding: 0;

`
export const DefaultText = styled.p`
margin: 0;
padding: 0;
font-size: 30px;

`