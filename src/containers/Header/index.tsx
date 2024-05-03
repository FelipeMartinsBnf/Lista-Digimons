import Digimonlogo from '../../Logo.png' // Importa o logo dos Digimons
import { Mcontainer } from '../../styles' // Importa um componente de estilo
import {
  BarraPesquisa,
  Logo,
  Divbtns,
  Btnfiltro,
  Divbtnswrapper
} from './styles' // Importa componentes estilizados

/**
 * Componente Header.
 * Exibe o cabeçalho da aplicação, incluindo o logo dos Digimons, uma barra de pesquisa e filtros.
 */
const Header = () => {
  return (
    <Mcontainer>
      <Logo src={Digimonlogo} alt="Digimon Logo" />
      <Divbtnswrapper>
        <BarraPesquisa type="text" placeholder="Buscar" />
        <Divbtns>
          <Btnfiltro>Todos</Btnfiltro>
          <Btnfiltro>Fresh</Btnfiltro>
          <Btnfiltro>In Training</Btnfiltro>
          <Btnfiltro>Rookie</Btnfiltro>
          <Btnfiltro>Champion</Btnfiltro>
          <Btnfiltro>Mega</Btnfiltro>
          <Btnfiltro>Ultimate</Btnfiltro>
        </Divbtns>
      </Divbtnswrapper>
    </Mcontainer>
  )
}

export default Header
