import './index.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import storage from 'local-storage';


const Estatisticas = () => {
  const data = [
    { bar1: 'Adidas', porcentagem: 80 },
    { bar2: 'Puma', porcentagem: 50 },
    { bar3: 'Nike', porcentagem: 85 },
    { bar4: 'Salomon', porcentagem: 60 },
    { bar5: 'Mizuno', porcentagem: 55 },
    { bar6: 'Olympikus', porcentagem: 35 },
  ];

  const navigate = useNavigate();
    
  useEffect(() => {
    if (storage('usuario-logado')){
        navigate('/');
    }
    else if(!storage('adm-logado')){
        navigate('/');
    }
    else if(!storage('adm-logado') && !storage('usuario-logado')){
        navigate('/');
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bar1" fill='#0000' />
        <XAxis dataKey="bar2" fill='#0000' />
        <XAxis dataKey="bar3" fill='#0000' />
        <XAxis dataKey="bar4" fill='#0000' />
        <XAxis dataKey="bar5" fill='#0000' />
        <XAxis dataKey="bar6" fill='#0000' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="porcentagem" fill="#FF0000" />      
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Estatisticas;