// Importa las funciones que necesitas de los SDKs
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore para obtener la instancia de Firestore
import firebaseConfig from "./../firebase-config.json";


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de autenticación
export const auth = getAuth(app);

// Establece la persistencia de sesión
setPersistence(auth, browserSessionPersistence);

export const db = getFirestore(app);