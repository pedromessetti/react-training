import React, { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [treino, setTreino] = useState('')
    const [exercicio, setExercicio] = useState('')
    const [repeticoes, setRepeticoes] = useState('')
    const [cargas, setCargas] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.linhaCadastrada({
            treino,
            exercicio, 
            repeticoes, 
            cargas
        })
        setTreino('')
        setExercicio('')
        setRepeticoes('')
        setCargas('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <ListaSuspensa
                    obrigatorio={true}
                    label="Selecione o treino"
                    itens={props.selecionarTreino}
                    valor={treino}
                    aoAlterado={valor => setTreino(valor)}
                 />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome do exercício"
                    placeholder="Ex: Supino Reto HBC"
                    valor={exercicio}
                    aoAlterado={valor => setExercicio(valor)}
                />
                <CampoTexto 
                    label="Quantas repetições?" 
                    placeholder="Ex: 12/ 10 / 8"
                    valor={repeticoes}
                    aoAlterado={valor => setRepeticoes(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargas" 
                    placeholder="Ex: 20Kg / 25Kg / 30Kg"
                    valor={cargas}
                    aoAlterado={valor => setCargas(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario
