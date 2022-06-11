<template>
  <form @submit.prevent="handleSubmit">
    <header>
      <h1>Create Account</h1>
      <h1>{{ error }}</h1>
    </header>
    <div>
      <label for="email">Email</label>
      <input v-model="email" required name="email" type="text" />
    </div>
    <div>
      <label for="email">Password</label>
      <input v-model="password" required name="password" type="password" />
    </div>
    <div>
      <label for="passwordRepeated">Confirm Password</label>
      <input v-model="passwordRepeated" required name="passwordRepeated" type="password" />
    </div>
    <button type="submit">Create Account</button>
  </form>
</template>

<script setup lang="ts">
const { createAccount, error } = useAuth()
const email = $ref("")
const password = $ref("")
const passwordRepeated = $ref("")
const handleSubmit = async () => {
  if (password === passwordRepeated) await createAccount(email, password)
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  min-width: 30vw;
  padding: 2rem;
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

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    width: 100%;
  }
}

button {
  width: 100%;
  height: 3rem;
  border: var(--textColor) 1px solid;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  filter: brightness(0.98);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--textColor);
  -webkit-box-shadow: 0 0 0 1000px var(--bgColor) inset;
  transition: background-color 5000s ease-in-out 0s;
}

@media screen and (min-width: 1800px) {
  form {
    width: 500px;
    min-width: unset;
  }
}

@media screen and (min-width: 700px) {
  form {
    max-width: 40vh;
  }
}
</style>
