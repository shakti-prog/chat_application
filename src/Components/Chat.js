import  styled  from 'styled-components';
import React from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutLinedIcon from '@material-ui/icons/InfoOutlined';
import {useSelector} from 'react-redux';
import {selectRoomId} from '../app/appRed';
import ChatIP from './ChatIP';
import {useCollection,useDocument} from 'react-firebase-hooks/firestore';
import {db} from '../firebase';
import ChatMessages from './ChatMessage';
import { useRef } from 'react';
import { useEffect } from 'react';

function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
    )
    const [roomMessages,isloading] = useCollection(
      roomId && db.collection("rooms")
      .doc(roomId)
      .collection('messages')
      .orderBy("timestamp",'asc')
    )
    useEffect(() => {
     chatRef?.current?.scrollIntoView({
       behaviour:"smooth"
     });

    }, [roomId,isloading]);

    
    return (
      <ChatContainer>
           <Header>
                <HeaderLeft>
                <h4>
                <strong>#{roomDetails?.data().name}</strong> 
                </h4>
                <StarBorderOutlinedIcon/>
                </HeaderLeft>
                <HeaderRight>
                  <p>
                     <InfoOutLinedIcon/>Details
                  </p>
                </HeaderRight>
            </Header> 
            <Messages>
              {roomMessages?.docs.map((doc)=>{
                const {message,timestamp,name} = doc.data();
                return(
                    <ChatMessages message={message} timestamp={timestamp} name={name} />
                )
              })}
            </Messages>
            <ChatIP
            channelId = {roomId}
            chatRef={chatRef}
            />        
      </ChatContainer>
    )
}
export default Chat;

const Messages = styled.div``;

const Header = styled.div`
 display:flex;
 justify-content:space-between;
 padding:20px;
 border-bottom: 1px soild lightgray;
`;
const HeaderLeft = styled.div`
> h4{
  display:flex;
  text-transform: lowercase;
  margin-right:10px;
}
  > h4 > .MuiSvgIcon-root{
    margin-left: 10px;
    font-size: 10px
  }
}
`;

const HeaderRight = styled.div`
 > p{
   display:flex;
   align-items:center;
   font-size:14px;
 }
 > p > .MuiSvgIcon-root{
   margin-right: 5px important;
   font-sze: 10px
 }


`;


const ChatContainer = styled.div`
 flex:0.7;
 flex-grow:1;
 overflow-y:scroll;
 margin-top:60px
`;
