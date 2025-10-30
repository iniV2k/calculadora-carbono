import { useEffect, useState } from "react";
import type { AlimentacaoInputs } from "../../types";
import "./Form.css";

interface Props {
  data: AlimentacaoInputs;
  onChange: (key: string, value: number) => void;
}

const mapNumbersToString = (data: AlimentacaoInputs) => {
  return (Object.keys(data) as Array<keyof AlimentacaoInputs>).reduce(
    (acc, key) => {
      const value = data[key];
      acc[key] = value === 0 ? "" : String(value);
      return acc;
    },
    {} as { [K in keyof AlimentacaoInputs]: string }
  );
};

export const AlimentacaoForm: React.FC<Props> = ({ data, onChange }) => {
  const [localValues, setLocalValues] = useState(mapNumbersToString(data));
  useEffect(() => {
    let isOutOfSync = false;
    for (const key of Object.keys(data) as Array<keyof AlimentacaoInputs>) {
      const localString = (localValues[key] || "").replace(",", ".");
      const localAsNumber = parseFloat(localString) || 0;
      const parentNumber = data[key];
      if (parentNumber !== localAsNumber) {
        isOutOfSync = true;
        break;
      }
      if (isOutOfSync) {
        setLocalValues(mapNumbersToString(data));
      }
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const regex = /^[0-9]*[.,]?[0-9]*$/;
    if (!regex.test(value)) {
      return;
    }

    setLocalValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    const standardizedValue = value.replace(",", ".");
    const numericValue = parseFloat(standardizedValue) || 0;
    onChange(name, numericValue);
  };

  return (
    <fieldset>
      <legend>🍽️ Alimentação</legend>
      <div>
        <label>Quantas colheres de sopa de arroz você consome por dia:</label>
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          name="arroz"
          value={localValues.arroz}
          onChange={handleChange}
          min={0}
          placeholder="0"
          step="any"
        />
      </div>
      <div>
        <label>Quantas colheres de sopa de feijão você consome por dia:</label>
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          name="feijao"
          value={localValues.feijao}
          onChange={handleChange}
          min={0}
          placeholder="0"
          step="any"
        />
      </div>
      <div>
        <label>Quanto de carne bovina consome por semana (em kg):</label>
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          name="carneBovina"
          value={localValues.carneBovina}
          onChange={handleChange}
          min={0}
          placeholder="0"
          step="any"
        />
      </div>
      <div>
        <label>Quantas carne suína consome por semana (em kg):</label>
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          name="carneSuina"
          value={localValues.carneSuina}
          onChange={handleChange}
          min={0}
          placeholder="0"
          step="any"
        />
      </div>
      <div>
        <label>Quanto de carne de frango consome por semana (em kg):</label>
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          name="carneFrango"
          value={localValues.carneFrango}
          onChange={handleChange}
          min={0.0}
          placeholder="0"
          step="any"
        />
      </div>
      <div>
        <label>Quantos ovos consome por semana (unidades):</label>
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          name="ovos"
          value={localValues.ovos}
          onChange={handleChange}
          min={0}
          placeholder="0"
          step="any"
        />
      </div>
    </fieldset>
  );
};
