<template>
  <main class="home-view">
    <section class="home-view__wrapper">
      <ul class="home-view__list">
        <li
          v-for="product in getProducts"
          :key="product.id"
          class="home-view__list--item"
        >
          <base-item :product.sync="product"></base-item>
        </li>
      </ul>
    </section>
  </main>
</template>

<script src="./script.js" />
<styles src="./styles.scss" lang="scss" scoped />

