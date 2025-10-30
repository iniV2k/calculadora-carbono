import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>APS {currentYear} &copy; Projeto Calculadora de Pegada de Carbono.</p>
      <p>Desenvolvido por:<br></br>Vinicius Ribeiro - H639FJ0<br></br> Miguel Rodrigues - R676DB6<br></br> Luis Gustavo - H713JF2<br></br> Ryan de Souza - R8365C9<br></br> Vinicius Teixeira - H75IIF2<br></br></p>
    </footer>
  );
};

export default Footer;
