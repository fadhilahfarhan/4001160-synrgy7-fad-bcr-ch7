import Button from "../Button/Button";
import { DashboardContentStyled } from "./StyledDashboardContent";

const DashboardContent = () => {
  return (
    <DashboardContentStyled>
      <div className="DC-header">
        <p>Dashboard {'>'} cars</p>
        <h1>Dashboard</h1>
        <div className="DC-button-groups">
          <Button textColor="#0D28A6" color="#CFD4ED" title="All"/>
          <Button textColor="#AEB7E1" color="white" title="Small"/>
          <Button textColor="#AEB7E1" color="white" title="Medium"/>
          <Button textColor="#AEB7E1" color="white" title="Large"/>
        </div>
      </div>

      <div className="DC-list-content">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </DashboardContentStyled>
  )

}

export default DashboardContent;