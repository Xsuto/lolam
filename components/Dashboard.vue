<template>
  <main>
    <DashBoardHeader />
    <AccountsGrid />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  requiresAuth: ref(true)
})
</script>

<style lang="scss" scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 100;
}
</style>
