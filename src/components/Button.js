import styled from 'styled-components';
export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1.5rem;
  background: transparent;
  border: 0.05rem solid red;
  color: red;
  border-radius: 0.5rem;
  padding: 0.2rem.0.5rem;
  margin: 0.2rem.0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  &:hover {
    background: lightblue;
    color: purple;
  }
  &:focus {
    outline: none;
  }
`;
