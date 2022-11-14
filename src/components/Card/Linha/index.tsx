//Importação dos estilos
import style from './Linha.module.scss'

//Importação do componente
import Cronometro from 'components/Cronometro'

//Importação da interface ILinha para tipagem das props recebidas
import { ILinha } from 'types/ILinha'

//Importação do ícone de lixeira do pacote React Icons
import { BsFillTrashFill } from 'react-icons/bs'

//Importação do id aleatório da linha do exercício
import { v4 as uuidv4 } from 'uuid'


//Cria e exporta o componente da linha indicando que suas props estão tipadas na interface ILinha
export default function Linha({ exercicio, series, repeticoes, cargas, tempo }: ILinha) {

  function removeLinha() {
    console.log('Removendo linha')
  }

  return (
    <div className={style.exercicio} key={uuidv4()}>
        <BsFillTrashFill onClick={() => removeLinha()}/>
        <p>{exercicio}</p>
        <p>{series} x {repeticoes}</p>
        <p>{cargas}</p>
        <Cronometro
          series={series}
          tempo={tempo}
        />
    </div>
  )
}
