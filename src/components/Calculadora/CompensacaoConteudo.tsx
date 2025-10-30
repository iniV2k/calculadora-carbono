import type { CarbonoOutputData } from "../../types";
import "./CompensacaoConteudo.css";

interface Props {
  resultados: CarbonoOutputData;
}

const PRECO_TONELADA_CO2_BRL = 60;
const CO2_ABSORVIDO_ARVORE_ANO_KG = 22;

export const CompensecaoConteudo: React.FC<Props> = ({ resultados }) => {
  const { totalCo2 } = resultados;
  const totalEmToneladas = totalCo2 / 1000;
  const custoCompensacao = totalEmToneladas * PRECO_TONELADA_CO2_BRL;
  const arvoresNecessarias = Math.ceil(totalCo2 / CO2_ABSORVIDO_ARVORE_ANO_KG);

  return (
    <div className="compensacao-container">
      <p
        className="compensacao-summary"
        style={{
          fontSize: "1.1rem",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Sua pegada de carbono anual é de{" "}
        <strong>{totalCo2.toFixed(2)} kg CO₂e</strong> (ou{" "}
        {totalEmToneladas.toFixed(2)} toneladas).
      </p>
      <p>
        Existem duas formas principais de lidar com isso: **Redução** e
        **Compensação**.
      </p>

      <div className="compensacao-card">
        <h4 className="compensacao-card-title">
          🌳 1. Compensação (Comprar Créditos ou Plantar)
        </h4>
        <p>
          Você pode "neutralizar" suas emissões apoiando projetos ambientais que
          removem ou evitam a emissão de CO₂ na atmosfera.
        </p>
        <ul>
          <li>
            <strong>Financeiramente:</strong> Custaria cerca de{" "}
            <strong>R$ {custoCompensacao.toFixed(2)} por ano</strong> para
            comprar créditos de carbono certificados. (Baseado em um valor
            estimado de R$ {PRECO_TONELADA_CO2_BRL}/tonelada).
          </li>
          <li>
            <strong>Plantando Árvores:</strong> Seria necessário plantar e
            manter <strong>{arvoresNecessarias} árvores</strong>
            (considerando que cada uma absorve em média{" "}
            {CO2_ABSORVIDO_ARVORE_ANO_KG} kg de CO₂ por ano).
          </li>
        </ul>
        <p>
          <small>
            Onde compensar? Procure por organizações certificadas como SOS Mata
            Atlântica, Carbon Free ou iniciativas internacionais.
          </small>
        </p>
      </div>

      <div className="compensacao-card">
        <h4 className="compensacao-card-title">
          📉 2. Redução (O Mais Efetivo)
        </h4>
        <p>
          A forma mais eficaz de diminuir sua pegada é mudar hábitos. Baseado
          nos seus resultados, seus maiores vilões foram:
        </p>
        <ol className="top-emitter-list">
          {resultados.topEmitters.map((emitter) => (
            <li key={emitter.nome}>
              <strong>{emitter.nome}</strong> ({emitter.co2.toFixed(1)} kg/ano)
            </li>
          ))}
        </ol>
        <p>Tente focar em reduzir o consumo desses itens!</p>
      </div>
    </div>
  );
};
