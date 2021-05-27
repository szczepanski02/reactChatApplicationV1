import firebase from 'firebase';

const firebaseConfig = {
    apiKay: 'AIzaSyD0Det7fNEuLCbtBEyLrH0ZEncC9n1K_Kw',
    authDomain: 'chatproject-ad639.firebaseapp.com',
    projectId: 'chatproject-ad639',
    storageBucket: 'chatproject-ad639.appspot.com',
    messagingSenderId: '159209061165',
    appId: '1:159209061165:web:6fad83010a893085d9b1a4',
    databaseURL: 'https://chatproject-ad639-default-rtdb.europe-west1.firebasedatabase.app'
}
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export default db;