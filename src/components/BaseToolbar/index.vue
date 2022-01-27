<template>
  <header class="base-toolbar">
    <div class="base-toolbar__content">
      <nav class="base-toolbar__nav">
        <router-link 
          :to="{name: 'Home'}" 
          class="base-toolbar__nav--title"
        >
          MagaNets
        </router-link>
        <p class="base-toolbar__nav--item">
          <map-marker />&nbsp; Cidade: Pelotas-RS
        </p>
        <p class="base-toolbar__nav--item">
          <phone-icon />&nbsp; Central de atendimento
        </p>
        <router-link 
          class="base-toolbar__nav--item" 
          :to="{name: 'Wishlist'}"
        >
          <heart />&nbsp; Lista de desejos 
        </router-link>
      </nav>
      <input class="base-toolbar__search" type="sarch" name="" id="">
    </div>
  </header>
</template>

<script src="./script.js"></script>
<style src="./styles.scss" lang="scss" />