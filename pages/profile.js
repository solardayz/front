import React from "react";
import Head from "next/head";
import { SmileOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { Card, Space } from "antd";

import AppLayout from "../components/AppLayout";

const Profile = () => (
  <AppLayout>
    <Head>
      <title>NTB</title>
    </Head>
    <Space direction="vertical" size={12}>
      <Card
        size="small"
        title="나의 전적"
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <Timeline
          items={[
            {
              color: "green",
              children: "생체 우승 2015-09-01",
            },
            {
              color: "green",
              children: "생체 우승 2015-09-01",
            },
            {
              color: "red",
              children: (
                <>
                  <p>신종훈 복싱클럽 입문</p>
                </>
              ),
            },
            {
              children: (
                <>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                </>
              ),
            },
            {
              color: "gray",
              children: (
                <>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                </>
              ),
            },
            {
              color: "gray",
              children: (
                <>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                  <p>생체 참가</p>
                </>
              ),
            },
            {
              color: "#00CCFF",
              dot: <SmileOutlined />,
              children: <p>testing</p>,
            },
          ]}
        />
      </Card>
    </Space>
  </AppLayout>
);

export default Profile;
