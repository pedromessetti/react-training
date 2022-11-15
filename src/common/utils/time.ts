//Cria e exporta a função que converte um tempo de minutos e segundos em apenas segundos
export function tempoParaSegundos(tempo: string) { //indica q o tempo recebido como parâmetro é do tipo string
    
    const [minutos = '0', segundos = '0'] = tempo.split(':') //Cria as variáveis de minutos e segundos a partir da separação pelo elemento ':' , caso alguma das variáveis não recebam nenhum valor seu valor será 0

    const minutosParaSegundos = Number(minutos) * 60 //Altera o tipo da variável minutos para o tipo Number e multiplica por 60, fazendo assim a conversão dos minutos para segundos

    return minutosParaSegundos + Number(segundos) //Retorno da função como sendo a soma das variáveis dos minutos convertidos em segundos e dos segundos convertidos para o tipo Number
}
