import {
  BellOutlined,
  DingdingOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu } from "antd";
import styles from "./styles.module.less";

const Navbar = () => (
  <div className={styles.Header}>
    <div className={styles.headerInner}>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <h1>
          <DingdingOutlined />
          Untitled UI
        </h1>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="project">Project</Menu.Item>
        <Menu.Item key="Task">Task</Menu.Item>
        <Menu.Item key="Repoarting">Repoarting</Menu.Item>
        <Menu.Item key="Users">Users</Menu.Item>
      </Menu>
      <div className={styles.rightHeader}>
        <Button type="text" size="large" icon={<SearchOutlined />} />
        <Button type="text" size="large" icon={<SettingOutlined />} />
        <Button type="text" size="large" icon={<BellOutlined />} />
        <Avatar
          size={40}
          className={styles.userProfile}
          src="https://randomuser.me/api/portraits/men/97.jpg"
        />
      </div>
    </div>
  </div>
);

export default Navbar;
