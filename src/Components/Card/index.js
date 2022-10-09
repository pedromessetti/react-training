import React from "react";
import Linha from "../Linha";
import './Card.css'

const Card = (props) => {
    return (
        (props.linhas.length > 0) ?
            <section className="card">
                <h2>Treino de {props.nomeDoTreino}</h2>
                <div className="card-header">
                    <h3>Exercícios</h3>
                    <h3>Repetições</h3>
                    <h3>Cargas</h3>
                </div>

                {props.linhas.map(linha =>
                    <Linha
                        key={linha.exercicio}
                        exercicio={linha.exercicio}
                        repeticoes={linha.repeticoes}
                        cargas={linha.cargas}
                    />
                )}
            </section>
            : ""
    )
}

export default Card
