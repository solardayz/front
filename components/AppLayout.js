import React from "react";
import Link from "next/link";
import { Menu, Input, Button } from "antd";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>NTB</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="workout">
          <Link href="/workout">
            <a>운동</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
