import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAufMWx0nhxXF4pzYlfC1GnA2_YXhHr0EU",
  authDomain: "fir-116db.firebaseapp.com",
  projectId: "fir-116db",
  storageBucket: "fir-116db.appspot.com",
  messagingSenderId: "54615532595",
  appId: "1:54615532595:web:68618e7bddd05a4bfeaf46",
  measurementId: "G-0GZBSTXFXN"
};

export default firebase.initializeApp(firebaseConfig)
