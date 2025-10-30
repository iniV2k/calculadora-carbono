export const SobreCo2: React.FC = () => {
  return (
    <div className="metodologia-container">
      <h1>O que é CO₂?</h1>
      <p>
        Entender o que é o dióxido de carbono (CO₂) e como ele afeta o planeta é
        o primeiro passo para combater as mudanças climáticas.
      </p>
      <h2>O que é Dióxido de Carbono (CO₂)?</h2>
      <p>
        O dióxido de carbono (CO₂) é um gás composto por um átomo de carbono e
        dois de oxigênio. Ele é um componente natural da atmosfera terrestre e
        desempenha um papel vital no planeta: as plantas o utilizam para a
        fotossíntese, processo que libera oxigênio.
      </p>
      <p>
        O problema não é o CO₂ em si, mas sim a sua{" "}
        <strong>quantidade excessiva</strong>. Desde a Revolução Industrial,
        atividades humanas — principalmente a queima de combustíveis fósseis
        (carvão, petróleo e gás natural) — têm liberado volumes imensos de CO₂
        na atmosfera, muito mais rápido do que os processos naturais (como
        florestas e oceanos) conseguem absorver.
      </p>

      <h2>O Efeito Estufa e o Aquecimento Global</h2>
      <p>
        O CO₂ é o principal "Gás de Efeito Estufa" (GEE). O efeito estufa é um
        fenômeno natural: esses gases formam uma espécie de "cobertor" em torno
        da Terra, prendendo parte do calor do sol e mantendo o planeta aquecido
        o suficiente para a vida existir.
      </p>
      <p>
        O problema é que, ao adicionar mais CO₂ ao "cobertor", ele se torna mais
        espesso. Isso intensifica o efeito estufa, prendendo calor em excesso e
        causando o que conhecemos como <strong>Aquecimento Global</strong>.
      </p>
      <h3>Principais Efeitos do Excesso de CO₂:</h3>
      <ul className="fontes-lista">
        <li>
          <strong>Aumento das Temperaturas:</strong> Ondas de calor mais 
          frequentes e intensas.
        </li>
        <li>
          <strong>Derretimento do Gelo:</strong> O aquecimento derrete geleiras 
          e calotas polares, contribuindo diretamente para o aumento do nível do mar.
        </li>
        <li>
          <strong>Eventos Climáticos Extremos:</strong> Aumento na frequência 
          e intensidade de furacões, secas severas, inundações e incêndios florestais.
        </li>
        <li>
          <strong>Acidificação dos Oceanos:</strong> O oceano absorve 
          cerca de 25% do CO₂ que emitimos. Isso reage com a água, tornando-a 
          mais ácida, o que ameaça corais, moluscos e todo o ecossistema marinho.
        </li>
      </ul>

      <h2>O que é "Pegada de Carbono"?</h2>
      <p>
        A <strong>pegada de carbono</strong> é uma forma de medir o impacto 
        que nossas atividades têm sobre o aquecimento global. Ela representa o 
        volume total de gases de efeito estufa (GEE) — medidos em 
        CO₂-equivalente — que são emitidos direta ou indiretamente por 
        uma pessoa, organização, evento ou produto.
      </p>
      <p>
        Ao usar esta calculadora, você está medindo sua pegada de carbono 
        pessoal. O primeiro passo para reduzir seu impacto é entender 
        qual ele é.
      </p>
    </div>
  );
};

export default SobreCo2;
