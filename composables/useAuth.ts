import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User as userInterface,
} from "firebase/auth"

enum SharedData {
  isLoading = "isLoadingAuth",
  error = "errorAuth",
  user = "user",
}

function useAuth() {
  const { $auth: auth } = useNuxtApp()
  let isLoading = $(useState<boolean>(SharedData.isLoading, () => false))
  let error = $(useState<string>(SharedData.error, () => ""))
  let user = $(useState<userInterface | null>(SharedData.user, () => null))
  let establishedAuthEventHandler = $(
    useState<boolean>("authEventHandler", () => false)
  )
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
      if (err instanceof Error) error = err.message
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
      if (err instanceof Error) error = err.message
      isLoading = false
    }
  }
  const signOut = async () => {
    try {
      if (isLoading) return
      isLoading = true
      const { accounts, gotSnapshot } = useDatabase()
      accounts.value = []
      gotSnapshot.value = false

      await auth.signOut()
      isLoading = false
      error = ""
      await router.push("/")
    } catch (err) {
      if (err instanceof Error) error = err.message
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
  const uid = computed(() => user?.uid)

  return {
    user: $$(user),
    isLoading: $$(isLoading),
    error: $$(error),
    uid,
    signOut,
    login,
    createAccount,
  }
}

export default useAuth
