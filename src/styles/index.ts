import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    font-family: "Inter", sans-serif;
  }
  body{
    background-image: linear-gradient(180deg, #00123F80, #008CC780);
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`

export const Mcontainer = styled.div`
  max-width: 924px;
  width: 100%;
  margin: 0 auto;
`

export const ListHeader = styled.div`
  padding-top: 50px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 20px;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export default EstiloGlobal
