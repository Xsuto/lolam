<template>
  <div class="accounts">
    <AccountGridItem class="account" v-for="(account, i) in accounts" :account="account" :key="i" />
  </div>

</template>

<script setup lang="ts">
const { user, isLoading } = useAuth()
const { accounts, gotSnapshot, getUserAccounts } = useDatabase()
watchEffect(() => {
  if (!user.value || isLoading.value || gotSnapshot.value) return
  getUserAccounts()
})
</script>

<style lang="scss" scoped>
.account {
  grid-row: span 6;
}

.accounts {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 3fr));
  gap: 3rem 1rem;
  margin-bottom: 2rem;
}

@media only screen and (max-width: 600px) {
  .accounts {
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
  }
}
</style>
