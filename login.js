
  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  // import { getAuth, GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyC7_bu5J3QmQN9-UIf6-RW0aSKiNHGVMp8",
  //   authDomain: "chatmet-4d1e3.firebaseapp.com",
  //   projectId: "chatmet-4d1e3",
  //   storageBucket: "chatmet-4d1e3.appspot.com",
  //   messagingSenderId: "1028037536871",
  //   appId: "1:1028037536871:web:c6b16be76c23a6dc4c78c2",
  //   measurementId: "G-VPCDMTRTQT"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth , GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPT7YljgWzidU8VR0vpPFwTVruBkF9fwU",
    authDomain: "chatmat-752f4.firebaseapp.com",
    projectId: "chatmat-752f4",
    storageBucket: "chatmat-752f4.appspot.com",
    messagingSenderId: "868960762445",
    appId: "1:868960762445:web:7f292194abb0b5eb39fa04",
    measurementId: "G-223QXY1Q60"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("btn");
googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log("user",user);
    window.location.href="../ChatMat.html";


  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
