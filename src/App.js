import React, { useState } from 'react';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import Card from './Components/Card';

const App = () => {

  const treinos = [
    {
      nome: 'Peito'
    },
    {
      nome: 'Tríceps'
    },
    {
      nome: 'Costas'
    },
    {
      nome: 'Bíceps'
    },
    {
      nome: 'Perna'
    },
    {
      nome: 'Ombro'
    },
    {
      nome: 'Abdômen'
    }
  ]

  const [linhas, setLinhas] = useState([])

  const novaLinha = (linha) => {
    setLinhas([...linhas, linha])
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <Formulario selecionarTreino={treinos.map(treino => treino.nome)} linhaCadastrada={linha => novaLinha(linha)}/>
        </div>
        <div>
          {treinos.map(treino => 
            <Card 
              key={treino.nome}
              nomeDoTreino={treino.nome}
              linhas={linhas.filter(linha => linha.treino === treino.nome)}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
