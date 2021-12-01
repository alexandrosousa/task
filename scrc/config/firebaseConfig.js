import { initializeApp } from 'firebase/app'

// import 'firebase/storage'

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
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
