import React from "react";
import { Bar } from "@ant-design/plots";
import { Pie } from '@ant-design/plots';
import { useSelector } from "react-redux";

function TimeCharts() {
  const typeList = useSelector((state) => state.type.typeList);
  const currentList = useSelector((state) => state.record.currentList);
  const data = new Map();
  for (let i = 0; i < currentList.length; i++) {
    data.set(currentList[i], data.get(currentList[i]) + 1 || 1);
  }
  console.log("data", data);
  const dataToshow = [];
  const colorList = [];
  for (let [key, value] of data) {
    console.log("key", key);
    console.log("value", value);
    dataToshow.push({
      type: typeList.find((item) => item.id === key).content,
      value: value * 0.5,
    });
    colorList.push(typeList.find((item) => item.id === key).color);
  }
  // 柱状图
  const dayBarConfig = {
    width: 400,
    height: 200,
    data: dataToshow,
    xField: "type",
    yField: "value",
    colorField: "type",
    label: {
      text: (d) => `${d.value}h  `,
      visible: true,
      style: {
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.6
      },
    },
    scale: {
      color: {
        range: colorList,
      },
    },
  };
  // 饼图
  const dayPieConfig = {
    width: 350,
    height: 250,
    data: dataToshow,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      text: (d) => `${d.type}\n ${d.value}h`,
      position: 'spider',
    },
    legend: false,
    scale: {
        color: {
          range: colorList,
        },
      },
  }
  return (
    <div>
      <h3>Charts:</h3>
        <div style={{ marginTop:"10px",backgroundColor: "white", display:"flex",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 10px" }}>
          <Bar {...dayBarConfig} />
          <Pie {...dayPieConfig} />
        </div>
    </div>
  );
}

export default TimeCharts;
