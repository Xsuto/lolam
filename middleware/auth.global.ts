export default defineNuxtRouteMiddleware((to) => {
  const { user } = useAuth()
  if (user.value == null && to.meta.requiresAuth === true) {
    return {
      path: "/login",
    }
  }
  if (
    (user.value != null && to.path === "/login") ||
    (user.value != null && to.path === "/signup")
  ) {
    return {
      path: "/dashboard",
    }
  }
})
