import React, { useEffect, useState, PureComponent } from "react";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("line.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div>
      <div>
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
      <div>
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
    </div>
  );
};

export default Dashboard;
