import { initializeApp } from "firebase/app";

import { getFirestore, collection } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBhvuYBk0j_iOytGAfK8m83B4lk5jCXMA8",
    authDomain: "filmyverse-ec508.firebaseapp.com",
    projectId: "filmyverse-ec508",
    storageBucket: "filmyverse-ec508.appspot.com",
    messagingSenderId: "807642973058",
    appId: "1:807642973058:web:ce4a56479bda0b6140c59b",
    measurementId: "G-W3L4J74YJX"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const moviesRef = collection(db, "movies")
export const reviewsRef = collection(db, "reviews")
export const usersRef = collection(db, "users")

export default app