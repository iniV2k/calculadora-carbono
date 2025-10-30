import type { MoradiaInputs } from "../../types";
import "./Form.css";

interface Props {
  data: MoradiaInputs;
  onChange: (key: string, value: number) => void;
}

export const MoradiaForm: React.FC<Props> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, parseFloat(value) || 0);
  };

  return (
    <fieldset>
      <legend>🏠 Moradia</legend>
      <div>
        <label>Quantas pessoas moram na sua casa:</label>
        <input
          type="number"
          name="moradores"
          value={data.moradores || ""}
          onChange={handleChange}
          min={1}
          placeholder="1"
        />
      </div>
      <div>
        <label>Consumo energético (kWh/mês)</label>
        <input
          type="number"
          name="kWh"
          value={data.kWh || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>Botijão de gás (botijões/mês)</label>
        <input
          type="number"
          name="gasBotijao"
          value={data.gasBotijao || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
      <div>
        <label>Gás encanado (m³/mês)</label>
        <input
          type="number"
          name="gasEncanado"
          value={data.gasEncanado || ""}
          onChange={handleChange}
          min={0}
          placeholder="0"
        />
      </div>
    </fieldset>
  );
};
