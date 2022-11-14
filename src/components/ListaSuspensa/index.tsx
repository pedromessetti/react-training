import style from './ListaSuspensa.module.scss'

interface Props {
    label?: string,
    required: boolean, 
    itens: string[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function ListaSuspensa({ label, value, required, itens, setValue }: Props) {

    return (
        <div className={style.lista}>
            <label>{label}</label>
            <select 
                onChange={(evento) => setValue(evento.target.value)}
                required={required} 
                value={value} 
            >
                <option 
                    value="" 
                    className={style.primeiraOpcao}
                >
                    -- Selecione um treino --
                </option>
                {itens.map((item, index) => {
                    return <option key={index} >{item}</option>
                })}
            </select>
        </div>
    )
}
