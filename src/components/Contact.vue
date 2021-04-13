<template>
  <div
    id="contact"
    class="min-h-screen bg-white pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
  >
    <main>
      <!-- Contact Section -->
      <div class="relative bg-white mx-auto max-w-7xl">
        <div class="lg:absolute lg:inset-0 ml-6 mr-6">
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixqx=x8Cbgkpfkk&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div
          class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2"
        >
          <div class="lg:pr-8">
            <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's work together
              </h2>
              <form
                action="#"
                method="POST"
                class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    for="first_name"
                    class="block text-base font-medium text-gray-700"
                    >First name</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      v-model="fname"
                      autocomplete="given-name"
                      class="block w-full shadow-sm sm:text-sm focus:ring-emiyablue focus:border-emiyablue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block text-base font-medium text-gray-700"
                    >Last name</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      v-model="lname"
                      autocomplete="family-name"
                      class="block w-full shadow-sm sm:text-sm focus:ring-emiyablue focus:border-emiyablue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-base font-medium text-gray-700"
                    >Email</label
                  >
                  <div class="mt-1">
                    <input
                      id="email"
                      v-model="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="block w-full shadow-sm sm:text-sm focus:ring-emiyablue focus:border-emiyablue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="company"
                      class="block text-base font-medium text-gray-700"
                      >Company</label
                    >
                    <span id="phone_description" class="text-sm text-gray-500"
                      >Optional</span
                    >
                  </div>

                  <div class="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      v-model="company"
                      autocomplete="organization"
                      class="block w-full shadow-sm sm:text-sm focus:ring-emiyablue focus:border-emiyablue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="phone"
                      class="block text-base font-medium text-gray-700"
                      >Phone</label
                    >
                  </div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      v-model="phone"
                      autocomplete="tel"
                      aria-describedby="phone_description"
                      class="block w-full shadow-sm sm:text-sm focus:ring-emiyablue focus:border-emiyablue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="how_can_we_help"
                      class="block text-base font-medium text-gray-700"
                      >How can we help you?</label
                    >
                    <span
                      id="how_can_we_help_description"
                      class="text-sm text-gray-500"
                      >Max. 500 characters</span
                    >
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="how_can_we_help"
                      v-model="description"
                      name="how_can_we_help"
                      aria-describedby="how_can_we_help_description"
                      rows="4"
                      class="block w-full shadow-sm sm:text-sm focus:ring-emiyablue focus:border-emiyablue border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="how_did_you_hear_about_us"
                      class="block text-base font-medium text-gray-700"
                      >How did you hear about us?</label
                    >
                    <span id="phone_description" class="text-sm text-gray-500"
                      >Optional</span
                    >
                  </div>

                  <div class="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how_did_you_hear_about_us"
                      v-model="howhear"
                      class="shadow-sm focus:ring-emiyablue focus:border-emiyablue block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="text-right sm:col-span-2">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md py-3 px-4 rounded-md shadow bg-gradient-to-r from-gray-600 to-emiyablue text-white font-medium hover:from-gray-500 hover:to-emiyablue80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      company: "",
      phone: "",
      description: "",
      howhear: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.email) {
        alert("Please enter an email address, all other fields are optional.");
        return;
      }
      const newContact = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        company: this.company,
        phone: this.phone,
        description: this.description,
        howhear: this.howhear,
      };
      this.$emit("add-contact", newContact);

      (this.fname = ""),
        (this.lname = ""),
        (this.email = ""),
        (this.company = ""),
        (this.phone = ""),
        (this.description = ""),
        (this.howhear = "");
    },
  },
};
</script>

<style scoped>
</style>