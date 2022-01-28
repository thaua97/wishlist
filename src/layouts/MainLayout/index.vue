<template>
  <span>
    <mn-toolbar />
    <mn-breadcrumbs />
    <slot />
  </span>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    'mn-toolbar': () => import('@/components/MNToolbar'),
    'mn-breadcrumbs': () => import('@/components/MNBreadcrumbs'),
  },
}
</script>

<style>

</style>