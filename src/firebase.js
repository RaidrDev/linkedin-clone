import firebase  from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1RQ4lqo4Dd3YUtP-PuAw0re1L2AkS76U",
    authDomain: "linkedin-clone-f10d1.firebaseapp.com",
    projectId: "linkedin-clone-f10d1",
    storageBucket: "linkedin-clone-f10d1.appspot.com",
    messagingSenderId: "1037853411664",
    appId: "1:1037853411664:web:a16c1f111fa2dfce944455",
    measurementId: "G-9C1XNCK8FX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;