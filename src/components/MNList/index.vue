<template>
  <ul class="mn-list">
    <li
      v-for="product in products"
      :key="product.id"
      class="mn-list__item"
    >
      <mn-item :product="product"></mn-item>
    </li>
  </ul>
</template>

<script src="./script.js" />

<style src="./styles.scss" lang="scss" scoped />