//Importação dos estilos
import style from './Cabecalho.module.scss'

//Importação do path da logo
import logo from './logo.svg'


//Cria e exporta o componente cabeçalho
export default function Cabecalho() {
    
    return (
        <header>
            <img src={logo} className={style.logo} alt="Logo do React girando" />
            <h1>Treino React</h1>
        </header>
    )
}
