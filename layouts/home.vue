<template>
  <main>
    <Navbar />
    <slot />
  </main>
</template>

<style scoped>
main {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
