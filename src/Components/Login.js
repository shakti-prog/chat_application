import React from 'react';
import styled from 'styled-components';
import image from '../img.jpg';
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase';

function Login() {
    const SignIn = e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>
        alert(error.message)
        );
    }
    return (
       <LoginContainer>
           <LogInsideConatiner>
            <img 
            src={image}
            alt = ""    
            />
            <h1>Sign In </h1>
            <Button  onClick={SignIn}>Sign in with Google</Button>
           </LogInsideConatiner>
       </LoginContainer>
    )
}

const LoginContainer = styled.div`
background-color:white;
height:100vh;
display:grid;
place-items:center;
`;
const LogInsideConatiner = styled.div`
padding: 100px;
text-align: center;
background-color:white;
border-radius:10px;
box-shadow: 0 1px 3px rgba(0,0,0.12), 0 1px 2px rgba(0,0,0.24);
>img {
    object-fit: contain;
    height:100px;
    margin-bottom: 40px
}
>button{
    
    margin-top:50px;
    color:white;
    background-color:green !important;
}

`;

export default Login;
