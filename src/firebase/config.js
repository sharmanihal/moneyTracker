import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDqtFIWWBbN6IQJI76JKeKiknczu3ulLnA",
    authDomain: "my-money-2c188.firebaseapp.com",
    projectId: "my-money-2c188",
    storageBucket: "my-money-2c188.appspot.com",
    messagingSenderId: "543519265710",
    appId: "1:543519265710:web:bb333a440f3420bf9f2e3f"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init service
  const projectFirestore=firebase.firestore()
  const projectAuth=firebase.auth()

  //timestamp
  const timestamp=firebase.firestore.Timestamp

  export {projectFirestore,projectAuth,timestamp};