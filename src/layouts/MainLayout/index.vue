<template>
  <div class="mn-main-template">
    <mn-toolbar />
    <mn-breadcrumbs />
    <slot />
  </div>
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