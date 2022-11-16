//Importação dos estilos
import style from './Linha.module.scss'

//Importação do componente
import Cronometro from 'components/Cronometro'

//Importação da interface ILinha para tipagem das props recebidas
import { ILinha } from 'types/ILinha'

//Importação dos ícones de lixeira e de check do pacote React Icons
import { BsFillTrashFill } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'

import { useState } from 'react'
import classNames from 'classnames'


interface Props extends ILinha {
  linhaSalva: ILinha
}

//Cria e exporta o componente da linha, indicando que suas props estão tipadas na interface ILinha
export default function Linha({ linhaSalva }: Props) {

  const [exercicioFinalizado, setExercicioFinalizado] = useState(false)
  
  const [removeLinha, setRemoveLinha] = useState(false)

  function chamaCronometro() {
    switch (exercicioFinalizado) {
      case true:
        return (
          <div className={style["linha__container"]}>
            Finalizado
            <AiOutlineCheck />
          </div>
        )
      case false:
        return (
          <Cronometro
            setExercicioFinalizado={setExercicioFinalizado}
            id={`tempoExercicio: ${linhaSalva.exercicio}`}
            series={linhaSalva.series}
            tempo={linhaSalva.tempo}
          />
        )
    }
  }

  return (
    (removeLinha) ? <></> :
    <div
      className={classNames({
        [style.linha]: true,
        'animate__animated animate__fadeInDown': true,
        [style["linha--concluida"]]: exercicioFinalizado
      })}
      key={linhaSalva.id}
    >
      <BsFillTrashFill
        onClick={() => setRemoveLinha(true)}
        className={style.linha__trash}
      />
      <p>{linhaSalva.exercicio}</p>
      <p>{linhaSalva.series} x {linhaSalva.repeticoes}</p>
      <p>{linhaSalva.cargas}</p>
      {chamaCronometro()}
    </div>
  )
}
