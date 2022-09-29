import React from 'react'
import styled from 'styled-components'


const RightPage = () => {
  
  return (
    <>
    <Main>
    <Container>
    <Label>
    <span>
    LinkedIn News</span>
    <img src="/assets/feed-icon.svg" alt="" />
    </Label>

    <List>
    <NavList>
      <NavItem>
      <a href="">
      <Item>
        <Dot>
        </Dot>
        <News>
        <p>Feeder to hang up big racquet</p>
      <span>15h age • 656 readers</span>
        </News>
      </Item>

      </a>



      </NavItem>
      <NavItem>
      <a href="">
      <Item>
        <Dot>
        </Dot>
        <News>
      <p>NIT student land big offers</p>
      <span>15h age • 1256 readers</span>
      </News>
      </Item>
      </a>
      </NavItem>
      <NavItem>
      <a href="">
      <Item>
        <Dot>
        </Dot>
        <News>
      <p>Leverage Edu to hire 1,500</p>
      <span>15h age • 3,656 readers</span>
      </News>
      </Item>
      </a>
      </NavItem>
      <NavItem>
      <a href="">
      <Item>
        <Dot>
        </Dot>
        <News>
      <p>Wait lenfthens for US visas</p>
      <span>15h age • 656 readers</span>
      </News>
      </Item>
      </a>
      </NavItem>
      <NavItem>
      <a href="">
      <Item>
        <Dot>
        </Dot>
        <News>
      <p>India's most valuable brands</p>
      <span>15h age • 656 readers</span>
      </News>
      </Item>
      </a>
      </NavItem>
    </NavList>
    <Show>
    <span>Show more
    <img src="/assets/up-arrow.svg" alt="" />
    </span>
    </Show>
    </List>

    
    </Container>
    <Box>
    <Inner>
    <p>Ad</p>
    <img src="/assets/dots-icon.svg" alt="" />
    </Inner>
    <p>You've got the skills, aramco has the opportunities</p>
    <Img>
    <img src="/assets/photo.svg" alt="" />
    <img src="/assets/photo.svg" alt="" />
    </Img>
    <h2>Here's how to drive better leads on LinkedIn</h2>
    <Links>
    <a href="#">
      Learn more
    </a>
    </Links>
    </Box>
    <LinkBox>
    <a href="#">About</a>
    <a href="#">Accessibility</a>
    <a href="#">Help Center</a>
    <a href="#">Privacy & Terms</a>
    <a href="#">Ad Choices</a>
    <a href="#">Advertising</a>
    <a href="#">Business Services</a>
    <a href="#">Get the LinkedIn app</a>
    <a href="#">More</a>

    
    </LinkBox>
    <Logo>
    <img src="/assets/home-logo.svg" alt="dc" />
      <span>LinkedIn Corporation 2022</span>
    </Logo>
    </Main>
    </>
  )
}


const Main = styled.div`
grid-area: "RightPage";
/* background: red; */
/* overflow-y: hidden; */

`

const Container = styled.div`
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
background: #fff;
color: rgba(0,0,0,0.6);
margin-bottom: 8px;
border-radius: 10px;
position: relative;




`;

const Label = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;

span {
  color : rgba(0,0,0,0.9);
  font-weight: 600;
}

`

const NavList = styled.ul`
/* list-style: circle; */
list-style: none;
/* padding: 0 10px; */
/* padding-left: 30px; */


`;

const NavItem = styled.li`
padding: 5px 0;
padding-left: 15px;
a {

  text-decoration: none;
}

&:hover {
  background-color: rgba(0,0,0,0.1);
}
`;

const Item = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
`

const Dot = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background: #fff;

margin-top: 5px;
border: 3px solid rgba(0,0,0,0.6);
`

const News = styled.div`
padding-left: 15px;
p {
  color : rgba(0,0,0,0.9);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  display : flex;
  align-items: center;
}
span {
  color: rgba(0,0,0,0.6);
  font-size: 11px;
  line-height: 1.5;
}
`;

const Show = styled.div`
span {
  margin-left: 40px;
  font-size: 15px;
  display : flex;
  align-items: center;
  color : rgba(0,0,0,0.8);
  line-height: 1.5;
  width: fit-content;
  padding : 3px;
  border-radius: 5px;

  & > img {
    rotate: 180deg;
    margin-left: 5px;

  }

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }

}
`

const List = styled.div`
padding: 10px 0;

`;

const Inner = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;

img {
  height : 18px;
  width: 18px;
}
`
const Box = styled(Container)`
padding: 10px;
position: sticky;
top : 70px;
left: 0;
p {
  line-height: 1.5;
  font-size: 12px;
  color : rgba(0,0,0,0.6);
  margin-right: 5px;
  font-weight: 400;
  text-align: center;
}
h2 {
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color : rgba(0,0,0,0.7);
}



`;

const Img = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
img {
  border-radius: 50%;
  margin: 0 5px;

}

`;

const Links = styled.div`
text-align: center;
margin-top: 25px;
padding-bottom: 15px;
a {
  
  color: #0a66c2;
  text-align: center;
  text-decoration: none;
  border: 1px solid #0a66c2;
  border-radius: 55px;
  padding : 10px 25px;
  font-weight: 600;
  font-size: 13px;

}
`;


const LinkBox = styled.div`
position: sticky;
top : 280px;
left : 0;
padding: 20px;
background: transparent;
/* background-color: #fff; */
color: rgba(0,0,0,0.5);
text-align: center;
font-size: 13px;
display: flex;
flex-wrap: wrap;
justify-content: center;
/* align-items: center; */
 a {
  cursor: pointer;
  display : inline-block;
  margin: 5px;
  text-decoration: none;
  color: rgba(0,0,0,0.5);
  font-size: 13px;

  &:hover {
    color: #0a66c2;
    text-decoration: underline;
  }
 }
`;


const Logo = styled.div`
position: sticky;
top : 400px;
left : 0;
display : flex;
align-items: center;
justify-content: center;
font-size: 13px;
color: rgba(0,0,0,0.5);
margin-bottom: 8px;
img {
  width: 25px;
  height: 35px;
  margin-right: 5px;
}
`

export default RightPage