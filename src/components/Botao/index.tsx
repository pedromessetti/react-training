//Importação dos estilos
import style from './Botao.module.scss'


//Interface para tipar as props recebidas
interface Props {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

//Cria e exporta o componente da linha, indicando que suas props estão tipadas na interface Props
export default function Botao({ onClick, type, children }: Props) {

  return (
    <button
      type={type}
      className={style.botao}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
