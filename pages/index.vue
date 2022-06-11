<template>
  <section>
    <div class="article-container">
      <article>
        <h1>Welcome to LOLAM</h1>
        <p>Account manager for league of legends</p>
        <button @click="handleClick">Try it</button>
      </article>
    </div>
    <img src="../assets/PasswordImg.svg" alt="Password Image" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home"
})
const router = useRouter()
const handleClick = () => router.push("/login")
</script>
<style lang="scss" scoped>

section {
  background-color: var(--bgColor);
  display: flex;
  flex-grow: 100;
}

div {
  width: 50%;
}

.article-container {
  z-index: 2000;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: left;
  font-size: 2rem;
  margin-left: 3rem;

  p {
    width: 80%;
  }

  button {
    background-color: var(--mainRed);
    color: var(--textColor);
    border: none;
    width: 40%;
    height: 2.5rem;
    border-radius: 0.3rem;
    outline: none;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.7);
    }
  }

}

img {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 600px;
  height: 400px;
}

@media only screen and (max-width: 1600px) {
  img {
    top: 40%;
    width: 500px;
    height: 400px;
  }
}

@media only screen and (max-width: 1000px) {
  img {
    top: 40%;
    width: 400px;
    height: 300px;
  }
}

@media only screen and (max-width: 800px) {
  img {
    display: none;
  }
  div {
    padding-top: 4rem;
    width: 100%;
  }
  .article-container {
    margin: 0;
    font-size: 1.5rem;
    justify-content: flex-start;
    align-items: center;

    article {
      margin-top: 1.5rem;
      gap: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  p {
    width: 100%;
    margin: 0;
  }
}
</style>
