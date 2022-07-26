import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "quiz-app-bd94d",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MASSAGOING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


export async function singUpWithEmailAndPassword(email, password){
   await createUserWithEmailAndPassword(auth, email, password);
};

export async function loginWithEmailAndPassword (email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}

export async function loginWidthGoogleAccount () {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

export async function loginnWidthFacebookAccount () {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
};

export async function currentUser () {
    return await auth.currentUser;
} 

export  function  sendPasswordResetMail  (email) {
    sendPasswordResetEmail(auth, email)
}


export async function userSingOut () {
    await signOut(auth)
}


export async function setQuizResult (quizResult) {
    await addDoc(collection(db, 'quizResults'), quizResult);
}