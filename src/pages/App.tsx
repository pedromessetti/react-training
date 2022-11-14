//Importação dos components
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Formulario from "components/Formulario";

//Importação so Hook useState
import { useState } from "react";

//Importação do nome dos treinos no arquivo .JSON
import treinos from './treinos.json';

//Importação da interface ILinha para tipagem das variáveis
import { ILinha } from "types/ILinha";


//Cria e exporta a página principal da aplicação
export default function App() {

  const [linhas, setLinhas] = useState<ILinha[]>([])

  return (
    <div className="App">
      <Cabecalho />
      <main>
        <div>
          <Formulario
            selecionarTreino={treinos.map(treino => treino.nome)}
            setLinhas={setLinhas}
          />
        </div>
        <div>
          {treinos.map((treino) => 
            <Card 
              key={treino.nome}
              nomeDoTreino={treino.nome}
              linhas={linhas.filter(linhas => linhas.treino === treino.nome)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
