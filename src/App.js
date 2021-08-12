import logo from './logo.svg';
import './App.css';
import Headers from './Components/Header';
import styled from 'styled-components';
import Sidebar  from './Components/Sidebar';
import Chat from './Components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import Login from './Components/Login';
import img from './img.jpg';
import Spinner from 'react-spinkit';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [user,loading] = useAuthState(auth);
  if(loading){
    return(
        <Apploading>
           <ApplaodingContainer>
             <img src={img}/>
             <Spinner
             name="ball-scale-ripple-multiple"
             color="purple"
             fadeIn="none"
             style={{marginLeft:"auto",marginRight:"auto"}}/>

           </ApplaodingContainer>
        </Apploading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
         ) : (
          <>
          <Headers/>
          <AppBody>
            <Sidebar/>
             <Switch>
                <Route path="/" exact>
                      <Chat/>
                 </Route>
              </Switch>
          </AppBody>
        </>
        )}
      
    </Router>
    </div>
  );
}

const AppBody = styled.div`
  display:flex;
  height:100vh;
`;

const ApplaodingContainer = styled.div`
text-align:center;
padding-bottom:150px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img {
  padding:20px;
  height:100px;
  margin-bottom:20px

}
`;
const Apploading = styled.div`
padding: 100px;
background-color:white;
margin-top:150px;
`;

export default App;
