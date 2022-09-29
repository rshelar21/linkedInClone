import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import {selectUserName, selectUserPhoto, selectUser} from "../features/userSlice"



const LeftPage = (props) => {
  // const UserName = useSelector(selectUserName);
  // const UserPhoto = useSelector(selectUserPhoto);
  const User = useSelector(selectUser);
  console.log(User)
  
  // console.log( UserPhoto)
  return (
    <>
    <Main>

    <Container>
    <BgImg/>

    <Card>
    <Img>
      {
        User ? 
        (<img src={User.img} alt="" />) : (
          <img src="/assets/photo.svg" alt="" />
        )
      }
      {/* <img src="/assets/photo.svg" alt="" /> */}
    </Img>
    
      <UserName>
      <a href='#'>
        {
          User.name ? 
          (
            User.name
          ) :
          (
            `user name`
          )
        }
      </a>
      </UserName>

      <UserBio>
      <a href='#'>
        Add photo
      </a>
      </UserBio>
    </Card>

    <Connections>
    <Card1>
    <a>
      <div>
        <span>Connnections</span>
        <span>Grow your network</span>
      </div>
      <p>55</p>
    </a>
    </Card1>
    <Card2>
    <a>
      <div>
        Who's viewed your profile
      </div>
      <p>5</p>
    </a>
    </Card2>
    </Connections>
    <Box>
    <a>
    Access exclusive tools & insights
    </a>
    <Star>
    <a>
    <img src="/assets/start.svg" alt="" />
      Learn New Skills, Try Premium for free
    </a>
    </Star>
    </Box>
    <Items>
      <a>
      <img src="/assets/item-icon.svg" alt="" />
        My Items
      </a>
    </Items>
    </Container>

    <Container1>

    <Recent>
      <div>
        Recent
      </div>
      <Icon>
      <img src="/assets/up-arrow.svg" alt="" />
      </Icon>
    </Recent>


    <Groups>
      <div>
        Groups
      </div>
      <Icon>
      <img src="/assets/up-arrow.svg" alt="" />
      </Icon>
    </Groups>
    <Events>
    <a href="#">
    <span>Events</span>
    <img src="/assets/plus-icon.svg" alt="" />
    </a>
    </Events>
    <Hashtags>
    <a href="#">
      <span>Followed Hashtags</span>
    </a>
    </Hashtags>
    <Discover>
      Discover More
    </Discover>
    </Container1>
    </Main>
    </>
  )
}


const Main = styled.div`
/* background: green; */
grid-area: "LeftPage";
`

const Container = styled.div`
background: #fff;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
position: relative;
text-align: center;
border-radius: 10px;
margin-bottom: 8px;

`
const BgImg = styled.div`
/* width: 100%; */
background-image: url('/assets/card-bg.svg');
background-position: center;
background-repeat: no-repeat;
background-size: 300px;
height: 55px;
/* border-radius: 10px; */
border-top-left-radius: 10px;
border-top-right-radius: 10px;

@media (max-width: 768px) {
  background-size: cover;

}
`

const Card  = styled.div`
position: relative;
padding-bottom: 15px;

`

const Img = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
border: 1px solid #fff;
background: #fff;
margin-top: -30px;
margin-inline: auto;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
`;


const UserBio = styled.div`
text-align: center;
font-size: 12px;
a {
  text-decoration: none;
  color: rgba(0,0,0,0.5);
  line-height: 2;
}
`

const UserName = styled.div`
text-align: center;
font-size: 15px;
color: #fff;
a {
  color: #000;
  text-decoration: none;
  line-height: 2;
  &:hover {
    text-decoration: underline;
  }
}
`

const Connections = styled.div`
/* text-align: center; */
padding: 10px 0;
/* box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); */
border-bottom: 1px solid rgba(0,0,0,0.1);
border-top: 1px solid rgba(0,0,0,0.1);
/* &:hover {
  background-color: rgba(0,0,0,0.2);
} */

`
const Card1 = styled.div`
font-size: 15px;
color: #000;
text-decoration: none;
/* padding: 10px 20px; */
a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span {
      font-size: 13px;
      font-weight: 400;
      color: rgba(0,0,0,0.6);
      line-height: 1.5;

      &:last-child {
        color: #000;

      }
    }
  }

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }

  p {
    font-size: 13px;
    color: #0a66c2;
  }
}

`

const Card2 = styled.div`
text-align: left;
padding-top: 5px;
font-size: 15px;
a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 13px;

  & > div {
    color: rgba(0,0,0,0.6);
  }

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }

  p {
    color: #0a66c2;
  }
}
`

const Box = styled.div`
color: rgba(0,0,0,0.6);
padding: 15px 0;
font-size: 13px;
cursor: pointer;
text-align: left;
img {
  width: 15px;
  margin-right: 2px;
}
a {
  font-size: 13px;
  display: flex;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  color: rgba(0,0,0,0.6);
  padding: 0 10px;
  line-height: 1.2;

&:last-child {
  text-decoration: underline;
  /* color: #000; */
  font-weight: 600;
  color: rgba(0,0,0,0.5);

}


}

&:hover {
    background-color: rgba(0,0,0,0.1);
    a:last-child {
      color: #0a66c2;
    }
  }

`;

const Star = styled.div`
display: flex;
align-items: center;
`

const Items = styled.div`
padding: 10px 10px;
text-align: left;
border-top: 1px solid rgba(0,0,0,0.1);
font-size: 13px;
color: rgba(0,0,0,0.9);
font-weight: 500;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
a {
  display: flex;
  align-items: center;
}
img,
svg {
  margin-right: 3px;
}

&:hover {
    background-color: rgba(0,0,0,0.1);
}
`;


const Container1 = styled(Container)`
padding: 10px 0;
padding-bottom: 0;
position: sticky;
top : 80px;
left : 0;

`

const Recent = styled.div`

display: flex;
align-items: center;
padding: 0 10px;
justify-content: space-between;
& > div {
  font-size: 13px;
  color : rgba(0,0,0,0.7)
}


`

const Icon = styled.div`
  cursor : pointer;
  width: 30px;
  height: 30px;
  background: rgba(0,0,0,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 1;
  }
`

const Groups = styled(Recent)`
color: #0a66c2;
div {
  color: #0a66c2;
}
`;

const Events = styled.div`
padding: 0 10px;
a {
  text-decoration: none;
  color: #0a66c2;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

}
`;

const Discover = styled.div`
padding : 20px 0;
text-align: center;
font-size: 13px;
color: rgba(0,0,0,0.8);
border-top: 1px solid rgba(0,0,0,0.1);
font-weight: 500;

&:hover {
  background-color: rgba(0,0,0,0.1);
}
`;


const Hashtags = styled(Events)``
export default LeftPage