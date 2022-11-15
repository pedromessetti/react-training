//Importação dos estilos
import style from './Linha.module.scss'

//Importação do componente
import Cronometro from 'components/Cronometro'

//Importação da interface ILinha para tipagem das props recebidas
import { ILinha } from 'types/ILinha'

//Importação do ícone de lixeira do pacote React Icons
import { BsFillTrashFill } from 'react-icons/bs'


//Cria e exporta o componente da linha, indicando que suas props estão tipadas na interface ILinha
export default function Linha({ exercicio, series, repeticoes, cargas, tempo, id }: ILinha) {

  function removeLinha() {
    console.log('Removendo linha com o id:', id)
  }

  return (
    <div
      className={style.exercicio}
      key={id}
    >
      <BsFillTrashFill
        onClick={() => removeLinha()}
        className={style.exercicio__icone}
      />
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
