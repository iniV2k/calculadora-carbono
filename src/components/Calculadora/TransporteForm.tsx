import type { TransporteInputs } from "../../types";
import "./Form.css";

interface Props {
  data: TransporteInputs;
  onChange: (key: string, value: number) => void;
}

export const TransporteForm: React.FC<Props> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, parseFloat(value) || 0);
  };

  return (
    <fieldset>
      <legend>🚗 Transporte</legend>
      <div>
        <label>Gasolina (litros/mês):</label>
        <input
          type="number"
          name="gasolina"
          value={data.gasolina || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>Etanol (litros/mês):</label>
        <input
          type="number"
          name="etanol"
          value={data.etanol || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>Diesel (litros/mês):</label>
        <input
          type="number"
          name="diesel"
          value={data.diesel || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>GNV (M³/mês):</label>
        <input
          type="number"
          name="gnv"
          value={data.gnv || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>Viagens domésticas (anual):</label>
        <input
          type="number"
          name="vooDomestico"
          value={data.vooDomestico || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>Viagens internacioanais (Anual):</label>
        <input
          type="number"
          name="vooInternacional"
          value={data.vooInternacional || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
    </fieldset>
  );
};
