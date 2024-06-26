import { Route, Routes } from "react-router-dom";
import HomePage from "../../../Pages/Admin/HomePage";
import ActivityPage from "../../../Pages/Admin/ActivityPage";
import StuinfoPage from "../../../Pages/Admin/StuinfoPage";
import ActivityDetailPage from "../../../Pages/Admin/ActivityDetailPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<HomePage />}></Route>
      <Route path="/admin/activity" element={<ActivityPage />}></Route>
      <Route path="/admin/stuinfo" element={<StuinfoPage />}></Route>
      <Route path="/admin/activity/:activityID" element={<ActivityDetailPage />} />
    </Routes>
  );
}
export default AppRoutes;
