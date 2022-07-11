import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2W8mtaJwicMxAOrULg9SjkKSsVdMfADw",
    authDomain: "crown-clothing-db-2ddc6.firebaseapp.com",
    projectId: "crown-clothing-db-2ddc6",
    storageBucket: "crown-clothing-db-2ddc6.appspot.com",
    messagingSenderId: "1029331093917",
    appId: "1:1029331093917:web:fbbcd268a78b077a83c774"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = (new GoogleAuthProvider());

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    //if user data does not exist
    //create / set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    //if user data exists
    return userDocRef;
}