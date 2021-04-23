<template>
  <div id="main">
    <main>
      <div
        class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
            >
              <div class="lg:py-20">
                <h1
                  class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl"
                >
                  <span class="text-white block">You mind your business</span>
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-white to-emiyablue block"
                    >We'll mind your tech</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  You're not in business to write code, manage tech
                  infrastructure or deal with tech vendors. Let us build and
                  manage your web and mobile app presence as well as handle
                  support of your technology back of the house.
                </p>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
              >
                <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                <img
                  class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full lg:max-w-none"
                  src="../assets/illustration_main.svg"
                  alt="Main section illustration - Emiya Consulting, Web site design and development, mobile app development, and small business technology consulting in the Central Puget Sound area"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async postEmail() {},
  },
};
</script>

<style scoped>
</style>