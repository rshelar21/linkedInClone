import React from 'react'
import styled from 'styled-components'
import {auth, provider} from "../firebase"
import {signOut} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {selectUserName,selectUserEmail, selectUserPhoto} from "../features/userSlice"


const Navbar = () => {
    // const UserName = useSelector(selectUserName);
    // const UserEmail = useSelector(selectUserEmail);
    const UserPhoto = useSelector(selectUserPhoto);
    console.log( UserPhoto )
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOut = () => {
        signOut(auth).then((result) => {
            console.log(result)
            navigate("/");
        }).catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <>
            <Main>
                <Nav>
                    <Container>
                        <Logo>
                            <img src="/assets/home-logo.svg" alt="" />
                        </Logo>
                        <Box>
                            <input type="text" placeholder='Search' />
                            <SearchIcon>
                                <img src="/assets/search-icon.svg" alt="" />
                                <span>Search</span>
                            </SearchIcon>
                        </Box>
                    </Container>

                    <NavList>
                        <NavItem >
                            <a >
                                <img src="/assets/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavItem>

                        <NavItem>
                            <a >
                                <img src="/assets/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a >
                                <img src="/assets/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a >
                                <img src="/assets/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a >
                                <img src="/assets/nav-notifications.svg" alt="" />
                                <span>Notifications</span>
                            </a>
                        </NavItem>
                        <NavDot>
                        <img src="/assets/dots-icon.svg" alt="" />

                        </NavDot>
                        <User>
                        <a>
                           {
                             UserPhoto ?
                             ( <img src={UserPhoto} alt="" />) : 
                             ( <img src="/assets/user.svg" alt="" />)
                           }
                            <span>Me 
                            <img src="/assets/down-icon.svg" alt="" /></span>
                        </a>
                        <Sign onClick={handleOut}>
                            <a>Sign Out</a>
                        </Sign>
                        </User>
                        <Work>
                        <a > 
                          <img src="/assets/nav-work.svg" alt="" />
                          <span>Work 
                          <img src="/assets/down-icon.svg" alt="" />
                          </span>
                          </a>
                        </Work>
                        <Premium>
                            <a href='/'>
                            Try Premium for  free
                            </a>
                        </Premium>
                    </NavList>

                </Nav>
            </Main>
        </>
    )
}
const Main = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: #fff;
border-bottom: 1px solid rgba(0,0,0,0.08);
z-index: 999;

`

const Nav = styled.nav`
display: flex;
align-items: center;
/* justify-content: space-between; */
width: 100%;
max-width: 1128px;
margin: 0 auto;
/* background-color: red; */
padding: 5px 0;
padding-inline: 10px;
`

const Container = styled.div`
flex-grow: 1;
display: flex;
`
const Logo = styled.a`
text-decoration: none;
margin-right: 5px;
`

const Box = styled.div`
width: 100%;
max-width: 280px;
position: relative;
/* height: 35px; */
input {
    height: 35px;
    width: 250px;
    padding: 0 5px 0 30px;
    outline: none;
    border : none;
    border-color: #dce6f1;
    font-size: 14px;
    font-weight: 400;
    box-shadow: none;
    background-color: #eef3f8;
    color: rgba(0,0,0,0.9);
    border-radius: 5px;

    @media (max-width: 1030px) {
        display : none;
    }
}


`

const SearchIcon = styled.div`
position: absolute;
top: 10px;
left: 10px;
display: flex;
flex-direction: column;
align-items: center;
span {
    font-size: 12px;
    opacity: 0;
    display: none ;
    color: rgba(0,0,0,0.6);
    @media (max-width: 1030px) {
        opacity: 1;
        display : block;
    }

    @media (max-width: 800px) {
        display: none;
    }
}
img {

    @media (max-width: 1030px) {
        width: 25px;
        height: 25px;
    }

    

   
}
@media (max-width: 1030px) {
    top : 0;
    left : 15px;

    
}
@media (max-width: 800px) {
    top : 5px; 
}
/* font-size: 56px; */
`

const NavList = styled.ul`
list-style: none;
display: flex;
align-items: center;

@media (max-width: 1030px) {
    margin-left: 30px;
    justify-content: space-between;
    /* margin-right: auto; */
}
`

const NavItem = styled.li`
align-items: center;
min-width: 80px;
a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    span {
        color: rgba(0,0,0,0.6);
        @media (max-width: 800px) {
        display: none;
    }
    }
}
img,
svg {
    width: 25px;
    height: 25px;

}

@media (max-width: 800px) {
    min-width: 50px;
    max-width: auto;



}



`;

const Sign = styled.span`
position: absolute;
background: #fff;
color: #000;
border: 1px solid rgba(0,0,0,0.2);
padding: 10px 15px;
border-radius: 5px;
opacity: 0;
`;



const User = styled.div`
min-width: 80px;
border-right: 1px solid rgba(0,0,0,0.2);
img,
svg {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


}
span {
    color: rgba(0,0,0,0.6);
    font-size: 12px;
    display: flex;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
        @media (max-width: 850px) {
        display : none;
        }
    }

    @media (max-width: 800px) {
        display : none;
    }
}
&:hover {
    ${Sign} {
        opacity: 1;
    }
}
@media (max-width: 550px) {
    min-width: 50px;
    max-width: auto;
    /* flex-grow: 1; */
}
`;


const Work = styled(NavItem)`
/* min-width: 80px;
a {
    display: flex;
flex-direction: column;
align-items: center;
}
span {
    font-size: 12px;
    color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
}
img,
svg {
    width: 20px;
    height: 20px;
} */
span {
    font-size: 12px;
    color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    img,
    svg {
    width: 20px;
    height: 20px;
} 
}
@media (max-width: 550px) {
display : none;
}
`

const Premium = styled(NavItem)`
max-width: 80px;
text-align: center;
color : #915907;
a {
    color : #915907;
}
@media (max-width: 550px) {
display : none;
}
`

const NavDot = styled(NavItem)`
display : none;
@media (max-width: 550px) {
display : block;
display: flex;
align-items: center;
justify-content: center;
}
`

export default Navbar
