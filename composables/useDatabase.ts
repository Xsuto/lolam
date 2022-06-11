import { v4 as uuid } from "uuid"
import { doc, getFirestore, onSnapshot, setDoc } from "@firebase/firestore"
import { Account } from "~/interfaces/UserInterface"

function useDatabase() {
  let gotSnapshot = $(useState("gotSnapshot", () => false))
  let accounts = $(useState("accounts", () => []))
  return {
    accounts: $$(accounts),
    gotSnapshot: $$(gotSnapshot),
    newUser,
    getUserAccounts,
    deleteAccount,
    addNewAccount
  }
}

const getUserAccounts = () => {
  const db = getFirestore()
  const { uid } = useAuth()
  let gotSnapshot: boolean = $(useState("gotSnapshot"))
  let accounts = $(useState("accounts"))
  onSnapshot(doc(db, "Users", uid.value), (snapshot) => {
    const snapshotData = snapshot.data()
    accounts = snapshotData.accounts
    gotSnapshot = true
  })
}

const addNewAccount = async (
  username: string,
  server: string,
  login: string,
  password: string,
  position: string
) => {
  const db = getFirestore()
  const { uid } = useAuth()
  let gotSnapshot: boolean = $(useState("gotSnapshot"))
  let accounts: [] = $(useState("accounts"))
  if (!uid) return
  if (!password && !username && !server && !login && !position) return
  if (!gotSnapshot) return
  const usersRef = doc(db, "Users", uid.value)
  await setDoc(usersRef, {
    accounts: [
      ...accounts,
      {
        name: username,
        server,
        position,
        login,
        password,
        id: uuid()
      }
    ]
  })
}
const deleteAccount = async (id
                               :
                               string
) => {
  const db = getFirestore()
  const { uid } = useAuth()
  let gotSnapshot: boolean = $(useState("gotSnapshot"))
  let accounts: [Account] = $(useState("accounts"))
  if (accounts.length > 0 || gotSnapshot) {
    const usersRef = doc(db, "Users", uid.value)
    await setDoc(usersRef, {
      accounts: accounts.filter((account) => account.id !== id)
    })
  }
}
const newUser = async () => {
  const { uid } = useAuth()
  const db = getFirestore()
  await setDoc(doc(db, "Users", uid.value), {
    accounts: []
  })
}


export default useDatabase
