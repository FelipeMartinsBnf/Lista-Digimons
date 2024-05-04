import { Filtro } from './styles'

type Props = {
  //Tipando os valores que recebemos do Header
  nomeFiltro: string
  mudarFiltro: (filtro: string) => void
  filtroAtual: string
}

const BtnFiltro = ({ nomeFiltro, mudarFiltro, filtroAtual }: Props) => {
  //verificar se o botão de filtro está ativado
  let ativado = false
  if (filtroAtual == nomeFiltro) {
    ativado = true
  }

  return (
    <Filtro
      $ativo={ativado}
      onClick={() => {
        //Quando clicar no botão o nome filtro é setado como o nome do botão(que recebemos do Header)
        mudarFiltro(nomeFiltro)
      }}
    >
      {nomeFiltro}
    </Filtro>
  )
}

export default BtnFiltro
