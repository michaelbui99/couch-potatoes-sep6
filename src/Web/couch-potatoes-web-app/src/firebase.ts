import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBuYphvxEeQ1qdGgVp3b-QbYL7RZ3DwL2U',
    authDomain: 'couch-potatoes-sep6.firebaseapp.com',
    projectId: 'couch-potatoes-sep6',
    storageBucket: 'couch-potatoes-sep6.appspot.com',
    messagingSenderId: '290231328510',
    appId: '1:290231328510:web:3f9d6b722d82233349cfaf',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app, 'gs://couch-potatoes-sep6.appspot.com');
export const firestore = getFirestore(app);
export default app;
