import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    { paymentMethod: 'Débito', Débito: 75, color: '#FFA500' },
    { paymentMethod: 'Crédito', Crédito: 50, color: '#FFFF00' },
    { paymentMethod: 'PIX', PIX: 90, color: '#FF0000' },
    { paymentMethod: 'Boleto', Boleto: 20, color: '#008000' },
  ];

  return (
    <div>
      <h2>Marcas mais vendidas</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="paymentMethod" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="" fill="#8884d8">
          
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;