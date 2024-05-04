import styled from 'styled-components'
import Lupa from './MagnifyingGlass.svg'

export const Logo = styled.img`
  max-width: 345px;
  width: 100;
  max-height: 166px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 100px;
`

export const BarraPesquisa = styled.input`
  background-color: #d9d9d980;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 10px;
  width: calc(100% - 168px);
  margin: 0 82px;
  background-image: url(${Lupa});
  background-size: 18px;
  background-position: 98% 8px;
  background-repeat: no-repeat;
`
export const Divbtnswrapper = styled.div`
  width: 100%;
`

export const Divbtns = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    display: block;
    text-align: center;
  }
`
