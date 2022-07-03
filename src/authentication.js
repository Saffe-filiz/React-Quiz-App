import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MASSAGOING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


export async function singUpWithEmailAndPassword(email, password){
   const { user } = await createUserWithEmailAndPassword(auth, email, password);
   return user;
};

export async function loginWithEmailAndPassword (email, password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
}

export async function loginWidthGoogleAccount () {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return user;
}

export async function loginnWidthFacebookAccount () {
    const provider = new FacebookAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return user;
};
