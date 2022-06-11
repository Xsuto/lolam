import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "@firebase/auth"

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyD4RgExkr7KS7kP6XTx7xC13HavjsO2r5M",
    authDomain: "dazzling-tiger-264719.firebaseapp.com",
    databaseURL: "https://dazzling-tiger-264719.firebaseio.com",
    projectId: "dazzling-tiger-264719",
    storageBucket: "dazzling-tiger-264719.appspot.com",
    messagingSenderId: "55141412270",
    appId: "1:55141412270:web:ec6bb7317c345319f1ac3f"
  }

// Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  nuxtApp.provide("app", app)
  nuxtApp.provide("auth", auth)
  nuxtApp.provide("db", db)
})
