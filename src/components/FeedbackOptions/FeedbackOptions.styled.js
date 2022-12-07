import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
list-style: none;
gap: 30px;

`;
export const Button = styled.button`
  font-size: 25px;
  text-transform: uppercase;
  padding: 15px 30px;
  background-color: #716da6;
  color: white;
  border-radius: 10px;
  border: 1px solid #261a2b;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #261a2b;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #261a2b,
     10px 10px 18px 0px rgba(255,255,255,0.47);
   
  }
`;
export const Item = styled.li`
`;