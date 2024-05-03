import styled from 'styled-components'

export const DivModal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
`

export const Divdetalhes = styled.div`
  max-width: 487px;
  width: 100%;
  background-color: #ebebeb;
  margin: 50px auto;
  border-radius: 10px;
  padding: 35px;
`
export const LinhaP = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const NomeDigi = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #008cc7;
  text-transform: uppercase;
`

export const BtnClose = styled.button`
  cursor: pointer;
  font-size: 18px;
  padding: 2px 7px;
  border-radius: 50%;
  color: #9c9c9c;
  border: 1px solid #9c9c9c;
`

export const DivRelativa = styled.div`
  position: relative;
  height: 370px;

  @media only screen and (max-width: 600px) {
    height: 420px;
  }
`

export const Imagem = styled.img`
  max-width: 217px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: inline-block;
  position: relative;
  z-index: 1;
`
export const Divdesc = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 8px;
  position: absolute;
  padding-top: 60px;
  top: 170px;
  z-index: 0;
`

export const TipoDigi = styled.span`
  font-size: 20px;
  margin: 5px 0;
  display: block;
  color: #9c9c9c;

  span {
    font-size: 10px;
    vertical-align: 20%;
  }
`

export const Descricao = styled.span`
  color: #9c9c9c;
  b {
    color: black;
  }
`
