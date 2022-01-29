<template>
  <div>
    <ul 
      v-if="products.length"
      class="mn-list"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="mn-list__item"
      >
        <mn-item :product="product"></mn-item>
      </li>
    </ul>

    <section 
      v-else 
      class="mn-list__no-data"
    >
      <h1>Nenhum produto encontrado</h1>
    </section>
  </div>
</template>

<script src="./script.js" />

<style src="./styles.scss" lang="scss" scoped />