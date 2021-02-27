<template>
  <div id="about">
    <!-- About section -->
    <div
      class="pb-16 bg-gradient-to-r from-emiyablue80 to-emiyablue lg:pb-0 lg:z-10 lg:relative"
    >
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8"
      >
        <div class="relative lg:-my-8">
          <div
            aria-hidden="true"
            class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          ></div>
          <div
            class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full"
          >
            <div
              class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
            >
              <img
                class="object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none"
          >
            <blockquote>
              <div>
                <p class="mt-6 text-2xl italic font-medium text-white">
                  You don't need just a "coder", you need a partner
                </p>
                <p class="mt-6 text-2xl font-medium text-white">
                  With 30 years of experience on and leading business and
                  technical teams with an F500 retailer and broad knowledge in
                  web and mobile app technologies, I am able to bring both a
                  business and developer viewpoint to your project. I specialize
                  in single-page apps using the Vue.js framework, backends/APIs
                  using both Node.js and the Go language, as well as mobile iOS
                  apps. I can also consult on and support hardware (network,
                  POS) build out, vendor selection and general tech needs.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
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