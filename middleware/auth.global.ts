export default defineNuxtRouteMiddleware((to) => {
  const { user } = useAuth()
  // @ts-ignore
  if (user.value == null && to.meta.requiresAuth === true) {
    return {
      path: "/login"
    }
  }
  // @ts-ignore
  if ((user.value != null && to.path === "/login") || (user.value != null && to.path === "/signup")) {
    return {
      path: "/dashboard"
    }
  }
})

