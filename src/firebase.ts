// firebase
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

function initFirebase(config: FirebaseConfig, name?: string): FirebaseApp | null {
  const requiredKeys: (keyof FirebaseConfig)[] = [
    'apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'
  ];

  const missingKeys = requiredKeys.filter(key => !config[key]);
  if (missingKeys.length > 0) {
    console.warn(`Firebase 초기화 실패: 환경변수 누락 [${missingKeys.join(', ')}]`);
    return null;
  }
  return initializeApp(config, name);
}

const createConfigFromEnv = (prefix: string): FirebaseConfig => ({
  apiKey: process.env[`${prefix}_API_KEY`] || '',
  authDomain: process.env[`${prefix}_AUTH_DOMAIN`] || '',
  projectId: process.env[`${prefix}_PROJECT_ID`] || '',
  storageBucket: process.env[`${prefix}_STORAGE_BUCKET`] || '',
  messagingSenderId: process.env[`${prefix}_MESSAGING_ID`] || '',
  appId: process.env[`${prefix}_ID`] || '',
  measurementId: process.env[`${prefix}_MEASUREMENT_ID`] || undefined,
});

const myFirebaseConfig = createConfigFromEnv('REACT_APP');
export const myApp = initFirebase(myFirebaseConfig);
export const auth = myApp ? getAuth(myApp) : null;
export const fireDB = myApp ? getFirestore(myApp) : null;
export const provider = new GoogleAuthProvider();
export const firebaseStorage = myApp ? getStorage(myApp) : null;

// --------------------
// Map
// --------------------
const mapFirebaseConfig = createConfigFromEnv('REACT_APP_MAP');
export const fbMapApp = initFirebase(mapFirebaseConfig, 'firebase-map');
export const fbMapAuth: Auth | null = fbMapApp ? getAuth(fbMapApp) : null;
export const fbMapDB: Firestore | null = fbMapApp ? getFirestore(fbMapApp) : null;
export const fbMapStorage = fbMapApp ? getStorage(fbMapApp) : null;

// --------------------
// Weather
// --------------------
const weatherFirebaseConfig = createConfigFromEnv('REACT_APP_WEATHER');
export const fbWeatherApp = initFirebase(weatherFirebaseConfig, 'th-weather');
export const fbWeatherDB = fbWeatherApp ? getFirestore(fbWeatherApp) : null;

// --------------------
// Tistory
// --------------------
const tistoryFirebaseConfig = createConfigFromEnv('REACT_APP_FIREBASE');
export const firebaseApp = initFirebase(tistoryFirebaseConfig, 'Tistory');
export const firebaseDB = firebaseApp ? getFirestore(firebaseApp) : null;
export const firebaseAuth = firebaseApp ? getAuth(firebaseApp) : null;
export const fireProvider = new GoogleAuthProvider();
