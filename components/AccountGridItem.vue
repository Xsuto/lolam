<template>
  <article>
    <div class="container">
      <div class="info">
        <h1>Username </h1>
        <p>{{ account.name }}</p>
      </div>
      <TrashIcon @click="handleDeleteButton" class="icon" />
    </div>
    <div class="info">
      <h1>Server </h1>
      <p>{{ account.server }}</p>
    </div>
    <div class="info">
      <h1>Position </h1>
      <p>{{ account.position }}</p>
    </div>
    <div class="container">
      <div class="info">
        <h1>Login </h1>
        <p>{{ account.login }}</p>
      </div>
      <CopyIcon v-if="!copiedLogin" @click="copyToClipboard('login')" class="icon" />
      <CheckIcon v-else @click="copyToClipboard('login')" class="icon" />
    </div>

    <div class="container">
      <div class="info">
        <h1>Password</h1>
        <p> {{ password }}</p>
      </div>
      <div>
        <EyeIcon class="icon" v-if="!showPassword" @click="handleShowButtonClick" />
        <EyeSlashedIcon class="icon" v-else @click="handleShowButtonClick" />
        <CopyIcon v-if="!copiedPassword" @click="copyToClipboard('password')" class="icon" />
        <CheckIcon v-else @click="copyToClipboard('password')" class="icon" />
      </div>
    </div>

  </article>

</template>

<script setup lang="ts">
import { Account } from "@/interfaces/UserInterface"

const { user } = useAuth()
const { deleteAccount } = useDatabase()
const props = defineProps({
  account: {
    type: Object as () => Account,
    required: true
  }
})
let showPassword = $ref(false)
let passwordAsStars = $computed(() => props.account.password.split("").map(() => "*").join(""))
let copiedLogin = $ref(false)
let copiedPassword = $ref(false)
const handleShowButtonClick = () => {
  showPassword = !showPassword
}
const password = computed(() => (showPassword ? props.account.password : passwordAsStars))
const copyToClipboard = async (ele: "login" | "password") => {
  if (ele === "login") {
    await navigator.clipboard.writeText(props.account.login)
    copiedLogin = true
    copiedPassword = false
  } else {
    await navigator.clipboard.writeText(props.account.password)
    copiedLogin = false
    copiedPassword = true
  }
}
const handleDeleteButton = () => {
  console.log("deleted")
  deleteAccount(props.account.id)
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
  background-color: var(--bgColor);
  color: var(--textColor);
}

.container {
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.info {
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.2rem;
  }

  h1 {
    color: var(--mainRed);
  }
}

.icon {
  margin-left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    fill: var(--mainRed)
  }
}

@media screen and (max-width: 1000px) {
  .info {
    gap: 0.5rem;

    h1 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
  .icon {
    font-size: 1rem;
  }
}
</style>
