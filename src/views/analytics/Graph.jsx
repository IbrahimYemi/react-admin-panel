import React from 'react';
import itemData from '../../store/contents'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraphChart = () => {
  const contentData = itemData.map((item, i) => (
      { name: item.title, likes: item.likes, dislikes: item.dislikes }
  ))
  
  const data = contentData.map((d) => ({
    name: d.name,
    likes: Number(d.likes),
    dislikes: Number(d.dislikes),
  }));
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2  style={{textAlign: 'center'}}>Content Performances</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="likesColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="dislikesColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Line type="monotone" dataKey="likes" stroke="#8884d8" fillOpacity={1} fill="url(#likesColor)" />
          <Line type="monotone" dataKey="dislikes" stroke="#82ca9d" fillOpacity={1} fill="url(#dislikesColor)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphChart;
