<template>
  <div id="app">
    <base-toolbar/>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    BaseToolbar: () => import('@/components/BaseToolbar')
  }
}
</script>
