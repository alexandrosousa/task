import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// import firebase from 'firebase'
import 'firebase/storage'

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAXFBcJPw3Syj307cmnv3oGAmUiADZZeyc',
    authDomain: 'tasks-69cf7.firebaseapp.com',
    projectId: 'tasks-69cf7',
    storageBucket: 'tasks-69cf7.appspot.com',
    messagingSenderId: '715949107337',
    appId: '1:715949107337:web:9af48375f2dae6caa7be58',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export default database
