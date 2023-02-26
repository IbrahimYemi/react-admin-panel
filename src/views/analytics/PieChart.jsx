import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19E6', '#19FFDE'];


const styles = {
  chart: {
    marginLeft: '10px'
  },
};

const PieChartComponent = ({ data, title }) => {
  return (
    <PieChart width={300} height={320} style={styles.chart} >
      <text x="50%" y="20" textAnchor="middle" dominantBaseline="middle">{title}</text>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label position="center">
          {data.reduce((total, entry) => total + entry.value, 0)}
        </Label>
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
