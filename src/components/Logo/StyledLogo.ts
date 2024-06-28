import styled from "styled-components";

export const LogoStyled = styled.div<{color?: string, width?: string}>`
  height: 34px;
  width: ${({width}) => !!width ? width : '100px'};
  background-color: ${({color}) => !!color ? color : '#0D28A6'};
`