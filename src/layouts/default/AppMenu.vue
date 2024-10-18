<template>
  <v-app>
    <default-bar />
    <v-layout>
      <div>Menu</div>
      <v-container fluid>
        <default-view />
      </v-container>
    </v-layout>
  </v-app>
</template>
<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>