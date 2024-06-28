import styled from "styled-components";

export const ButtonComponent = styled.button<{Width?: string, color?: string, textColor?: string}>`
  background-color: ${({color}) => !!color ? color : "#5CB85F"};
  height: 36px;
  width: ${({Width}) => !!Width ? Width : ""};
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  color: ${({textColor}) => !!textColor ? textColor : "white"};
  font: 700 14px/20px Helvetica; 
  :hover{
    cursor: pointer;
  }

  :focus{
    border: 1px solid black;
  padding: 7px 11px;
  }
`
