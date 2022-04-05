<template>
  <!-- Page Container -->
  <div
    id="page-container"
    class="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
  >
    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col max-w-full">
      <div
        class="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full"
      >
        <!-- Patterns Background -->
        <div
          class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"
        />
        <div
          class="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"
        />
        <!-- END Patterns Background -->

        <!-- Sign In Section -->
        <div class="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
          <!-- Header -->
          <div class="mb-8 text-center">
            <h1
              class="text-4xl font-bold inline-flex items-center mb-1 space-x-3"
            >
              <svg
                class="hi-solid hi-cube-transparent inline-block w-8 h-8 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Company</span>
            </h1>
            <p class="text-gray-500">
              Welcome, please sign in to your dashboard
            </p>
          </div>
          <!-- END Header -->

          <!-- Sign In Form -->
          <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden">
            <div class="p-5 lg:p-6 grow w-full">
              <!-- Danger Alert -->
              <div v-if="errors.length" class="p-4 md:p-5 rounded text-red-700 bg-red-100">
                <div class="flex items-center mb-3">
                  <svg class="hi-solid hi-x-circle inline-block w-5 h-5 mr-3 flex-none text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
                  <h3 class="font-semibold">
                    Please fix the following errors:
                  </h3>
                </div>
                <ul v-for="(error, i) in errors" :key="i + 1" class="list-inside ml-8 space-y-2">
                  <li class="flex items-center">
                    <svg class="hi-solid hi-arrow-narrow-right inline-block w-4 h-4 flex-none mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                    {{ error }}
                  </li>
                </ul>
              </div>
              <!-- END Danger Alert -->
              <div class="sm:p-5 lg:px-10 lg:py-8">
                <form class="space-y-6" method="POST" @submit.prevent="handleLoginSubmit">
                  <div class="space-y-1">
                    <label
                      for="tk-pages-sign-in-email"
                      class="font-medium"
                    >Email</label>
                    <input
                      id="tk-pages-sign-in-email"
                      v-model="form.email"
                      class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="email"
                      placeholder="Enter your email"
                    >
                  </div>
                  <div class="space-y-1">
                    <label
                      for="tk-pages-sign-in-password"
                      class="font-medium"
                    >Password</label>
                    <input
                      id="tk-pages-sign-in-password"
                      v-model="form.password"
                      class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="password"
                      placeholder="Enter your password"
                    >
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                      :disabled="formBusy"
                    >
                      Sign In
                    </button>
                    <!-- <div
                      class="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4"
                    >
                      <label class="flex items-center">
                        <input
                          type="checkbox"
                          class="border border-gray-200 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                        <span class="ml-2"> Remember me </span>
                      </label>
                      <a
                        href="javascript:void(0)"
                        class="inline-block text-indigo-600 hover:text-indigo-400"
                      >Forgot Password?</a>
                    </div> -->
                  </div>
                </form>
              </div>
            </div>
            <div
              class="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50"
            >
              Don’t have an account yet?
              <a
                class="font-medium text-indigo-600 hover:text-indigo-400"
                href="/signup"
              >Join us today</a>
            </div>
          </div>
          <!-- END Sign In Form -->

          <!-- Footer -->
          <!-- <div class="text-sm text-gray-500 text-center mt-6">
            <a
              class="font-medium text-indigo-600 hover:text-indigo-400"
              href="https://tailkit.com"
              target="_blank"
            >Tailkit</a>
            by
            <a
              class="font-medium text-indigo-600 hover:text-indigo-400"
              href="https://pixelcave.com"
              target="_blank"
            >pixelcave</a>
          </div> -->
          <!-- END Footer -->
        </div>
        <!-- END Sign In Section -->
      </div>
    </main>
    <!-- END Page Content -->
  </div>
  <!-- END Page Container -->
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      formBusy: false,
      errors: []
    }
  },

  methods: {
    async handleLoginSubmit () {
      const credentials = this.form
      this.formBusy = true
      this.errors = []
      try {
        await this.$auth.loginWith('graphql', credentials)
        this.formBusy = false
      } catch ({ graphQLErrors: errors }) {
        this.formBusy = false
        // Handle hour custom error
        if (errors && errors.length) {
          errors.forEach((error) => {
            // if (error.extensions.key === 'InvalidCredentials') {
            this.errors = [...this.errors, error.message]
            // }
          })
        } else {
          // Handle other errors
        }
      }
    }
  }
}
</script>
