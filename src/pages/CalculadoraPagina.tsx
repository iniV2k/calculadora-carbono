import { useState } from "react";
import type {
  AlimentacaoInputs,
  CarbonoInputData,
  CarbonoOutputData,
  MoradiaInputs,
  TransporteInputs,
} from "../types";
import { TransporteForm } from "../components/Calculadora/TransporteForm";
import { AlimentacaoForm } from "../components/Calculadora/AlimentacaoForm";
import { MoradiaForm } from "../components/Calculadora/MoradiaForm";
import { calcularPegadaCarbono } from "../services/api";
import { Resultados } from "../components/Calculadora/Resultados";
import { Modal } from "../components/common/Modal";
import { CompensecaoConteudo } from "../components/Calculadora/CompensacaoConteudo";
import "./CalculadoraPagina.css";

const initialState: CarbonoInputData = {
  transporte: {
    gasolina: 0,
    diesel: 0,
    etanol: 0,
    gnv: 0,
    vooDomestico: 0,
    vooInternacional: 0,
  },
  alimentacao: {
    carneBovina: 0,
    carneSuina: 0,
    carneFrango: 0,
    arroz: 0,
    feijao: 0,
    ovos: 0,
  },
  moradia: {
    moradores: 1,
    gasBotijao: 0,
    gasEncanado: 0,
    kWh: 0,
    lixoComum: 0,
  },
};

export const CalculadoraPagina: React.FC = () => {
  const [formData, setFormData] = useState<CarbonoInputData>(initialState);
  const [result, setResult] = useState<CarbonoOutputData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormChange = (
    category: keyof CarbonoInputData,
    key: string,
    value: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiResult = await calcularPegadaCarbono(formData);
      setResult(apiResult);
    } catch (err) {
      setError("Houve um erro ao se comunicar com o servidor. Tente novamete");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setResult(null);
    setError(null);
  };

  return (
    <>
      <div className="calculadora-layout">
        <section className="form-column">
          <form onSubmit={handleSubmit}>
            <h2>Calcule sua pegada de carbono</h2>
            <TransporteForm
              data={formData.transporte}
              onChange={(key: string, value: number) =>
                handleFormChange(
                  "transporte",
                  key as keyof TransporteInputs,
                  value
                )
              }
            />
            <AlimentacaoForm
              data={formData.alimentacao}
              onChange={(key: string, value: number) =>
                handleFormChange(
                  "alimentacao",
                  key as keyof AlimentacaoInputs,
                  value
                )
              }
            />
            <MoradiaForm
              data={formData.moradia}
              onChange={(key: string, value: number) =>
                handleFormChange("moradia", key as keyof MoradiaInputs, value)
              }
            />
            <div className="button-group">
              <button
                type="submit"
                className="button-primary"
                disabled={isLoading}
              >
                {isLoading ? "Calculando..." : "Calcular pegada"}
              </button>
              <button
                type="button"
                className="button-secondary"
                onClick={handleReset}
                disabled={isLoading}
              >
                Limpar
              </button>
            </div>
          </form>
        </section>
        <section className="results-column">
          {isLoading && (
            <div>
              <p>Calculando...</p>
            </div>
          )}
          {error && (
            <div className="error-message">
              <h3>Oops!</h3>
              <p>{error}</p>
            </div>
          )}
          {result && (
            <div>
              <Resultados
                data={result}
                onOpenCompensacaoModal={() => setIsModalOpen(true)}
              />
            </div>
          )}
          {!isLoading && !error && !result && (
            <div>
              <h3 className="results-placeholder">Seu Resultado</h3>
              <p>Preencha os dados ao lado e clique em "Calcular".</p>
            </div>
          )}
        </section>
      </div>
      {result && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Como Compensar sua Pegada"
        >
          <CompensecaoConteudo resultados={result}></CompensecaoConteudo>
        </Modal>
      )}
    </>
  );
};
