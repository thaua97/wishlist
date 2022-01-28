<template>
  <ul class="breadcrumbs">
    <li 
      v-for="(breadcrumb, index) in  breadcrumbsList"
      :key="index"
      class="breadcrumbs__item"
      @click="navegateTo(index)"
    >
      {{ breadcrumb.name }}
    </li>
  </ul>

</template>

<script src="./script.js">
<styles src="./styles.scss" lang="scss" />
