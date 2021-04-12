<template>
  <div class="home">
    <app-main></app-main>
    <app-services></app-services>
    <app-about></app-about>
    <!-- <app-portfolio></app-portfolio> -->
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
// import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Home",
  components: {
    appMain: Main,
    appServices: Services,
    appAbout: About,
    // appPortfolio: Portfolio,
  },
};
</script>
