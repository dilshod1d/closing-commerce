import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBcY2p71Cz2feY8BWlzbhCNiDTECXJNPN8',
  authDomain: 'zillionuz-de35f.firebaseapp.com',
  projectId: 'zillionuz-de35f',
  storageBucket: 'zillionuz-de35f.appspot.com',
  messagingSenderId: '919359552943',
  appId: '1:919359552943:web:77a0192cecaf19f634c35a',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
