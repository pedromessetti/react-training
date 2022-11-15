//Importação dos estilos
import style from './CampoTexto.module.scss'

//Importação da interface do input padrão para tipagem das props recebidas
import { inputPadrao } from 'types/inputPadrao'

//Importação da biblioteca classnames
import classNames from 'classnames'


//Cria e exporta o componente da linha, indicando que suas props estão tipadas na interface inputPadrao
export default function CampoTexto({ label, name, type, placeholder, required, value, setValue }: inputPadrao) {

    return (
        <div className={style.campoTexto}>
            <label
                htmlFor={name}
                className={classNames({
                    [style.label]: label, //Sempre que houver uma label está classe será usada
                    [style.label__numero]: label && type === 'number', //Sempre que houver uma label e o type do input for number está classe será usada
                })}
            >
                {label}
            </label>
            <input
                value={value}
                onChange={(evento) => setValue(evento.target.value)}
                required={required}
                placeholder={placeholder}
                type={type}
                name={name}
                className={classNames({
                    [style.input]: true, //Está classe sempre será usada
                    [style.input__numero]: type === 'number', //Está classe será usada caso o type do input seja number 
                    [style.input__texto]: type === 'text', //Está classe será usada caso o type do input seja text 
                })}
            />
        </div>
    )
}
