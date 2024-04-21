import React from "react";
import Head from "next/head";
import { Card, Space } from "antd";
import AppLayout from "../components/AppLayout";

const Home = () => (
  <AppLayout>
    <Head>
      <title>NTB</title>
    </Head>
    <Space direction="vertical" size={12}>
      <Card
        size="small"
        title="오늘의 운동"
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>
          줄넘기
          <string>3</string>R
        </p>
        <p>
          쉐도우
          <string>3</string>R
        </p>
        <p>
          스파링
          <string>3</string>R
        </p>
        <p>
          웨이트
          <string>3</string>R
        </p>
      </Card>
      <Card
        size="small"
        title="오늘의 운동"
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>
          줄넘기
          <string>3</string>R
        </p>
        <p>
          쉐도우
          <string>3</string>R
        </p>
        <p>
          스파링
          <string>3</string>R
        </p>
        <p>
          웨이트
          <string>3</string>R
        </p>
      </Card>
      <Card
        size="small"
        title="오늘의 운동"
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>
          줄넘기
          <string>3</string>R
        </p>
        <p>
          쉐도우
          <string>3</string>R
        </p>
        <p>
          스파링
          <string>3</string>R
        </p>
        <p>
          웨이트
          <string>3</string>R
        </p>
      </Card>
      <Card
        size="small"
        title="오늘의 운동"
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>
          줄넘기
          <string>3</string>R
        </p>
        <p>
          쉐도우
          <string>3</string>R
        </p>
        <p>
          스파링
          <string>3</string>R
        </p>
        <p>
          웨이트
          <string>3</string>R
        </p>
      </Card>
      <Card
        size="small"
        title="오늘의 운동"
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>
          줄넘기
          <string>3</string>R
        </p>
        <p>
          쉐도우
          <string>3</string>R
        </p>
        <p>
          스파링
          <string>3</string>R
        </p>
        <p>
          웨이트
          <string>3</string>R
        </p>
      </Card>
    </Space>
  </AppLayout>
);

export default Home;
