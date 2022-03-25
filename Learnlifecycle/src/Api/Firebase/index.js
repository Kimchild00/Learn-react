// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJtrKDMlsJm1BOzuJDM9ebUwNsGq0kUHI",
  authDomain: "react-deploy-1bfdb.firebaseapp.com",
  projectId: "react-deploy-1bfdb",
  storageBucket: "react-deploy-1bfdb.appspot.com",
  messagingSenderId: "758215693341",
  appId: "1:758215693341:web:d9dcb470030560dfb622f4",
  measurementId: "G-E0EV3Y2S5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// initelie firebase
export const register = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, 'reizha77@gmail.com', "reizha123")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };