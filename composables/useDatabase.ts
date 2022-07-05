import { v4 as uuid } from "uuid"
import { doc, getFirestore, onSnapshot, setDoc } from "@firebase/firestore"
import { Account } from "~/interfaces/UserInterface"

enum SharedData {
  gotSnapshot = "gotSnapshot",
  accounts = "accounts",
}

function useDatabase() {
  const gotSnapshot = $(useState<boolean>(SharedData.gotSnapshot))
  const accounts = $(useState<Account[]>(SharedData.accounts))
  return {
    accounts: $$(accounts),
    gotSnapshot: $$(gotSnapshot),
    newUser,
    getUserAccounts,
    deleteAccount,
    addNewAccount,
  }
}

const getUserAccounts = () => {
  const db = getFirestore()
  const { uid } = $(useAuth())
  if (!uid) {
    console.error("Called getUserAccounts without uid")
    return
  }
  let gotSnapshot = $(useState<boolean>(SharedData.gotSnapshot))
  let accounts = $(useState<Account[]>(SharedData.accounts))
  onSnapshot(doc(db, "Users", uid), (snapshot) => {
    const snapshotData = snapshot.data()
    accounts = snapshotData?.accounts
    gotSnapshot = true
  })
  return {
    accounts: $$(accounts),
    gotSnapshot: $$(gotSnapshot),
  }
}

const addNewAccount = async (
  username: string,
  server: string,
  login: string,
  password: string,
  position: string
) => {
  const db = getFirestore()
  const { uid } = $(useAuth())
  const gotSnapshot = $(useState<boolean>(SharedData.gotSnapshot))
  const accounts = $(useState<Account[]>(SharedData.accounts))

  if (!uid) {
    console.error("Called addNewAccount without uid")
    return
  }
  if (!password && !username && !server && !login && !position && gotSnapshot)
    return
  const usersRef = doc(db, "Users", uid)
  await setDoc(usersRef, {
    accounts: [
      ...accounts,
      {
        name: username,
        server,
        position,
        login,
        password,
        id: uuid(),
      },
    ],
  })
}
const deleteAccount = async (id: string) => {
  const db = getFirestore()
  const { uid } = $(useAuth())
  const gotSnapshot = $(useState<boolean>(SharedData.gotSnapshot))
  const accounts = $(useState<Account[]>(SharedData.accounts))
  if (!uid) {
    console.error("Called deleteAccount without uid")
    return
  }
  if (accounts.length > 0 || gotSnapshot) {
    const usersRef = doc(db, "Users", uid)
    await setDoc(usersRef, {
      accounts: accounts.filter((account) => account.id !== id),
    })
  }
}
const newUser = async () => {
  const { uid } = $(useAuth())
  const db = getFirestore()
  if (!uid) {
    console.error("Called newUser without uid")
    return
  }
  await setDoc(doc(db, "Users", uid), {
    accounts: [],
  })
}

export default useDatabase
