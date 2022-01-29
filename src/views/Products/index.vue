<template>
  <main class="home-view">
    <section class="home-view__wrapper">
      <mn-list  
        :products.sync="items"
      />
    </section>
  </main>
</template>

<script src="./script.js" />
<styles src="./styles.scss" lang="scss" scoped />

