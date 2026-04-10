import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';

const marksData = [
  { subject: 'Dcom', marks: 85 },
  { subject: 'Dbms', marks: 78 },
  { subject: 'Oops', marks: 92 },
  { subject: 'Mdm', marks: 88 },
  { subject: 'E&M', marks: 80 }
];

const attendanceData = [
  { name: 'Present', value: 85 },
  { name: 'Absent', value: 15 }
];

const COLORS = ['#4f46e5', '#f43f5e']; // Primary and Rose for absent

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Student Performance Dashboard</h2>
      
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Exam Marks (out of 100)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marksData} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" tick={{fontSize: 12}} angle={-45} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="marks" fill="#4f46e5" radius={[6, 6, 0, 0]} name="Marks Scored" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Attendance Overall</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#4f46e5"
                dataKey="value"
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
