import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC3Mu_PWmtRgWxZM94RhUdfWgILMqBHP3s",
    authDomain: "vue-blog-system-6484b.firebaseapp.com",
    projectId: "vue-blog-system-6484b",
    storageBucket: "vue-blog-system-6484b.appspot.com",
    messagingSenderId: "478550538407",
    appId: "1:478550538407:web:0de982a23a6bfb4d26c382"
  };

  firebase.initializeApp(firebaseConfig);

  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};