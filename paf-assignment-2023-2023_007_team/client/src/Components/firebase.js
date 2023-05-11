import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDgmSgP-ifGnskiaZAtctc3FRJtdXlpuck",
  authDomain: "cofoodies-directory.firebaseapp.com",
  projectId: "cofoodies-directory",
  storageBucket: "cofoodies-directory.appspot.com",
  messagingSenderId: "378852567395",
  appId: "1:378852567395:web:99f2d3f68adfd767070b56",
  measurementId: "G-9YH47EMPGT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
// // Import the functions you need from the SDKs you need
// import firebase from './firebase';
// import config from './firebase.js';

// const firebaseConfig = {
//   apiKey: "AIzaSyDgmSgP-ifGnskiaZAtctc3FRJtdXlpuck",
//   authDomain: "cofoodies-directory.firebaseapp.com",
//   projectId: "cofoodies-directory",
//   storageBucket: "cofoodies-directory.appspot.com",
//   messagingSenderId: "378852567395",
//   appId: "1:378852567395:web:99f2d3f68adfd767070b56",
//   measurementId: "G-9YH47EMPGT"
// };

// // Initialize Firebase
// const { auth, storage } = firebase;
// firebase.initializeApp(config);

// export default firebase;
// export {auth, storage};










// firebase= initializeApp(firebaseConfig);



// const auth = firebase.initializeApp(firebaseConfig).auth();
// const storage = firebase.initializeApp(firebaseConfig).storage();



// ---------------------- original-------------------

// import firebase from "firebase";

// firebase.initializeApp({
//   apiKey: "AIzaSyBiImFCXW14MtnHNmLedceYeEyA3LIZr7A",
//   authDomain: "instaclone-b1b16.firebaseapp.com",
//   projectId: "instaclone-b1b16",
//   storageBucket: "instaclone-b1b16.appspot.com",
//   messagingSenderId: "633280563245",
//   appId: "1:633280563245:web:221f31c7947575042510a4"
// });

// const auth=firebase.auth();
// const storage=firebase.storage();

// export {storage,auth};


