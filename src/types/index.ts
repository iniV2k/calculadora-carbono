export interface MoradiaInputs {
  kWh: number;
  gasBotijao: number;
  gasEncanado: number;
  lixoComum: number;
  moradores: number;
}

export interface TransporteInputs {
  gasolina: number;
  etanol: number;
  diesel: number;
  gnv: number;
  vooDomestico: number;
  vooInternacional: number;
}

export interface AlimentacaoInputs {
  carneBovina: number;
  carneSuina: number;
  carneFrango: number;
  arroz: number;
  feijao: number;
  ovos: number;
}

export interface CarbonoInputData {
  moradia: MoradiaInputs;
  transporte: TransporteInputs;
  alimentacao: AlimentacaoInputs;
}

export interface MoradiaBreakdown {
  total: number;
  eletricidadeCo2: number;
  gasBotijaoCo2: number;
  gasEncanadoCo2: number;
  lixoComumCo2: number;
  efluentesCo2: number;
}

export interface TransporteBreakdown {
  total: number;
  gasolinaCo2: number;
  etanolCo2: number;
  dieselCo2: number;
  gnvCo2: number;
  vooDomesticoCo2: number;
  vooInternacionalCo2: number;
}

export interface AlimentacaoBreakdown {
  total: number;
  carneBovinaCo2: number;
  carneSuinaCo2: number;
  carneFrangoCo2: number;
  arrozCo2: number;
  feijaoCo2: number;
  ovoCo2: number;
}

export interface TopEmitter {
  nome: string;
  co2: number;
}

export interface CarbonoOutputData {
  totalCo2: number;
  breakdown: {
    transporte: TransporteBreakdown;
    alimentacao: AlimentacaoBreakdown;
    moradia: MoradiaBreakdown;
  };
  topEmitters: TopEmitter[];
}

export interface FatoresTransporte {
  gasolina: number;
  diesel: number;
  etanol: number;
  gnv: number;
  vooDomestico: number;
  vooInternacional: number;
}

export interface FatoresMoradia {
  kWh: number;
  lixoComum: number;
  efluentes_per_capita: number;
  gasBotijao: number;
  gasEncanado: number;
}

export interface FatoresAlimentacao {
  carneBovina: number;
  carneSuina: number;
  carneFrango: number;
  arroz: number;
  feijao: number;
  ovos: number;
}

export interface FatoresOutputData {
  transporte: FatoresTransporte;
  moradia: FatoresMoradia;
  alimentacao: FatoresAlimentacao;
}