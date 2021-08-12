import React from 'react';
import styled from 'styled-components';

function ChatMessages(props) {
   
    return (
        <MessageContainer>
            <MessageInfo>
               <h4>
                 {props.name} {' '}
                 <span>
                 </span>
               </h4>
               <p>{props.message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default ChatMessages;


const MessageContainer = styled.div`
display:flex;
align-items:center;
padding:20px
`;

const MessageInfo = styled.div`
padding-left: 10px;
>h4 >span{
  color:gray;
  font-weight:300;
  margin-left: 4px;
  font-size:10px;

}
`;