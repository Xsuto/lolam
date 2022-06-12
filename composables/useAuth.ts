import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User as userInterface } from "firebase/auth"
import { Router } from "vue-router"


function useAuth() {
  const { $auth: auth } = useNuxtApp()
  let isLoading = $(useState("isLoading", () => false))
  let error = $(useState("authError", () => ""))
  let user: userInterface | null = $(useState("user", () => null))
  let establishedAuthEventHandler = $(useState("authEventHandler", () => false))
  const router = useRouter()

  const createAccount = async (email: string, password: string) => {
    try {
      if (!email && !password && isLoading) return
      isLoading = true
      await createUserWithEmailAndPassword(auth, email, password)
      const { newUser } = useDatabase()
      await newUser()
      isLoading = false
      error = ""
    } catch (err) {
      if (err instanceof Error)
        error = err.message
      isLoading = false
    }
  }

  const login = async (email: string, password: string) => {
    try {
      if (!email && !password && isLoading) return
      isLoading = true
      await signInWithEmailAndPassword(auth, email, password)
      isLoading = false
      error = ""

    } catch (err) {
      if (err instanceof Error)
        error = err.message
      isLoading = false
    }
  }
  const __signOut = async (router: Router) => {
    try {
      const { accounts, gotSnapshot } = useDatabase()
      accounts.value = []
      gotSnapshot.value = false

      if (isLoading) return
      isLoading = true
      await auth.signOut()
      isLoading = false
      error = ""
      await router.push("/")
    } catch (err) {
      if (err instanceof Error)
        error = err.message
      isLoading = false
    }
  }

  if (process.client && !establishedAuthEventHandler) {
    auth.onAuthStateChanged(async (data: userInterface | null) => {
      user = data
      if (data) {
        await router.push("/dashboard")
      }
    })
    establishedAuthEventHandler = true
  }
  const signOut = () => __signOut(router)
  const uid = computed(() => user?.uid)

  return {
    user: $$(user),
    isLoading: $$(isLoading),
    error: $$(error),
    uid,
    signOut,
    login,
    createAccount
  }
}

export default useAuth
