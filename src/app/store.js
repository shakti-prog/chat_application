//import {ConfigureStore} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appRed';

export default configureStore({
  reducer:{
   app:appReducer
  }
})
 
