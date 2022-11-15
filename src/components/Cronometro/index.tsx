//Importação dos estilos
import style from './Cronometro.module.scss'

//Importação da interface ILinha para tipagem das props recebidas
import { ILinha } from "types/ILinha"

//Importação do Hook useState
import { useState } from "react"

//Importação da função de conversão do tempo recebido para segundos
import { tempoParaSegundos } from "common/utils/time"

//Importação do ícone de Play do pacote React Icons
import { BsFillPlayFill } from 'react-icons/bs'


//Cria e exporta o componente do cronometro, indicando que suas props estão tipadas na interface ILinha
export default function Cronometro({ series, tempo }: ILinha) {

    //Cria a variável cronômetro com o valor inicial da prop tempo convertidos em segundos
    const [cronometro, setCronometro] = useState(tempoParaSegundos(String(tempo)))
    //Cria a variável repetir com o valor inicial da prop series convertida para um tipo number
    const [repetir, setRepetir] = useState(Number(series))

    //Variável que define os minutos através de operações matemáticas
    const minutos = Math.floor(cronometro / 60)
    const minutoDezena = Math.floor(minutos / 10)
    const minutoUnidade = minutos % 10
    //Variável que define os segundos através de operações matemáticas
    const segundos = cronometro % 60
    const segundoDezena = Math.floor(segundos / 10)
    const segundoUnidade = segundos % 10

    //Função que faz a regressão do cronômetro
    function regressiva(cronometro: number = 0) { //Define que o parâmetro cronometro será do tipo number
        if (repetir > 0) {
            setTimeout(() => { //Método que faz a regressão do cronometro
                if (cronometro > 0) { //Se o cronometro for maior que 0
                    setCronometro(cronometro - 1) //Variável cronometro terá o valor do cronometro menos 1
                    return regressiva(cronometro - 1) //Retorna a própria função com o valor do cronometro menos 1 para ser executada novamente até que o contador seja zerado
                }
                setRepetir(Number(repetir) - 1)
                setCronometro(tempoParaSegundos(String(tempo)))
                window.alert("Descanso finalizado. Hora de voltar a treinar!!")
            }, 1000) //O método setTimeout será executado de 1 segundo a 1 segundo (1000ms)
        }
    }

    return (
        //Retorno conforme o operador ternário, se o cronômetro tiver de se repetir, retorna-se o cronômetro, se não ele retorna uma div indicando para o usuário que o exercício foi finalizado
        (repetir > 0) ?
        <div className={style.cronometro}>
                <span>{minutoDezena}</span>
                <span>{minutoUnidade}</span>
                <span> : </span>
                <span>{segundoDezena}</span>
                <span>{segundoUnidade}</span>
                
                <BsFillPlayFill 
                    className={style.cronometro__icone}
                    onClick={() => regressiva(cronometro)} //Ao clicar no ícone de play a função regressiva será chamada e terá como parâmetro o tempo do cronômetro
                />
        </div>
        :
        <div>
            Exercício Finalizado
        </div>
    )
}

