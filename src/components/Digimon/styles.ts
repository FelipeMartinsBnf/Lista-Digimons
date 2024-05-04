import styled from 'styled-components'

export const DivDigimon = styled.div`
  background-color: #ffffff66;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    margin: 14px 28px;
  }
`
export const DigiTitle = styled.h3`
  color: #fff;
  font-weight: normal;
  margin-bottom: 8px;
`
export const DigiImagem = styled.img`
  max-width: 100%;
  width: 100%;
  border-radius: 15px;
  margin-bottom: 8px;
  object-fit: cover;
`

export const DigiBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  padding: 8px;
  background-color: #008cc7;
  color: #fff;
  border: none;
  font-weight: lighter;
`
