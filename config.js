// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD8uu3k6pE2X91cPk8u-63motoTcpwrkuw',
  authDomain: 'mytravel-6dde5.firebaseapp.com',
  projectId: 'mytravel-6dde5',
  storageBucket: 'mytravel-6dde5.appspot.com',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(
  app,
  { persistence: getReactNativePersistence(AsyncStorage)}
);
export const db = getFirestore(app);
export const storage = getStorage(app);
