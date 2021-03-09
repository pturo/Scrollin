import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB4uu_0h858F_oSJ1b1RGtTwdtit1P2BOE',
  authDomain: 'scrollin-7f7da.firebaseapp.com',
  projectId: 'scrollin-7f7da',
  storageBucket: 'scrollin-7f7da.appspot.com',
  messagingSenderId: '44021675083',
  appId: '1:44021675083:web:d4ddb7a08ea0cddc2789ce'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
