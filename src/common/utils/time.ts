export function tempoParaSegundos(tempo: string) {
    const [minutos = '0', segundos = '0'] = tempo.split(':')

    const minutosParaSegundos = Number(minutos) * 60

    return minutosParaSegundos + Number(segundos)
}