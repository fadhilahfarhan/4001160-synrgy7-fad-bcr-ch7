import styled from "styled-components";

export const DashboardContentStyled = styled.div`
  margin: 0 0 0 16px;
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  gap: 20px;

  .DC-header{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    h1{
      font: 700 20px/30px Helvetica;
    }

    .DC-button-groups{
      display: flex;
      gap: 16px;
    }
  }

  .DC-list-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 24px;

    .item{
      width: 351px;
      height: 482px;
      background-color: green;
    }
  }
`