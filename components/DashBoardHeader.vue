<template>
  <div>
    <h1>Yours accounts</h1>
    <span>
      <p>Add new account </p>
      <IconsAdd @click="handleClick" />
    </span>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const handleClick = () => {
  router.push("/newaccount")
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6rem;
  margin-top: 3rem;

  h1 {
    font-size: 3rem
  }

  p {
    margin-top: 0.5rem;
    font-size: 2rem;
    margin-right: 1rem;
  }

  svg {
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      fill: var(--mainRed)
    }
  }

  span {
    display: flex;
    align-items: center;
    flex-direction: row;

  }
}

@media only screen and (max-width: 800px) {
  div {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
}
</style>
