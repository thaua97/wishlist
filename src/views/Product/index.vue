<template>
  <section class="mn-product">
    <article class="mn-product__description">
      <h1 class="mn-product__title">
        {{ `${item.title} - ${item.description}` }} 
      </h1>
      <p>Ref.: {{item.sku}}</p>
    </article>

    <div class="mn-product__image">
      <mn-bookmark
        :item-id.sync="item.id"
      />
      <img :src="item.image" :alt="item.title">
    </div>

    <article class="mn-product__details">
      <span 
        v-if="item.isFreeShipping"
        class="mn-product__details--freeshipping"
      >
        <truck-icon fill="#7cdb67" /> &nbsp; Frete Grátis
      </span>
      <h1 class="mn-product__details--price">{{price}}</h1>
      <ul class="mn-product__sizes">
        <li
          v-if="item.availableSizes.S" 
          class="mn-product__sizes--item"
        > 
          S
        </li>
        <li
          v-if="item.availableSizes.M" 
          class="mn-product__sizes--item"
        >
          M
        </li>
        <li
          v-if="item.availableSizes.G" 
          class="mn-product__sizes--item"
        >
          G
        </li>
        <li
          v-if="item.availableSizes.GG" 
          class="mn-product__sizes--item"
        >
          GG
        </li>
        <li
          v-if="item.availableSizes.GGG" 
          class="mn-product__sizes--item"
        >
          GGG
        </li>
      </ul>
    </article>
  </section>
</template>

<script src="./script.js" />
<styles src="./styles.scss" lang="scss" scoped />