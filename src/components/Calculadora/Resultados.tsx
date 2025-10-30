import type { CarbonoOutputData } from "../../types";

interface Props {
  data: CarbonoOutputData;
  onOpenCompensacaoModal: () => void;
}

export const Resultados: React.FC<Props> = ({
  data,
  onOpenCompensacaoModal,
}) => {
  return (
    <div className="results-container">
      <h3>Sua Pegada de Carbono Anual</h3>

      <div className="results-total">
        <strong>{data.totalCo2.toFixed(2)}</strong>
        <span>kg CO₂e / Ano</span>
      </div>

      <h4>Detalhamento por Categoria:</h4>
      <ul>
        <li>
          <strong>Transporte: </strong>
          {data.breakdown.transporte.total.toFixed(2)} kg CO₂e
        </li>
        <li>
          <strong>Alimentação: </strong>
          {data.breakdown.alimentacao.total.toFixed(2)} kg CO₂e
        </li>
        <li>
          <strong>Moradia: </strong>
          {data.breakdown.moradia.total.toFixed(2)} kg CO₂e
        </li>
      </ul>

      <h4>Principais Emissores:</h4>
      <ol>
        {data.topEmitters.map((emitter, index) => (
          <li key={index}>
            {emitter.nome}: {emitter.co2.toFixed(2)} kg CO₂e
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="button-primary"
        style={{ marginTop: "24px", width: "100%" }}
        onClick={onOpenCompensacaoModal}
      >
        Como posso compensar minha pegada?
      </button>
    </div>
  );
};
