import axios from "axios";
import type {
  CarbonoInputData,
  CarbonoOutputData,
  FatoresOutputData,
} from "../types";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const calcularPegadaCarbono = async (
  data: CarbonoInputData
): Promise<CarbonoOutputData> => {
  try {
    const response = await apiClient.post<CarbonoOutputData>("/api/calcular", data);
    return response.data;
  } catch (error) {
    console.error("Api error: ", error);
    throw new Error("Falha ao calcular sua pegada de carbono.");
  }
};

export const getFatoresEmissao = async (): Promise<FatoresOutputData> => {
  const response = await fetch(`${API_BASE_URL}/api/fatores`);
  if (!response.ok) {
    throw new Error("Erro ao buscar fatores de emissão");
  }

  return response.json();
};
