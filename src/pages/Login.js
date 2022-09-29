import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {auth, provider} from "../firebase"
import {signInWithPopup, onAuthStateChanged} from "firebase/auth"
import {useDispatch, useSelector} from "react-redux"
import {logOUt, login} from "../features/userSlice"
import {selectUserName,selectUserEmail, selectUserPhoto} from "../features/userSlice"


const Login = (props) =>{
    const [data, setData] = useState();
    const UserName = useSelector(selectUserName);
    const navigate = useNavigate();
    const dispacth = useDispatch();

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setData(user)
                navigate("/home");
            }
        })
    }, [UserName])

    const handleLogin = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user)
            setData(result.user);
            setDispatch(result.user)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    

    const setDispatch = (user) => {
        dispacth(
            login(
                {
                    name : user.displayName,
                    email : user.email,
                    img : user.photoURL,
            
                }
            )
        )
    }

    document.title = "LinkedIn"

    return(
    <>
    
    <Container>
   
    <Nav>
        <a href="/">
            <img src="/assets/login-logo.svg" alt="" />
        </a>
        <div>
            <Join>
                Join Now
            </Join>
            <SignIn>
                Sign In
            </SignIn>
        </div>
    </Nav>

    <Section>
    <Left>
      <h1>Welcome to your professional community</h1>
      <img src="/assets/login-hero.svg" alt="" />
    </Left>
    <Right>
    <button onClick={handleLogin}>
    <img src="/assets/google.svg" alt="" />
        Sign in With Google
    </button>
    </Right>
    </Section>

    

    
    </Container>
    </>)
}

const Container = styled.div`
padding: 0px;
/* width: 100%; */

`;

const Nav =  styled.nav`
${'' /* width: 100%; */}
max-width: 1128px;
margin:  auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 0 16px;
${'' /* background-color: red; */}
position: relative;
flex-wrap: nowrap;

a {
    width: 100px;
    height: 35px;
    
}
@media (max-width: 768px) {
        ${'' /* padding: 0 5px; */}
        padding-left: 5px;
        padding-right: 5px;
    }

`

const Join = styled.a`
margin-right: 10px;
font-size: 15px;
padding: 10px 12px;
background: #fff;
color: rgba(0,0,0,0.5);
text-decoration: none;
border-radius: 5px;
&:hover {
    background: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    

}

`
const SignIn = styled.a`
padding: 10px 24px !important;
color: #0a66c2;
border-radius: 999px;
font-size: 15px;
font-weight: 600;
border: 1px solid #0a66c2;
text-decoration:  none;
&:hover {
    background-color:  rgba(112,181,249,0.15);

}
`
const Section = styled.div`
width: 100%;
max-width: 1128px;
margin: 0 auto;
padding: 30px 0 40px;
display: flex;
align-content: flex-start;
flex-wrap: wrap;
align-items: center;
min-height: 700px;
padding-top: 40px;
padding-bottom: 138px;
padding: 60px 0;
position: relative;

`


const Left  = styled.div`
width: 100%;

h1 {
    width: 55%;
    font-size: 55px;
    color: #0a66c2;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 25px;
        text-align: center;

    }
}

img {
    position: absolute;
    /* top : 50px; */
    bottom: -2px;
    right: -110px;
    width: 700px;

    height: 670px;
    /* width: 100%;
    height: 100%; */
    /* object-fit: contain; */

    @media (max-width: 768px) {
        position: initial;
        width: initial;
        height: initial;
        top: 100px;

    }
}
`
const Right = styled.div`
margin-top: 120px;


button {
    outline: none;
    border: none;
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    background: transparent;
    border-radius: 999px;
    border: 1px solid black;

    @media (max-width: 768px) {
        width: 100%;
    }
}
@media (max-width: 768px) {
    width: 100%;
}
`




export default Login;
