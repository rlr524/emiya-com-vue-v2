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
                    >we'll mind your tech</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  You're not in business to write code. Let us build and manage
                  your web and mobile app presence.
                </p>
                <div class="mt-10 sm:mt-12">
                  <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div class="sm:flex">
                      <div class="min-w-0 flex-1">
                        <label for="email" class="sr-only">Email address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-gray-600 to-emiyablue text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                    <p class="mt-3 text-sm text-white sm:mt-4">
                      Let's talk about what you need and how we can help. By
                      providing your email, you agree to our
                      <a href="#" class="font-medium text-white underline"
                        >terms of service</a
                      >.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
              >
                <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                <img
                  class="w-10/12 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-10/12 lg:max-w-none"
                  src="../assets/illustration_main.svg"
                  alt=""
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
};
</script>

<style scoped>
</style>