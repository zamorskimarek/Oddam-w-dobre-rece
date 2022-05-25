import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// import { getDatabase } from "firebase/database";

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: "https://snkrfrkr-e6c5c-default-rtdb.europe-west1.firebasedatabase.app/",
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyAkn2E0IgUJqXjI92P5jPAVlfJZPH2EsQo",
    authDomain: "oddam-w-dobre-rece-a4f96.firebaseapp.com",
    // databaseURL: "https://snkrfrkr-e6c5c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "oddam-w-dobre-rece-a4f96",
    storageBucket: "oddam-w-dobre-rece-a4f96.appspot.com",
    messagingSenderId: "771716548331",
    appId: "1:771716548331:web:e8104806bbf3a2ce2760ae"
})

export const auth = app.auth()
// export const database = getDatabase(app)
export default app