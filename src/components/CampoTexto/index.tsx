import { inputPadrao } from '../../types/inputPadrao'
import style from './CampoTexto.module.scss'
import classNames from 'classnames'

export default function CampoTexto({ label, name, type, placeholder, required, value, setValue } : inputPadrao) {

    return (
        <div className={style.campoTexto}>
            <label 
                htmlFor={name} 
                className={classNames({
                    [style.label]: label,
                    [style.label__numero]: label && type === 'number',
                    [style.label__tempo]: label && type === 'time'
                })}
            >
                {label}
            </label>
            <input
                value={value}
                onChange={(evento) => setValue(evento.target.value) }
                required={required}
                placeholder={placeholder}
                type={type}
                name={name}
                className={ classNames({
                    [style.input]: true,
                    [style.input__numero]: type === 'number',
                    [style.input__texto]: type === 'text',
                    [style.input__tempo]: type === 'time'
                })}
            />
        </div>
    )
}

