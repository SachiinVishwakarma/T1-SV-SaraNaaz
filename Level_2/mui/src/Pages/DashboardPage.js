import DashComponent from "../components/DashComponent/DashComponent.js";
import { Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <DashComponent>
      <Outlet />
    </DashComponent>
  );
}

export default DashboardPage;