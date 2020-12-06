import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBH0VgZzlSL94cELfyJExSaDT2UtCbDPGA",
  authDomain: "ucla-18144.firebaseapp.com",
  databaseURL: "https://ucla-18144.firebaseio.com",
  projectId: "ucla-18144",
  storageBucket: "ucla-18144.appspot.com",
  messagingSenderId: "916960430922",
  appId: "1:916960430922:web:670719e6c563100c910fb3"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
const storage = firebase.storage().ref()
const stor = firebase.storage()

export {db, storage, stor};