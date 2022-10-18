import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://mocki.io/v1/5cc3f57f-7050-4173-b69d-90db40a5297d")
    .then((resp)=>resp.json())
    .then((resp)=>setData(resp.data))
  })
  return (
    <div className="App">
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="x"/>
          <YAxis domain={[0, 'dataMax+200']} allowDataOverflow={true} />
          <Legend />
          <Line type="monotone" dataKey="value" fill='#FFF00000' />
        </LineChart>
    </div>
  );
}

export default App;
