import React, { useState } from "react";
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

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
  getItem("Candidateurs", "1", <PieChartOutlined />),
  getItem("Agenda RDV", "2", <DesktopOutlined />),
  getItem("Ajouter Candidat", "3", <ContainerOutlined />),
  getItem("Candidat Accepter", "4", <ContainerOutlined />),

  getItem("Parametres", "sub1", <MailOutlined />, [
    getItem("Profil", "5"),
    getItem("Déconnexion", "6"),
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
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 5,
              marginLeft: 5,
              marginTop: 70,
              marginRight: 5,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <h5 style={{ color: "white", marginTop: 73 }}>MENU</h5>
        </div>
        <Menu
          style={{ borderRadius: 10, marginLeft: 5 }}
          defaultSelectedKeys={["1"]}
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
