
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

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


export function singUpWithEmailAndPassword(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

};


export function loginWithEmailAndPassword (email, password) {
    signInWithEmailAndPassword(auth, email, password)
}



export function loginWidthGoogleAccount () {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
}

export function loginnWidthFacebookAccount () {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
}