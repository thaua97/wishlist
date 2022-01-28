<template>
  <div id="app">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
    MainLayout: () => import('@/layouts/MainLayout'),
  },
}
</script>
