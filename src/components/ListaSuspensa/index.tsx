//Importação dos estilos
import style from './ListaSuspensa.module.scss'

//Importação da interface do input padrão para tipagem das props recebidas
import { inputPadrao } from 'types/inputPadrao'


//Interface Props + interface inputPadrao para tipar as variaveis 
interface Props extends inputPadrao {
    itens: string[]
}

//Cria e exporta o componente da drop down list, indicando que suas props estão tipadas na interface Props
export default function ListaSuspensa({ label, value, required, itens, setValue }: Props) {

    return (
        <div className={style.lista}>
            <label>{label}</label>
            <select 
                onChange={(evento) => setValue(evento.target.value)}
                required={required} 
                value={value} 
            >
                <option //Define que a primeira tag option terá um valor vazio
                    value="" 
                    className={style.primeiraOpcao}
                >
                    -- Selecione um treino --
                </option>
                {itens.map((item) => //Itera sobre os itens e retorna uma tag option para cada item
                    <option key={item} >{item}</option>
                )}
            </select>
        </div>
    )
}
