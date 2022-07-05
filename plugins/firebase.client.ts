import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "@firebase/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    messagingSenderId,
    appId,
  } = useRuntimeConfig()
  const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    messagingSenderId,
    appId,
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  nuxtApp.provide("app", app)
  nuxtApp.provide("auth", auth)
  nuxtApp.provide("db", db)
})
