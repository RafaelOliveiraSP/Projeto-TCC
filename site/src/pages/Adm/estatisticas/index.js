import './index.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import storage from 'local-storage';
import Chart from '../../../components/graficos';


const Estatisticas = () => {
  const data = [
    { bar1: 'Adidas',adidas: 80 },
    { bar1: 'Puma',Puma: 50 },
    { bar1: 'Nike',Nike: 85 },
    { bar1: 'Salomon',Salomon: 60 },
    { bar1: 'Mizuno',Mizuno: 55 },
    { bar1: 'Olympikus',Olympikus: 35 },
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
    <div className='pagina estatisticas'>
      <Cabecalho/>
      <div className='borda'> 
        <div className='gr1' style={{display: "flex", paddingTop: '10%', paddingBlockEnd: '10%',justifyContent:'space-between', alignItems: 'center', flexDirection:'column'}}>
            <h2>Marcas mais Vendidas</h2>
            <ResponsiveContainer width="60%" height={210} >
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bar1" fill='#0000' />
              <YAxis />
              <Tooltip />
              <Legend style={{display:'flex', justifyContent:'space-arround'}}/>            
              <Bar dataKey="adidas" fill="red"/>      
              <Bar dataKey='Puma' fill="blue"/>
              <Bar dataKey='Nike' fill="#E58A00"/>
              <Bar dataKey='Salomon' fill="black"/>
              <Bar dataKey='Mizuno' fill="orange"/>
              <Bar dataKey='Olympikus' fill="green"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='gr2'>
          <Chart/>
        </div>
      </div>
      <Rodape/>
    </div>    
  );
};

export default Estatisticas;