import { useEffect, useState } from 'react' // Importa o hook useEffect e useState do React
import DigimonClass from '../../Models/DigimonClass' // Importa a classe DigimonClass
import Digimon from '../../components/Digimon' // Importa o componente Digimon
import { ListHeader } from '../../styles/index' // Importa um componente estilizado

type RespostaApi = {
  name: string
  img: string
  level: string
}

/**
 * Componente Listagem.
 * Exibe uma lista de Digimons recuperados de uma API.
 */
const Listagem = () => {
  const [DigiApi, setDigiApi] = useState([]) // Estado para armazenar os Digimons da API

  useEffect(() => {
    // Hook useEffect para buscar os dados da API quando o componente é montado
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then((resposta) => resposta.json())
      .then((dados) => {
        // Transforma os dados da API em instâncias de DigimonClass
        const DadosTransformados = dados.map((item: RespostaApi) => {
          return new DigimonClass(
            item.name,
            item.img,
            item.level,
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis officiis tenetur, adipisci possimus, deserunt expedita beatae recusandae assumenda, excepturi quasi! Modi atque voluptate cum recusandae, dicta delectus voluptatibus dolorum.'
          )
        })
        // Atualiza o estado com os dados
        setDigiApi(DadosTransformados)
      })
  }, [])

  return (
    // Renderiza a lista de Digimons dentro de um componente estilizado
    <ListHeader>
      {DigiApi.map((item: DigimonClass) => (
        <Digimon DigimonClass={item} key={item.nome} />
      ))}
    </ListHeader>
  )
}

export default Listagem
