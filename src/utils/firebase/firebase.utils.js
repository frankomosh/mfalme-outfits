import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC5NGynOHRvOZyht4LcTMpde4RC9oKYdt0",
    authDomain: "cwn-clothing-db-704c8.firebaseapp.com",
    projectId: "cwn-clothing-db-704c8",
    storageBucket: "cwn-clothing-db-704c8.appspot.com",
    messagingSenderId: "265964205380",
    appId: "1:265964205380:web:33501d6402695f90c6d311"
  };


   

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  export const auth = getAuth();
  export const signInWithGooglePopup=()=> signInWithPopup(auth, provider);
  export const db = getFirestore();
  

  export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef=doc(db, 'users', userAuth.uid);

     console.log(userDocRef)

     const userSnapshot = await getDoc(userDocRef)

     console.log(userSnapshot.exists());

     //if user data does not exist
     //create /set the document with the data from userAuth in my collection
     if(! userSnapshot.exists()){
        const {displayName, email}=userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
     }

     
     //if user data exists
     //return userDocRef
     return userDocRef

  }