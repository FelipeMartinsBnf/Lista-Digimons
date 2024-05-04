import { useEffect, useState } from 'react' // Importa o hook useEffect e useState do React
import DigimonClass from '../../Models/DigimonClass' // Importa a classe DigimonClass
import Digimon from '../../components/Digimon' // Importa o componente Digimon
import { ListHeader } from '../../styles/index' // Importa um componente estilizado

type RespostaApi = {
  //Tipando o objeto que será a resposta da API
  name: string
  img: string
  level: string
}

type Props = {
  // Tipos que recebemos do app.tsx
  filtroAtual: string
  pesquisa: string
}
/**
 * Componente Listagem.
 * Exibe uma lista de Digimons recuperados de uma API.
 */

const Listagem = ({ filtroAtual, pesquisa }: Props) => {
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
      {DigiApi.map((item: DigimonClass) => {
        //fazemos o mapa dos digimons que salvamos pela api

        //Fazendo a filtragem
        // Como não existe um tipo de digimons "Todos" temos que fazer assim para pegar todos
        if (filtroAtual == 'Todos') {
          //Agora fazemos a pesquisa com o valor salvo na barra de pesquisa se existir:
          if (item.nome.toLocaleLowerCase().includes(pesquisa)) {
            //Retornamos um componente digimon e mandamos para ele o item que contem um objeto com os dados do digmon
            return <Digimon DigimonClass={item} key={item.nome} />
            //Esse key é o identificador que o react usa para mostrar cada item separadamente na tela
          }
        } else {
          //Se o filtro não for todos vamos pesquisar pelo nome do filtro retornado pela API
          if (item.level == filtroAtual) {
            //fazemos a pesquisa igual
            if (item.nome.toLocaleLowerCase().includes(pesquisa)) {
              //Retornamos um componente digimon e mandamos para ele o item que contem um objeto com os dados do digmon
              return <Digimon DigimonClass={item} key={item.nome} />
            }
          }
        }
      })}
    </ListHeader>
  )
}

export default Listagem
