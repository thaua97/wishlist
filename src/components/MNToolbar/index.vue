<template>
  <header class="mn-toolbar">
    <div class="mn-toolbar__content">
      <nav class="mn-toolbar__nav">
        <router-link 
          :to="{name: 'Home'}" 
          class="mn-toolbar__nav--title"
        >
          MagaNets
        </router-link>
        <p class="mn-toolbar__nav--item">
          <map-marker />&nbsp; Cidade: {{city}}
        </p>
        <p class="mn-toolbar__nav--item">
          <phone-icon />&nbsp; Central de atendimento
        </p>
        <router-link 
          class="mn-toolbar__nav--item" 
          :to="{name: 'Wishlist'}"
        >
          <heart />&nbsp; Lista de desejos 
        </router-link>
      </nav>
      <input class="mn-toolbar__search" type="sarch" name="" id="">
    </div>
  </header>
</template>

<script src="./script.js"></script>
<style src="./styles.scss" lang="scss" />