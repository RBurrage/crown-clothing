import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2W8mtaJwicMxAOrULg9SjkKSsVdMfADw",
    authDomain: "crown-clothing-db-2ddc6.firebaseapp.com",
    projectId: "crown-clothing-db-2ddc6",
    storageBucket: "crown-clothing-db-2ddc6.appspot.com",
    messagingSenderId: "1029331093917",
    appId: "1:1029331093917:web:fbbcd268a78b077a83c774"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);