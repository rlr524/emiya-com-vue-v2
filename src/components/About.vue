<template>
  <div id="about">
    <!-- About and contact section  -->
    <div class="relative bg-white py-2 sm:py-3 lg:py-4">
      <div
        class="
          mx-auto
          max-w-md
          px-4
          text-center
          sm:max-w-3xl sm:px-6
          lg:px-8 lg:max-w-7xl
        "
      >
        <h2
          class="
            text-base
            font-semibold
            tracking-wider
            text-emiyablue
            uppercase
          "
        >
          About Us
        </h2>
        <p
          class="
            mt-2
            text-3xl
            font-extrabold
            text-gray-900
            tracking-tight
            sm:text-4xl
          "
        >
          Experience to fit your business and tech needs
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          With 30 years of experience on and leading business and technical
          teams with an F500 retailer and broad knowledge in web and mobile app
          technologies, I am able to bring both a business and developer
          viewpoint to your project. I specialize in single-page apps using the
          Vue.js framework, backends/APIs using both Node.js and the Go
          language, as well as mobile iOS apps. I can also consult on and
          support hardware (network, POS) build out, vendor selection and
          general tech needs.
          <router-link to="contact" class="underline font-bold"
            >Let us know how we can work together.</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
</style>