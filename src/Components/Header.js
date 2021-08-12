import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';
import {auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Headers() {
    const [user] = useAuthState(auth)
    return (
        <div>
            <HeaderContainer>

              <HeaderLeft>
                 <HeadAvatar onClick={()=>auth.signOut()}
                  src={user?.photoURL}
                 />
                 <AccessTimeIcon/>
              </HeaderLeft>


              <HeaderSearch>
               <SearchIcon/>
               <input type="text" placeholder="Type"></input>
              </HeaderSearch>
             

              <HeaderRight>


              </HeaderRight>
            
             

            </HeaderContainer>
        </div>
    )
}

export default Headers;

const HeaderContainer = styled.div`
 display:flex;
 position:fixed;
 width:100%;
 align-items:center;
 padding: 10px 0;
 justify-content:space-between;
 background-color:#3f0f40
`;


const HeaderLeft = styled.div`
 flex:0.3;
 display:flex;
 margin-left:20px;
 align items:center;

 > .MuiSvgIcon-root{
     margin-left:auto;
     margin-right:30px;
 }
`;
const HeaderRight = styled.div`
  flex:0.3;
  display:flex

  > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:20px;
  }
`;
const HeadAvatar = styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.8;
}
`;

const HeaderSearch = styled.div`
@media screen  and (max-width: 360px) {
    >input{  
       max-width: 50%;
    }
    
}
@media screen  and (max-width: 280px) {
    >input{  
       max-width: 30%;
    }
    
}
 flex:0.4;
 opacity:1;
 border-radius: 6px;
 background-color:#421f44;
 align-items:center;
 padding: 0px 50px;
 color:gray;
 border: 1px gray solid;
 > input{
     background-color:transparent;
     border:none;
     text-align:center;
     width:30vw;
     outline:0;
     color:white;
 }

`;