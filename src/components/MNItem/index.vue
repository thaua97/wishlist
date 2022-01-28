<template>
  <article class="base-item">
    <mn-bookmark 
      class="base-item__bookmark"
      :item="product"
    />

    <div class="base-item__container">
      <img 
        class="base-item__image"
        :src="product.image" 
        :alt="product.title"
      />
      <h4 class="base-item__title">{{ product.title }}</h4>
      <p class="base-item__title--price">{{ price }}</p>
    </div>
  </article>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" />
