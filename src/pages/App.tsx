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

  //Cria a variável linhas que irá armazenar os valores de todas as linhas dos Card para serem usadas em outros componenets, com o valor inicial de um array vazio e o tipo das linhas é um array dos tipos definidos em ILinha
  const [linhas, setLinhas] = useState<ILinha[]>([])

  return (
    <>
      <Cabecalho />
      <main>
        <div>
          <Formulario
            selecionarTreino={treinos.map( //Itera sobre os treinos no arquivo JSON e retona o nome dos treinos
              treino => treino.nome
            )}
            setLinhas={setLinhas}
          />
        </div>
        <div>
          {treinos.map((treino) => //Itera sobre os treinos no arquivo JSON e retorna um component Card
            <Card 
              key={treino.nome}
              nomeDoTreino={treino.nome}
              linhas={linhas.filter(
                linhas => linhas.treino === treino.nome //Filtra as linhas pelo nome do treino
              )}
            />
          )}
        </div>
      </main>
    </>
  )
}
