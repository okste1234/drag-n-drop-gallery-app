// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkoJ-4y4zx8QjOM0l6Kt2iC9FyYip_s8g",
    authDomain: "fotogram-7b5a4.firebaseapp.com",
    projectId: "fotogram-7b5a4",
    storageBucket: "fotogram-7b5a4.appspot.com",
    messagingSenderId: "537076487433",
    appId: "1:537076487433:web:17e5374f5fd2c415aeafd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)
export { auth, storage, db }