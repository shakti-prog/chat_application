import React from 'react';
import styled from 'styled-components';
import  FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption  from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandLessMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


const Icons = [
  {
      Icon:InsertCommentIcon,
      Title:"Threads"
  },
  {   
      Icon:InboxIcon, 
      Title:"Mentions and Reactions"  
  },
    {
        Icon:DraftsIcon,
        Title:"Saved Items"
    },
    { 
     Icon:BookmarkBorderIcon,
     Title:"Channel Browser"
    },
    {
        Icon:PeopleAltIcon,
        Title:"People & user groups"
    },
    {
        Icon:AppsIcon,
        Title:"Apps"
    },
    {
        Icon:FileCopyIcon,
        Title:"File browser"
    },
    {
        Icon:ExpandLessIcon,
        Title:"Show less"
    },
]

const Expand = {
     Icon :ExpandMoreIcon,  
     Title :"Show More"

}

const showMore={
    Icon:AddIcon,
    Title:"Add"
}


export default function Sidebar() {
    const [user] = useAuthState(auth);
    return (
     
            <SidebarConatiner>
                 <SidebarHeader>
                    <SideBarInfo>
                        <h2></h2>
                        <h3>
                           <FiberManualRecordIcon/>
                            {user.displayName}
                        </h3>
                    </SideBarInfo>
                    <CreateIcon/>
                 </SidebarHeader>
                 <SideBarOption ICONS={Icons}  EXP={Expand} ADD={showMore}/>
            </SidebarConatiner>
            
    )
}

const SidebarConatiner = styled.div`
color:white;
flex:0.2;
background-color:#3f0f40;
max-width:260px;
margin-top:60px
`;

const SidebarHeader = styled.div`
 display:flex;
 border-bottom:1px solid #49274b;
 padding:13px;
 > .MuiSvgIcon-root{
     padding:8px;
     background-color:white;
     border-radius:999px;
     font-size:18px;
     color:#49274b
 }

`;

const SideBarInfo = styled.div`
  flex:1;
  > h2{
      font-size:15px;
      font-weight:900;
      margin-bottom:5px;
  }
  > h3{
      display:flex;
      fonr-size:13;
      font-weight:400;
      align-items:center;
  }
 > h3 > .MuiSvgIcon-root{
     font-size:14px;
     margin-top:5px;
     margin-right:2px;
     color:green;

 }     

  }
`;

