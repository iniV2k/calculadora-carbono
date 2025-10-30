import { Routes, Route } from 'react-router-dom';
import { CalculadoraPagina } from '../pages/CalculadoraPagina';
import MetodologiaPagina from '../pages/MetodologiaPagina';
import SobreCo2 from '../pages/SobreCo2';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<CalculadoraPagina />} />
      <Route path="/metodologia" element={<MetodologiaPagina />} />
      <Route path="/sobreCo2" element={< SobreCo2/>} />
    </Routes>
  )
}

export default index