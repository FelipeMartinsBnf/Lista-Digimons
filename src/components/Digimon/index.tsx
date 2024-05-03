import { useState } from 'react' // Importa o hook useState do React
import DetalhesDigi from '../DetalhesDigi' // Importa o componente DetalhesDigi
import DigimonClass from '../../Models/DigimonClass' // Importa a classe DigimonClass
import { DivDigimon, DigiImagem, DigiTitle, DigiBtn } from './styles' // Importa componentes estilizados

type Props = {
  DigimonClass: DigimonClass // Tipo para dizer que os elementos que esse componente vai receber é uma instância de DigimonClass
}

/**
 * Componente Digimon.
 * Exibe as informações de um Digimon, incluindo nome, imagem e um botão para ver detalhes.
 */
const Digimon = ({ DigimonClass }: Props) => {
  const [modal, setModal] = useState(false) // Estado para controlar a exibição do modal

  // Função para alternar o estado do modal
  const MostrarModal = () => {
    setModal(!modal)
  }

  return (
    <DivDigimon>
      <DigiTitle>{DigimonClass.nome}</DigiTitle>
      <DigiImagem src={DigimonClass.imagemsrc} />
      <DigiBtn onClick={MostrarModal}>Ver detalhes</DigiBtn>
      {/* Renderiza o componente DetalhesDigi se o modal estiver aberto - for verdadeiro */}
      {modal ? (
        <DetalhesDigi
          FuncMostrarModal={MostrarModal}
          DigimonClass={DigimonClass}
        />
      ) : (
        <></>
      )}
    </DivDigimon>
  )
}

export default Digimon
