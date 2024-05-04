import styled from 'styled-components'

type Props = {
  $ativo?: boolean
}

export const Filtro = styled.button<Props>`
  @media only screen and (max-width: 600px) {
    display: inline-block;
  }
  cursor: pointer;
  flex: 1;
  margin: 10px;
  font-size: 16px;
  padding: 8px;
  background-color: #d9d9d980;
  border: 3px solid ${(props) => (props.$ativo ? '#1e90FF' : 'white')};
  color: ${(props) => (props.$ativo ? '#1e90FF' : 'white')};
  /* border: 1px solid #fff; */
  border-radius: 10px;
`
