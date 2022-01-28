<template>
  <ul class="mn-breadcrumbs">
    <li 
      v-for="(breadcrumb, index) in  breadcrumbsList"
      :key="index"
      :class="[
        'mn-breadcrumbs__item',
        {'mn-breadcrumbs__item--linked':breadcrumb.link }
      ]"
      @click="navegateTo(index)"
    >
      {{ breadcrumb.name }}
    </li>
  </ul>

</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" />

