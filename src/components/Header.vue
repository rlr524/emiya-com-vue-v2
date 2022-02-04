<template>
  <div id="header">
    <header class="relative mb-2">
      <div class="bg-white pt-6">
        <nav
          class="
            relative
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            px-4
            sm:px-6
          "
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="block sm:flex justify-between w-full">
              <router-link to="/">
                <span class="sr-only">Emiya Consulting Home</span>
                <img
                  src="../assets/ec_new_logo_tags_small.svg"
                  class="h-8 w-auto sm:h-10"
                  alt=""
                />
              </router-link>
            </div>
            <div class="hidden md:flex space-x-8 md:ml-10">
              <a
                href="/#services"
                class="
                  text-base
                  font-medium
                  text-emiyablack
                  hover:text-gray-300
                "
                aria-label="Section titled services"
                >Services</a
              >

              <router-link
                to="contact"
                class="
                  text-base
                  font-medium
                  text-emiyablack
                  hover:text-gray-300
                "
                aria-label="Section titled about"
                >Contact</router-link
              >
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
</style>