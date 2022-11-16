//Importação dso estilos
import style from './Formulario.module.scss'

//Importação do Hook useState
import { useState } from 'react'

//Importação da interface ILinha
import { ILinha } from '../../types/ILinha'

//Importação dos components
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

//Importação do id aleatório da linha do exercício
import { v4 as uuidv4 } from 'uuid'

//Interface para tipar as props recebidas
interface Props {
    selecionarTreino: string[],
    setLinhas: React.Dispatch<React.SetStateAction<ILinha[]>>
}

//Cria e exporta o componente da linha, indicando que suas props estão tipadas na interface Props
export default function Formulario({ selecionarTreino, setLinhas }: Props) {

    //Cria as variáveis que irão armazenar o valor de cada elemento para serem usadas em outros componenets, estado inicial vazio
    const [treino, setTreino] = useState("")
    const [exercicio, setExercicio] = useState("")
    const [repeticoes, setRepeticoes] = useState("")
    const [series, setSeries] = useState("")
    const [cargas, setCargas] = useState("")
    //Estado inicial definido como um tempo de 00:00
    const [tempo, setTempo] = useState("00:00")

    //Função que será executado ao submeter o formulário
    function aoSalvar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault() //Previne o comportamento padrão do navegador para podermos trabalhar com os dados das variáveis

        //Seta a linha como um array onde o primeiro elemento é um espalhamento da própria linha e o segundo elemento é um objeto contendo as variáveis do treino com seus valores definidos pelo usuário
        setLinhas((linha) =>
        [
                ...linha,
                {
                    treino,
                    exercicio,
                    repeticoes,
                    series,
                    cargas,
                    tempo,
                    id: uuidv4() //Cria um id aleátorio para cada linha
                }
            ]
        )
        //Após criar a linha retornamos para os valores iniciais das variáveis
        setTreino('')
        setExercicio('')
        setRepeticoes('')
        setSeries('')
        setCargas('')
        setTempo('00:00')
    }

    return (
        <section className={style.formulario}>
            <form onSubmit={aoSalvar}>
                <h2>Monte seu Treino React</h2>
                <ListaSuspensa
                    value={treino}
                    setValue={setTreino}
                    itens={selecionarTreino}
                    required
                />
                <CampoTexto
                    name='exercicio'
                    value={exercicio}
                    setValue={setExercicio}
                    type='text'
                    placeholder='Digite o nome do exercício'
                    required
                />
                <CampoTexto
                    label='Quantas series?'
                    name='series'
                    value={series}
                    setValue={setSeries}
                    type='number'
                    placeholder='3'
                    required
                />
                <CampoTexto
                    name='repeticoes'
                    value={repeticoes}
                    setValue={setRepeticoes}
                    type='text'
                    placeholder='Digite as repetições da serie'
                    required
                />
                <CampoTexto
                    name='cargas'
                    value={cargas}
                    setValue={setCargas}
                    type='text'
                    placeholder='Digite o peso das cargas'
                    required
                />
                <CampoTexto
                    label='Descanso de'
                    value={tempo}
                    setValue={setTempo}
                    name='tempo'
                    type='time'
                    required={false}
                />
                <Botao type='submit'>Adicionar</Botao>
            </form>
        </section>
    )
}
