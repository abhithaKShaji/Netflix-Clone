import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC8m58EEgtoQRrfSDv6bCu_6RkDGLDHAMQ",
    authDomain: "netflix-clone-4f651.firebaseapp.com",
    projectId: "netflix-clone-4f651",
    storageBucket: "netflix-clone-4f651.appspot.com",
    messagingSenderId: "54006641079",
    appId: "1:54006641079:web:1028fcb12ca1de83583832",
    measurementId: "G-HBM6RQ2NC5"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  

