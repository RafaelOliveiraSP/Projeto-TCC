import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    { paymentMethod: 'Débito', Débito: 75},
    { paymentMethod: 'Crédito', Crédito: 50},
    { paymentMethod: 'PIX', PIX: 90 },
    { paymentMethod: 'Boleto', Boleto: 20},
  ];

  return (
    <div style={{display:'flex',alignItems:'center', flexDirection:'column',paddingBlockEnd:'10%'}}>
      <h2>Formas de Pagamento</h2>
      <ResponsiveContainer width="60%" height={210}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="paymentMethod" />
          <YAxis />
          <Tooltip />
          <Legend style={{display:'flex', justifyContent:'space-arround'}}/>
          <Bar dataKey="Débito" fill="green"/>
          <Bar dataKey="Crédito" fill="red"/>
          <Bar dataKey="PIX" fill="orange"/>
          <Bar dataKey="Boleto" fill="#0AA5D6"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;