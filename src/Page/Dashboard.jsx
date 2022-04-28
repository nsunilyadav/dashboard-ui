import { CloudDownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Layout, PageHeader, Tabs, Tag } from "antd";
import Navbar from "./../Component/Navbar";
import Datatable from "./../Component/Table";
const { Content } = Layout;
const { TabPane } = Tabs;

const Dashboard = () => {
  return (
    <Layout className="layout">
      <Navbar />
      <Content className="innerContent">
        <h1>Setting</h1>
        <Tabs defaultActiveKey="4">
          <TabPane tab="My Details" key="1">
            <h2>Content of Tab Pane 1</h2>
          </TabPane>
          <TabPane tab="Profile" key="2">
            <h2>Content of Tab Pane 2</h2>
          </TabPane>
          <TabPane tab="Password" key="3">
            <h2>Content of Tab Pane 3</h2>
          </TabPane>
          <TabPane tab="Team" key="4">
            <div className="site-page-header-ghost-wrapper">
              <PageHeader
                ghost={false}
                title="Team Members"
                tags={<Tag color="default">48 Users</Tag>}
                extra={[
                  <Button
                    icon={<CloudDownloadOutlined />}
                    className="btnBluelIne"
                    key="2"
                  >
                    Download CSV
                  </Button>,
                  <Button
                    icon={<PlusOutlined />}
                    className="btnBlue"
                    key="1"
                    type="primary"
                  >
                    Add Users
                  </Button>,
                ]}
              ></PageHeader>
              <Datatable />
            </div>
          </TabPane>
          <TabPane tab="Plan" key="5">
            <h2>Content of Tab Pane 5</h2>
          </TabPane>
          <TabPane tab="Billing" key="6">
            <h2>Content of Tab Pane 6</h2>
          </TabPane>
          <TabPane tab="Email" key="7">
            <h2>Content of Tab Pane 7</h2>
          </TabPane>
          <TabPane tab="Notification" key="8">
            <h2>Content of Tab Pane 8</h2>
          </TabPane>
          <TabPane tab="Intrigation" key="9">
            <h2>Content of Tab Pane 9</h2>
          </TabPane>
          <TabPane tab="API" key="10">
            <h2>Content of Tab Pane 10</h2>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default Dashboard;
