<template>
  <div id="app">
    <div class="bg-white">
      <div class="relative overflow-hidden">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>


<style>
</style>
