const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require('firebase-admin/app');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABdhfm6a8prYf8WU0RfLLvzLflRyLAxqo",
  authDomain: "biblioteca-bubbo.firebaseapp.com",
  projectId: "biblioteca-bubbo",
  storageBucket: "biblioteca-bubbo.appspot.com",
  messagingSenderId: "129530103457",
  appId: "1:129530103457:web:cef3cbd806dabcffe892e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database to use where I need it: 
exports.db = getFirestore(app);