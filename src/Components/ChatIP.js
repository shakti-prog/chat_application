import  styled  from 'styled-components';
import { Button} from '@material-ui/core';
import React from 'react';
import firebase from 'firebase';
import {auth, db} from '../firebase';
import {useRef,useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import "../App.css"


function ChatIP(props) {
   const [input,setInput] = useState('');
   const [user] = useAuthState(auth);
   const sendMessage = event =>{
      event.preventDefault();
      if(!props.channelId){
          alert('Not found');
          return false;
      }
      db.collection("rooms").doc(props.channelId).collection("messages").add({
         message:input,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         name:user.displayName
      });
      if(props.chatRef.currentdi){
        props.chatRef.current.scrollIntoView({
            behaviour:"smooth"
        })
      }
       
      setInput('');
   }
    return (
       <ChatInputContainer>
            <form action="">
               <input  placeholder="Message Here" value={input}
                onChange={(e)=>setInput(e.target.value)}
               />
                   <button className="button" hidden type="submit" onClick={sendMessage}>
                       Send
                   </button>   
            </form>
       </ChatInputContainer>
    )
}

export default ChatIP;

const ChatInputContainer = styled.div`
border-radius:30px;

@media screen  and (max-width: 992px) {
    >form>input{
       paddingLeft:90px;  
       max-width: 80%;
    }
    
}
@media screen  and (max-width: 720px) {
    >form>input{  
       max-width: 70%;
    }
    
}
@media screen  and (max-width: 600px) {
    >form>input{  
       max-width: 50%;
    }
    
}
@media screen  and (max-width: 280px) {
    >form>input{  
       max-width: 35%;
    }
    
}

> form{
    position:relative;
    display:flex;
    justify-content: center
}
> form >input{
     position:fixed;
     bottom:0px;
     width:79%;
     border-radius: 15px;
     padding:20px;
     outline:none;

}
> form > button{
    display: none important;
}


`;

