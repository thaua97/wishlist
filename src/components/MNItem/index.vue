<template>
  <article class="mn-item">
    <mn-bookmark 
      v-if="$route.name === 'Home'"
      class="mn-item__bookmark"
      :item.sync="product"
    />

    <mn-remove-bookmark
      v-if="$route.name === 'Wishlist'"
      :product-id="product.id"
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
