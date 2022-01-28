<template>
  <article class="mn-item">
    <mn-bookmark 
      class="mn-item__bookmark"
      :item="product"
    />

    <div class="mn-item__container">
      <img 
        class="mn-item__image"
        :src="product.image" 
        :alt="product.title"
      />
      <h4 class="mn-item__title">{{ product.title }}</h4>
      <p class="mn-item__title--price">{{ price }}</p>
    </div>
  </article>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" />
