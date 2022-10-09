import React from "react";
import './Linha.css'

const Linha = ({ exercicio, repeticoes, cargas }) => {
    return (
        <div className="exercicio">
            <p>{exercicio}</p>
            <p>{repeticoes}</p>
            <p>{cargas}</p>
        </div>
    )
}

export default Linha
