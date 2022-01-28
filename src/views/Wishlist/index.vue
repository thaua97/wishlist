<template>
  <main class="wishlist-view">  
    <section class="wishlist-view__wrapper">
      <ul class="wishlist-view__list">
        <li
          v-for="product in getWishlist"
          :key="product.id"
          class="wishlist-view__list--item"
        >
          <mn-item :product="product"></mn-item>
        </li>
      </ul>
    </section>
  </main>
</template>

<script src="./script.js" />
<styles src="./styles.scss" lang="scss" scoped />
