import logo from './logo.svg'
import style from './cabecalho.module.scss'


export default function Cabecalho() {
    return (
        <header>
            <img src={logo} className={style.logo} alt="React logo girando" />
            <h1>Treino React</h1>
        </header>
    )
}
