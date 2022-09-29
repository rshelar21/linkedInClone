import React from 'react'
import styled from 'styled-components'
import LeftPage from "./LeftPage"
import RightPage from "./RightPage"
import MiddlePage from "./MiddlePage"


const Header = () => {
  return (
    <>
    <Main>
    <Container>
    <Layers>
        <LeftPage/>
        <MiddlePage/>
        <RightPage/>
    </Layers>
    </Container>
    </Main>
    </>
  )
}


const Main = styled.div`
width: 100%;
/* background-color: rgb(243, 240, 240); */
padding-top: 80px;
background-color: #f0f0f0;
`
const Container = styled.div`
width: 100%;
max-width: 1128px;
margin: 0 auto;

`

const Layers = styled.div`
display: grid;
grid-template-areas: "leftPage MiddlePage RightPage";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
column-gap: 20px;
margin: 0 20px;

@media (max-width : 768px) {
  display: flex;
  flex-direction: column;
  margin: 0 20px;

}
`

export default Header