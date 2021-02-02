<template>
  <div id="header">
    <header class="relative mb-2">
      <div class="bg-white pt-6">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="../assets/ec_new_logo_tags_small.svg"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  @click="openMenu"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-emiyablack hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  id="main-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open main menu</span>
                  <!-- Heroicon name: menu -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="hidden space-x-8 md:flex md:ml-10">
              <a
                href="#services"
                class="text-base font-medium text-emiyablack hover:text-gray-300"
                aria-label="Section titled services"
                >Services</a
              >

              <a
                href="#about"
                class="text-base font-medium text-emiyablack hover:text-gray-300"
                aria-label="Section titled about"
                >About</a
              >

              <a
                href="#portfolio"
                class="text-base font-medium text-emiyablack hover:text-gray-300"
                aria-label="Section titled portfolio"
                >Portfolio</a
              >
            </div>
          </div>
          <div class="hidden md:flex md:items-center md:space-x-6">
            <!-- <a
              href="#"
              class="text-base font-medium text-emiyablack hover:text-gray-300"
            >
              Log In
            </a> -->
            <a
              href="/contact"
              class="block w-full py-3 px-4 mr-36 rounded-md shadow bg-gradient-to-r from-gray-600 to-emiyablue text-white font-medium hover:from-gray-500 hover:to-emiyablue80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
              aria-label="Open contact form"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>

      <!-- Mobile menu, show/hide based on menu open state. -->
      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
      </transition>
      <div
        v-show="isOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="../assets/ec_new_logo_tags_small.svg"
                alt=""
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                @click="closeMenu"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-emiyablack hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emiyablue80"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="pt-5 pb-6"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-2 space-y-1" role="none">
              <a
                href="#services"
                class="block px-3 py-2 rounded-md text-base font-medium text-emiyablack hover:bg-gray-50"
                role="menuitem"
                aria-label="Section titled services"
                >Services</a
              >

              <a
                href="#about"
                class="block px-3 py-2 rounded-md text-base font-medium text-emiyablack hover:bg-gray-50"
                role="menuitem"
                aria-label="Section titled about"
                >About</a
              >

              <a
                href="#portfolio"
                class="block px-3 py-2 rounded-md text-base font-medium text-emiyablack hover:bg-gray-50"
                role="menuitem"
                aria-label="Section titled portfolio"
                >Portfolio</a
              >
            </div>
            <div role="none" class="mt-6 px-5 text-center">
              <a
                href="/contact"
                class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-gray-600 to-emiyablue text-white font-medium hover:from-gray-500 hover:to-emiyablue80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                >Contact Us</a
              >
            </div>
            <!-- <div role="none" class="mt-6 px-5">
              <p class="text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-gray-900 hover:underline">Login</a>
              </p>
            </div> -->
          </div>
        </div>
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