import './index.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Estatisticas = () => {
  const data = [
    { brand: 'Adidas', percentage: 80 },
    { brand: 'Puma', percentage: 50 },
    { brand: 'Nike', percentage: 85 },
    { brand: 'Salomon', percentage: 60 },
    { brand: 'Mizuno', percentage: 55 },
    { brand: 'Olympikus', percentage: 35 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="brand" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Estatisticas;