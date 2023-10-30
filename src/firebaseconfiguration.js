import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC2P-jPSYiuPdmjYTahNAMi_JO7etZtA8c",
    authDomain: "linkedin-project-d7ecf.firebaseapp.com",
    projectId: "linkedin-project-d7ecf",
    storageBucket: "linkedin-project-d7ecf.appspot.com",
    messagingSenderId: "521788472931",
    appId: "1:521788472931:web:cdf28ee333f4b8e35c8256",
    measurementId: "G-019VGJDV6C"
  };

  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db = getFirestore(app);
  export { auth, db };
  export default app;
