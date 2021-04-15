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
                action=""
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
                  <div class="flex justify-between">
                    <label
                      for="email"
                      class="block text-base font-medium text-gray-700"
                      >Email</label
                    >
                    <span id="email_description" class="text-sm text-gray-500"
                      >Required</span
                    >
                  </div>

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
                  </div>

                  <div class="mt-1">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
                    @click="onSubmit"
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
      async function postContact(url = "", data) {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.VUE_APP_CLICK_API_TOKEN,
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        return response.json();
      }
      const dateNow = Date.now();
      const dueDate = dateNow + 64800000;
      const taskId = `${dateNow}ec_crm`;
      const newContact = {
        custom_id: taskId,
        name: `Form Submission - ${taskId}`,
        description: "New Contact Form Submission from .com",
        status: "Open",
        assignees: [10621784],
        tags: null,
        parent: null,
        priority: 3,
        due_date: dueDate,
        start_date: dateNow,
        time_estimate: 1800000,
        custom_fields: [
          {
            id: "505762ef-f133-45fa-8d89-4a819df6843b",
            value: this.company,
          },
          {
            id: "113e9c11-9e8d-4343-8e3d-e3e8a386460c",
            value: this.lname,
          },
          {
            id: "5b44d46a-3236-417c-868a-4bf18d9d9f53",
            value: this.email,
          },
          {
            id: "47bb86f4-5c5d-4065-ab47-3213f2836119",
            value: this.fname,
          },
          {
            id: "539c54e6-19d3-4153-9421-2ca56d978baf",
            value: this.phone,
          },
          {
            id: "37ddb56e-850d-40be-9a6c-ffabd8ecd204",
            value: this.description,
          },
          {
            id: "10577781-3a4d-40f8-b432-659b8a6ff73d",
            value: this.howhear,
          },
        ],
      };

      postContact(
        "https://api.clickup.com/api/v2/list/8462752/task",
        newContact
      ).then((data) => {
        console.log(data);
      });

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