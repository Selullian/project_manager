import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import DeadlinePage from "./pages/DeadlinePage";
import BroadcastPage from "./pages/BroadcastPage";
import MembersPage from "./pages/MembersPage";

const menus = [
  { id: "deadline", title: "마감 관리", path: "/deadline" },
  { id: "broadcast", title: "방송 시간", path: "/broadcast" },
  { id: "members", title: "팀원 관리", path: "/members" },
];

function App() {
  return (
    <>
      <div id="header">
        <h1>루동부 마감 관리</h1>
      </div>

      <div id="main-layout">
        <aside id="sidebar">
          <p className="sidebar-title">목차</p>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </aside>

        <main id="content">
          <Routes>
            <Route path="/" element={<DeadlinePage />} />
            <Route path="/deadline" element={<DeadlinePage />} />
            <Route path="/broadcast" element={<BroadcastPage />} />
            <Route path="/members" element={<MembersPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
