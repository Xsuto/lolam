<template>
  <main>
    <DashBoardHeader />
    <AccountsGrid />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  requiresAuth: true
})
</script>

<style lang="scss" scoped>
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
