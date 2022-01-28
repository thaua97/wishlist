<template>
    <span 
      class="base-bookmark"
      @click="toogleWishlist(item)"
    >
      <heart :fill-color.sync="isChecked" />
    </span>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" />