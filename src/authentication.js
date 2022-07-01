
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyBlP6jZKOSajnt8sbWYtERXXa7yiMwMmbA',
    authDomain: 'quiz-app-bd94d.firebaseapp.com',
    projectId: 'quiz-app-bd94d',
    storageBucket: 'quiz-app-bd94d.appspot.com',
    messagingSenderId: '855702732053',
    appId: '1:855702732053:web:056863e486a56db36e3d1c ',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


export function singUp(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

};

