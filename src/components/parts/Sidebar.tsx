import React, { useState } from "react";
import {
  CheckCircleOutlined,
  LogoutOutlined,
  CalendarOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserAddOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import UserAdd from "../AdminDashboard/users/UserAdd";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth/action";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
      Candidateurs
    </Link>,
    "1",
    <TeamOutlined style={{ fontSize: 19 }} />
  ),
  // getItem(
  //   <Link to={"/agendardv"} style={{ textDecoration: "none" }}>
  //     Agenda RDV
  //   </Link>,
  //   "2",
  //  <CalendarOutlined style={{ fontSize: 17 }} />
  // ),
  getItem(
    <Link to={"/candidataccepte/Accepter"} style={{ textDecoration: "none" }}>
      Candidat Accepter
    </Link>,
    "3",
    <CheckCircleOutlined style={{ fontSize: 19 }} />
  ),
  getItem(<UserAdd />, "4", <UserAddOutlined style={{ fontSize: 19 }} />),

  getItem("Parametres", "sub1", <SettingOutlined style={{ fontSize: 19 }} />, [
    getItem(
      <Link to={"/profil"} style={{ textDecoration: "none" }}>
        Profil
      </Link>,
      "5",
      <ProfileOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <div onClick={() => logout()} style={{ fontSize: 15 }}>
        Déconnexion
      </div>,
      "6",
      <LogoutOutlined style={{ fontSize: 18 }} />
    ),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="sidebar-div">
        <div className="d-flex justify-content">
          <Button className="sidebar-menu-button" onClick={toggleCollapsed}>
            {collapsed ? (
              <MenuUnfoldOutlined className="sidebar-menu-logo" />
            ) : (
              <MenuFoldOutlined className="sidebar-menu-logo" />
            )}
          </Button>
          <h5 className="sidebar-menu-title" style={{ color: "white" }}>
            MENU
          </h5>
        </div>
        <Menu
          className="sidebar-menu-card "
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};

export default Sidebar;
