import React, { Component } from 'react'
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import {db} from '../firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {useDispatch} from 'react-redux';
import { enterRoom } from '../app/appRed';
import Components from './Components';

function SideBarOption(props) {
    const dispatch = useDispatch();
    const [channels,isLoading,error] =  useCollection(db.collection("rooms"))
    const AddChannel = () =>{
       const channelName = prompt("Enter a channel");
       if(channelName){
          db.collection("rooms").add({
            name:channelName
          })
       }
    }
  /*   function selectChannel(id){
      if(id){
        dispatch(enterRoom({
          roomId:id
        }))
      }
      alert("You have clicked on the option"+id);
    } */
    const comm = props.ICONS.map((object)=>{
      return(
          <div style={{display:'flex'}}>
                <object.Icon style={{padding:"8px"}}/>
              <SideOpChannel>
              <span style={{color:"white",padding:'8px'}}>
                 </span> {object.Title}
              </SideOpChannel>
          </div>
      )
      })
    return(
        <SideBarOptionCont>
            {comm}
            <hr/>
            <props.EXP.Icon/>
            {props.EXP.Title}
            <hr/>
            <props.ADD.Icon  onClick={AddChannel} />
            {props.ADD.Title}
            {channels?.docs.map(doc=>(
               <Components  style={{padding:"20px",marginLeft:"5px",marginTop:"10px"}} key={doc.id} id={doc.id} name={doc.data().name}/>
            ))}
        </SideBarOptionCont>   
    )
}

export default SideBarOption;

const SideBarOptionCont = styled.div`
  :hover{
      opacity:0.9;
      background-color:#340e36;

  }
  > hr{
         margin-top:10px;
         margin-bottom:10px;
         border:1px solid #49274b
  }

`;

const SideOpChannel = styled.div``;

