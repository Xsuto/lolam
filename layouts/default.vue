<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
div {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 100;
}
</style>
