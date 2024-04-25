// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1WK_g48kb9Hg3TH2IusC4ugbfToRiB-4",
  authDomain: "dht-11-5ce00.firebaseapp.com",
  databaseURL: "https://dht-11-5ce00-default-rtdb.firebaseio.com",
  projectId: "dht-11-5ce00",
  storageBucket: "dht-11-5ce00.appspot.com",
  messagingSenderId: "119144239960",
  appId: "1:119144239960:web:644b1749d6a19bf37c0b2d",
  measurementId: "G-0BZ1STJCMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database };