import React from 'react';
import {useDispatch} from 'react-redux';
import { enterRoom } from '../app/appRed'

function Components(props){
    const dispatch = useDispatch();
    function selectChannel(){
        if(props.id){
          alert("You are in" + " " + `${props.name}` + " " + "channel" )  
          dispatch(enterRoom({
            roomId:props.id
          }))
        }
       
      }
    return (
        <div  onClick={selectChannel} style={{marginTop:"10px"}}>
            {props.name}
        </div>
    )
}

export default Components;
