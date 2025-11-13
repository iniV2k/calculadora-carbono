import React, { useEffect, useState } from "react";
import "./MetodologiaPagina.css";
import type { FatoresOutputData } from "../types";
import { getFatoresEmissao } from "../services/api";

export const MetodologiaPagina: React.FC = () => {
  const [fatores, setFatores] = useState<FatoresOutputData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFatores = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getFatoresEmissao();
        setFatores(data);
      } catch (err) {
        setError(
          "Não foi possível carregar os fatores de emissão. Tente recarregar"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchFatores();
  }, []);

  if (isLoading) {
    return (
      <div className="metodologia-container">
        <h1>Metodologia de Cálculo</h1>
        <p>Carregando fatores de emissão...</p>
      </div>
    );
  }

  if (error || !fatores) {
    return (
      <div className="metodologia-container">
        <h1>Metodologia de Cálculo</h1>
        <p style={{ color: "red" }}>{error || "Ocorreu um erro."}</p>
      </div>
    );
  }

  return (
    <div className="metodologia-container">
      <h1>Metodologia de Cálculo</h1>

      <p>
        Esta calculadora foi desenvolvida como parte da Atividade Prática
        Supervisionada (APS). Os cálculos são baseados em fatores de emissão
        específicos, fornecidos para o desenvolvimento deste projeto, que podem
        não refletir os dados de inventários nacionais ou internacionais mais
        recentes.
      </p>

      <p>
        O objetivo é estimar a pegada de carbono anual de um indivíduo com base
        em suas atividades de transporte, moradia e alimentação.
      </p>

      <p>A fórmula básica para cada item é:</p>
      <blockquote>
        <strong>
          Emissão Anual = (Quantidade da Atividade) × (Fator de Emissão) ×
          (Período de Anualização)
        </strong>
      </blockquote>

      <h2>🚗 Transporte</h2>
      <p>
        Para combustíveis (gasolina, diesel, etanol, gnv), o usuário informa o
        consumo <strong>mensal</strong>. O sistema multiplica esse valor por 12
        para encontrar a emissão anual. Para voos, o usuário informa o número de
        trechos por <strong>ano</strong>.
      </p>
      <ul className="fontes-lista">
        <li>
          <strong>Gasolina:</strong> {fatores.transporte.gasolina} kg CO₂e /
          litro
        </li>
        <li>
          <strong>Diesel:</strong> {fatores.transporte.diesel} kg CO₂ / litro
        </li>
        <li>
          <strong>Etanol:</strong> {fatores.transporte.etanol} kg CO₂e / litro
        </li>
        <li>
          <strong>GNV:</strong> {fatores.transporte.gnv} kg CO₂e / m³
        </li>
        <li>
          <strong>Voo Doméstico:</strong> {fatores.transporte.vooDomestico} kg
          CO₂e / trecho{" "}
          <span className="warning">
            (valor médio de emissão para simplificação dos cálculos)
          </span>
        </li>
        <li>
          <strong>Voo Internacional:</strong>{" "}
          {fatores.transporte.vooInternacional} kg CO₂e / trecho{" "}
          <span className="warning">
            (valor médio de emissão para simplificação dos cálculos)
          </span>
        </li>
      </ul>

      <h2>🏠 Moradia</h2>
      <p>
        Para eletricidade, gás (botijão ou encanado) e lixo, o usuário informa o
        consumo <strong>mensal</strong>. O sistema multiplica por 12 para
        anualizar. Para efluentes, utiliza-se um fator <strong>anual</strong>{" "}
        multiplicado pelo número de moradores da residência.
      </p>
      <ul className="fontes-lista">
        <li>
          <strong>Eletricidade:</strong> {fatores.moradia.kWh} kg CO₂e / kWh
        </li>
        <li>
          <strong>Gás de Botijão (GLP):</strong> {fatores.moradia.gasBotijao} kg
          CO₂e / kg
        </li>
        <li>
          <strong>Gás Encanado (GN):</strong> {fatores.moradia.gasEncanado} kg
          CO₂e / m³
        </li>
        <li>
          <strong>Lixo Comum:</strong> {fatores.moradia.lixoComum} kg CO₂e / kg
        </li>
        <li>
          <strong>Efluentes (Tratamento de Esgoto):</strong>{" "}
          {fatores.moradia.efluentes_per_capita} kg CO₂e / pessoa por ano
        </li>
      </ul>

      <h2>🍽️ Alimentação</h2>
      <p>
        Para carnes e ovos, o usuário informa o consumo <strong>semanal</strong>{" "}
        (em kg ou unidades). O sistema multiplica por 52 para encontrar o valor
        anual.
      </p>
      <p>
        Para arroz e feijão, o usuário informa o consumo <strong>diário</strong>{" "}
        (em colheres de sopa). O sistema converte para kg/ano usando as
        constantes (20g/colher de arroz; 25g/colher de feijão) antes de aplicar
        o fator de emissão.
      </p>
      <ul className="fontes-lista">
        <li>
          <strong>Carne Bovina:</strong> {fatores.alimentacao.carneBovina} kg
          CO₂e / kg
        </li>
        <li>
          <strong>Carne Suína:</strong> {fatores.alimentacao.carneSuina} kg CO₂e
          / kg
        </li>
        <li>
          <strong>Carne de Frango:</strong> {fatores.alimentacao.carneFrango} kg
          CO₂e / kg
        </li>
        <li>
          <strong>Ovos:</strong> {fatores.alimentacao.ovos} kg CO₂e / unidade
        </li>
        <li>
          <strong>Arroz:</strong> {fatores.alimentacao.arroz} kg CO₂e / kg
        </li>
        <li>
          <strong>Feijão:</strong> {fatores.alimentacao.feijao} kg CO₂e / kg
        </li>
      </ul>

      <h3>Fontes de Referência</h3>
      <p>
        Os fatores de emissão utilizados neste projeto foram adaptados e
        compilados a partir das seguintes fontes de referência:
      </p>
      <ul className="fontes-lista">
        <li>
          <a
            href="https://seeg.eco.br/wp-content/uploads/2023/12/SEEG-NM-CALCULADORA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>SEEG:</strong> Sistema de Estimativas de Emissões de Gases
            de Efeito Estufa.
          </a>
        </li>
        <li>
          <a
            href="https://semove.org.br/wp-content/themes/semove/pdf/carbonometro.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Carbonômetro (SEMOVE):</strong>
          </a>
        </li>
        <li>
          <a
            href="https://www.science.org/doi/10.1126/science.aaq0216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Artigo (Science):</strong> "Reducing food’s environmental
            impacts through producers and consumers" (J. Poore & T. Nemecek,
            2018).
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MetodologiaPagina;
