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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creatin user');
    }
  }
  return userRef;
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
