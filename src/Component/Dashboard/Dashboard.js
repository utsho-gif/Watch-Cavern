import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  RadialBarChart,
  RadialBar,
  BarChart,
  CartesianGrid,
  Bar,
} from "recharts";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("line.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="d-flex flex-column align-items-center my-5 container">
      <div className="p-5">
        <h3 className="text-info">Month vs Sell</h3>
        <AreaChart
          width={730}
          height={250}
          data={datas}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Area dataKey="sell" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
          <Legend></Legend>
        </AreaChart>
      </div>
      <div className="p-5">
        <h3 className="text-warning">Investment vs Revenue</h3>
        <RadarChart outerRadius={90} width={730} height={250} data={datas}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Investment"
            dataKey="investment"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Sell"
            dataKey="sell"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Radar
            name="Revenue"
            dataKey="revenue"
            stroke="#00255c"
            fill="#00255c"
            fillOpacity={0.6}
          />
          <Tooltip></Tooltip>
          <Legend />
        </RadarChart>
      </div>
      <div className="p-5">
        <h3 className="text-success">Total Sell</h3>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={datas}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="sell"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </div>
      <div className="p-5">
        <h3 className="text-danger mb-4">Yearly Dashboard</h3>
        <BarChart width={730} height={250} data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
