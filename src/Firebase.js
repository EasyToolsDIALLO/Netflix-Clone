import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChkUOWTmYnjYuL2X4Shuv3nSnJ3dPXPKE',
  authDomain: 'netflix-clone-2e8f5.firebaseapp.com',
  projectId: 'netflix-clone-2e8f5',
  storageBucket: 'netflix-clone-2e8f5.appspot.com',
  messagingSenderId: '994358448199',
  appId: '1:994358448199:web:5aa9237f33a4599856a162',
  measurementId: 'G-TMVNMR1QC5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
