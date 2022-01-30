<template>
  <div>
    <header class="mn-toolbar">
      <div class="mn-toolbar__content">
        <nav class="mn-toolbar__nav">
          <router-link 
            :to="{name: 'Home'}" 
            class="mn-toolbar__nav--title"
          >
            MagaNets
          </router-link>
          <a class="mn-toolbar__nav--item">
            <map-marker />&nbsp;<span id="location"> Cidade: {{city}}</span>
          </a>
          <a class="mn-toolbar__nav--item">
            <phone-icon />&nbsp; Central de atendimento
          </a>
          <router-link 
            class="mn-toolbar__nav--item" 
            :to="{name: 'Wishlist'}"
          >
            <heart />&nbsp; Lista de desejos 
          </router-link>
        </nav>
        <input class="mn-toolbar__search" type="sarch" name="">
      </div>
    </header>

    <header class="mn-toolbar-responsive">
      <div class="mn-toolbar-responsive__navegate">
        <router-link 
          :to="{name: 'Home'}" 
          class="mn-toolbar-responsive__navegate--title"
        >MagaNets</router-link>
        
        <menu-icon
          :size="42"
          @click="toogleMenu"
        />
      </div>

      <nav 
        :class="[
          'mn-toolbar-responsive__nav',
          {'mn-toolbar-responsive__nav--active': open}
        ]"
      >
        <a class="mn-toolbar-responsive__nav--item">
          <map-marker />&nbsp; Cidade: {{city}}
        </a>
        <a class="mn-toolbar-responsive__nav--item">
          <phone-icon />&nbsp; Central de atendimento
        </a>
        <router-link 
          class="mn-toolbar-responsive__nav--item" 
          :to="{name: 'Wishlist'}"
        >
          <heart />&nbsp; Lista de desejos 
        </router-link>
      </nav>
    </header>

  </div>
</template>

<script src="./script.js"></script>
<style src="./styles.scss" lang="scss" />