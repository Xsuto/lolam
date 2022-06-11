<template>
  <nav>
    <NuxtLink class="logo" to="/">LOLAM</NuxtLink>
    <div>
      <NuxtLink class="link" to="/">Home</NuxtLink>
      <NuxtLink class="link" to="/dashboard">Dashboard</NuxtLink>

      <NuxtLink v-if="!user" class="link" to="/login">Login</NuxtLink>
      <NuxtLink v-if="!user" class="link" to="/signup">Sign up</NuxtLink>

      <NuxtLink v-if="user" class="link" to="/signout">Sign out</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { user } = useAuth()

</script>

<style scoped lang="scss">
.logo {
  color: var(--mainRed);
  outline: none;
  border: none;
  font-size: 2rem;
  background: none;
  text-decoration: none;
}

nav {
  background-color: var(--navBgColor);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.link {
  cursor: pointer;
  background: none;
  font-size: 1.2rem;
  border: none;
  outline: none;
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--textColor);
  position: relative;
  filter: brightness(0.8);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 110%;
    background-color: var(--textColor);
    opacity: 0;
    transition: opacity 0.1s ease-in;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

}

.NuxtLink-active {
  color: var(--mainRed) !important;
  filter: none !important;
}

@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;

    .link {
      margin-left: 0;
    }
  }
}
</style>
