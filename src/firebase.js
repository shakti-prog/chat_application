// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUpBVToAP8Q5WeecQO5Do7ziQ972NDB5s",
    authDomain: "slack-clone-5334d.firebaseapp.com",
    projectId: "slack-clone-5334d",
    storageBucket: "slack-clone-5334d.appspot.com",
    messagingSenderId: "105506713605",
    appId: "1:105506713605:web:da37cc4559c16c84652c6c",
    measurementId: "G-KZ1BJ0BW4X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,db,provider};
