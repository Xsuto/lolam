<template>
  <form @submit.prevent="handleSubmit">
    <header>
      <h1>Add new account to yours dashboard</h1>
    </header>
    <div class="data">
      <label>Username</label>
      <input required v-model="username" />
    </div>
    <div class="data">
      <label>Login</label>
      <input required v-model="login" />
    </div>
    <div class="data">
      <label>Password</label>
      <article>
        <input required :type="showPassword ? 'text' : 'password'" v-model="password" />
        <IconsEye class="icon" v-if="!showPassword" @click="handleShowButtonClick" />
        <IconsEyeSlashed class="icon" v-else @click="handleShowButtonClick" />
      </article>
    </div>
    <label>Server</label>
    <section>
      <label>Eune</label>
      <input
        required
        type="radio"
        class="radio-button"
        value="eune"
        name="server"
        v-model="server"
      />
      <label>Euw</label>
      <input type="radio" class="radio-button" value="euw" name="server" v-model="server" />
      <label>Na</label>
      <input type="radio" class="radio-button" value="na" name="server" v-model="server" />
    </section>
    <section>
      <label>Top</label>
      <input
        required
        type="radio"
        class="radio-button"
        value="Top"
        name="position"
        v-model="position"
      />
      <label>Jg</label>
      <input type="radio" class="radio-button" value="Jg" name="position" v-model="position" />
      <label>Mid</label>
      <input type="radio" class="radio-button" value="Mid" name="position" v-model="position" />
      <label>Adc</label>
      <input type="radio" class="radio-button" value="Adc" name="position" v-model="position" />
      <label>Supp</label>
      <input type="radio" class="radio-button" value="Supp" name="position" v-model="position" />
    </section>
    <div class="buttons">
      <button type="submit">Create</button>
      <button @click="goBack" type="button" class="GoBackBtn">Go back</button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"

const { uid } = useAuth()
const { addNewAccount } = useDatabase()
const username = $ref("")
const server = $ref("")
const login = $ref("")
const password = $ref("")
const position = $ref("")
const showPassword = ref(false)
const router = useRouter()
const handleSubmit = async () => {
  await addNewAccount(
    username,
    server,
    login,
    password,
    position
  )
  router.push("/dashboard")
}
const handleShowButtonClick = () => {
  showPassword.value = !showPassword.value
}
const goBack = () => router.push("/dashboard")
</script>
<style lang="scss" scoped>
form {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  max-width: 30vw;
  background-color: var(--bgColor);
  color: var(--textColor);
}

label,
input,
button,
h1 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background-color: var(--bgColor);
  color: var(--textColor);
}

input {
  outline: none;
  border: none;
  border-bottom: var(--textColor) 1px solid;

  &:focus {
    border-bottom-color: var(--mainRed);
  }
}

header {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 100;
  }
}

.data {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    svg {
      position: absolute;
      top: 10%;
      right: 2%;
      z-index: 20;
      cursor: pointer;

      &:hover {
        fill: var(--mainRed);
      }
    }
  }

  input {
    width: 100%;
  }
}

.flex {
  display: flex;
  align-items: center;
}

section {
  width: 100%;
  display: flex;
  align-items: center;

  input,
  label {
    margin-right: 0.5rem;
  }
}

.buttons {
  width: 100%;
  display: flex;

  button {
    width: 65%;
    height: 3rem;
    border: var(--textColor) 1px solid;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .GoBackBtn {
    width: 30%;
    margin-left: 5%;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--textColor);
  -webkit-box-shadow: 0 0 0 1000px var(--bgColor) inset;
  transition: background-color 5000s ease-in-out 0s;
}

@media screen and (max-width: 1000px) {
  label,
  input,
  button,
  h1 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 600px) {
  form {
    max-width: none;
  }
}
</style>
