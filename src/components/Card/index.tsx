//Importação dos estilos
import style from './Card.module.scss'

//Importação do componente
import Linha from './Linha'

//Importação da interface ILinha para tipagem das props recebidas
import { ILinha } from 'types/ILinha'
import classNames from 'classnames'


//Interface para tipar as props recebidas
interface Props {
    linhas: ILinha[], //variável linhas é um array de ILinha
    nomeDoTreino: string
}

//Cria e exporta o componente da linha, indicando que suas props estão tipadas na interface Props
export default function Card({ linhas, nomeDoTreino }: Props) {

    return (
        //Retorno conforme o operador ternário, se existir ao menos 1 array de itens na váriavel linhas o componente retorna o card, se não ele retorna um Fragment sem nenhum conteúdo
        (linhas.length > 0) ?
            <section className={style.card}>
                <h2>Treino de {nomeDoTreino}</h2>
                <div className={classNames({
                    [style.card__header]: true,
                    'animate__animated animate__fadeInDown': true
                })}
                >
                    <span></span>
                    <h3>Exercício</h3>
                    <h3>Series</h3>
                    <h3>Cargas</h3>
                    <h3>Descanso</h3>
                </div>
                <div className={style.card__linhas}>
                    {linhas.map((linha) => //Itera sobre o array de linhas e retorna um component Linha passando como props os itens do array de linha e seus respectivos valores
                        <Linha
                            key={linha.id}
                            id={linha.id}
                            linhaSalva={linha}
                        />
                    )}
                </div>
            </section>
            :
            <>
            </>
    )
}
