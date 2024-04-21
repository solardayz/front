import React from "react";
import Head from "next/head";
import { Carousel } from "antd";

import AppLayout from "../components/AppLayout";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const Workout = () => (
  <AppLayout>
    <Head>
      <title>NTB</title>
    </Head>
    <div>Hello, 운동등록</div>
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </AppLayout>
);

export default Workout;
