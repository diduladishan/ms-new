'use client';

import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    month: 'Jan',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Feb',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Mar',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Apr',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'May',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Jun',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Jul',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Aug',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Sep',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Oct',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Nov',
    hours: Math.floor(Math.random() * 100) + 100,
  },
  {
    month: 'Dec',
    hours: Math.floor(Math.random() * 100) + 100,
  },
];

export function Overview() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `Hours ${value}`}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
