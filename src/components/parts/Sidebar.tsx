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
    <TeamOutlined style={{ fontSize: 17 }} />
  ),
  getItem(
    <Link to={"/agendardv"} style={{ textDecoration: "none" }}>
      Agenda RDV
    </Link>,
    "2",
    <CalendarOutlined style={{ fontSize: 17 }} />
  ),
  getItem(
    <Link to={"/candidataccepte/Accepter"} style={{ textDecoration: "none" }}>
      Candidat Accepter
    </Link>,
    "3",
    <CheckCircleOutlined style={{ fontSize: 17 }} />
  ),
  getItem(<UserAdd />, "4", <UserAddOutlined style={{ fontSize: 17 }} />),

  getItem("Parametres", "sub1", <SettingOutlined style={{ fontSize: 17 }} />, [
    getItem(
      <Link to={"/profil"} style={{ textDecoration: "none" }}>
        Profil
      </Link>,
      "5",
      <ProfileOutlined style={{ fontSize: 18 }} />
    ),
    getItem(
      <div onClick={() => logout()}>Déconnexion</div>,
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
      <div style={{ width: 190 }}>
        <div className="d-flex justify-content">
          <Button
            onClick={toggleCollapsed}
            style={{
              marginBottom: 5,
              marginLeft: 5,
              marginTop: 70,
              marginRight: 5,
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: 20 }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: 20 }} />
            )}
          </Button>
          <h5 style={{ color: "white", marginTop: 73 }}>MENU</h5>
        </div>
        <Menu
          style={{ borderRadius: 10, marginLeft: 5 }}
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
