import * as S from './styles' // Importa componentes estilizados
import DigimonClass from '../../Models/DigimonClass' // Importa a classe DigimonClass

type Props = {
  FuncMostrarModal: () => void // Função para fechar o modal
  DigimonClass: DigimonClass // Mesma coisa do componente anterior, vamos receber os dados do tipo DigimonClass
}
/**
 * Componente DetalhesDigi.
 * Exibe os detalhes de um Digimon em um modal.
 */

const DetalhesDigi = ({ FuncMostrarModal, DigimonClass }: Props) => {
  return (
    <S.DivModal>
      <S.Divdetalhes>
        <S.LinhaP>
          <S.NomeDigi>{DigimonClass.nome}</S.NomeDigi>
          <S.BtnClose onClick={FuncMostrarModal}>X</S.BtnClose>
        </S.LinhaP>
        <S.DivRelativa>
          <S.Imagem src={DigimonClass.imagemsrc} />
          <S.Divdesc>
            <S.TipoDigi>
              <span> 🔵 </span> {DigimonClass.level}
            </S.TipoDigi>
            <S.Descricao>
              <b>Descrição: </b>
              {DigimonClass.desc}
            </S.Descricao>
          </S.Divdesc>
        </S.DivRelativa>
      </S.Divdetalhes>
    </S.DivModal>
  )
}

export default DetalhesDigi
