<template>
  <!-- Header -->
  <header
    id="page-header"
    class="flex flex-none items-center bg-white py-10"
    x-data="{ userDropdownOpen: false, mobileNavOpen: false }"
  >
    <div
      class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8"
    >
      <div>
        <a
          href="/"
          class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400"
        >
          <SvgLogo />
          <span>Company</span>
        </a>
      </div>
      <div
        class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10"
      >
        <nav class="space-x-4 md:space-x-6">
          <NuxtLink
            to="/features"
            tag="a"
            class="font-semibold text-gray-900 hover:text-gray-500"
          >
            <span>Features</span>
          </NuxtLink>
          <NuxtLink
            to="/plans"
            tag="a"
            class="font-semibold text-gray-900 hover:text-gray-500"
          >
            <span>Plans</span>
          </NuxtLink>
          <NuxtLink
            to="/blog"
            tag="a"
            class="font-semibold text-gray-900 hover:text-gray-500"
          >
            <span>Blog</span>
          </NuxtLink>
          <NuxtLink
            to="/about"
            tag="a"
            class="font-semibold text-gray-900 hover:text-gray-500"
          >
            <span>About</span>
          </NuxtLink>
        </nav>
        <!-- <div
          v-if="$auth.user"
          class="flex items-center justify-center space-x-2"
        >
          <a
            href="/dashboard"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <span>Dashboard</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div v-else class="flex items-center justify-center space-x-2">
          <a
            href="/signin"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <span>Sign In</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div> -->
        <!-- Right Section -->
        <div class="flex items-center space-x-1 lg:space-x-2">
          <!-- Notifications -->
          <!-- <a
            href="javascript:void(0)"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-900 bg-gray-700 text-gray-200 shadow-sm hover:text-white hover:bg-opacity-50 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-opacity-100 active:shadow-none"
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="hi-outline hi-bell inline-block w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a> -->
          <!-- END Notifications -->

          <!-- User Dropdown -->
          <div
            v-if="$auth.user"
            id="dropdown-menu"
            class="relative inline-block"
          >
            <!-- Dropdown Toggle Button -->
            <button
              id="tk-dropdown-layouts-user"
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-900 bg-gray-700 text-gray-200 shadow-sm hover:text-white hover:bg-opacity-50 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-opacity-100 active:shadow-none"
              @click="handleDropdown"
            >
              <span>{{ $auth.user.username }}</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-50 hi-solid hi-chevron-down inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <!-- END Dropdown Toggle Button -->

            <!-- Dropdown -->
            <!--
              Visibility
                Closed        'hidden'
                Opened        '' (no class)

              Show/Hide with transitions
                enter         'transition ease-out duration-150'
                enter-start   'transform opacity-0 scale-75'
                enter-end     'transform opacity-100 scale-100'
                leave         'transition ease-in duration-100'
                leave-start   'transform opacity-100 scale-100'
                leave-end     'transform opacity-0 scale-75'
            -->
            <div
              role="menu"
              aria-labelledby="tk-dropdown-layouts-user"
              class="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded"
              :class="{ hidden: isHidden }"
            >
              <div
                class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100"
              >
                <div class="p-2 space-y-1">
                  <a
                    role="menuitem"
                    href="javascript:void(0)"
                    class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Profile</span>
                  </a>
                  <a
                    role="menuitem"
                    href="javascript:void(0)"
                    class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-inbox inline-block w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Inbox</span>
                  </a>
                </div>
                <div class="p-2 space-y-1">
                  <a
                    role="menuitem"
                    href="javascript:void(0)"
                    class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-cog inline-block w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </div>
                <div class="p-2 space-y-1">
                  <form onsubmit="return false;">
                    <button
                      type="submit"
                      role="menuitem"
                      class="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                      @click="handleLogout"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        class="opacity-50 hi-solid hi-lock-closed inline-block w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Sign out</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <!-- END Dropdown -->
          </div>
          <!-- END User Dropdown -->
          <div v-else class="flex items-center justify-center space-x-2">
            <a
              href="/signin"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <span>Sign In</span>
              <SvgArrowRight />
            </a>
          </div>

          <!-- Toggle Mobile Navigation -->
          <!-- <div class="lg:hidden">
            <button
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-900 bg-gray-700 text-gray-200 shadow-sm hover:text-white hover:bg-opacity-50 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-opacity-100 active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-menu inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div> -->
          <!-- END Toggle Mobile Navigation -->
          <!-- Dropdown Container -->
          <div x-data="{ open: true }" class="relative inline-block">
            <!-- Dropdown Toggle Button -->
            <button
              id="tk-dropdown-simple"
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
              aria-haspopup="true"
              x-bind:aria-expanded="open"
              x-on:click="open = true"
            >
              <span>John Doe</span>
              <svg
                class="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-50"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <!-- END Dropdown Toggle Button -->

            <!-- Dropdown -->
            <div
              x-show="open"
              x-transition:enter="transition ease-out duration-150"
              x-transition:enter-start="transform opacity-0 scale-75"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-100"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-75"
              x-on:click.outside="open = false"
              role="menu"
              aria-labelledby="tk-dropdown-simple"
              class="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1"
            >
              <div
                class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100"
              >
                <div class="p-2 space-y-1">
                  <a
                    role="menuitem"
                    href="javascript:void(0)"
                    class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      class="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Profile</span>
                  </a>
                  <a
                    role="menuitem"
                    href="javascript:void(0)"
                    class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      class="hi-solid hi-inbox inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Inbox</span>
                  </a>
                </div>
                <div class="p-2 space-y-1">
                  <a
                    role="menuitem"
                    href="javascript:void(0)"
                    class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      class="hi-solid hi-cog inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </div>
                <div class="p-2 space-y-1">
                  <form onsubmit="return false;">
                    <button
                      type="submit"
                      role="menuitem"
                      class="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                    >
                      <svg
                        class="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Sign out</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- END Dropdown Container -->
        </div>
        <!-- END Right Section -->
      </div>
    </div>
  </header>
  <!-- END Header -->
</template>

<script>
export default {
  data () {
    return {
      isHidden: true
    }
  },
  mounted () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('click', this.checkClickOn)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.checkClickOn)
  },

  methods: {
    handleDropdown () {
      this.isHidden = !this.isHidden
    },
    handleLogout () {
      this.$auth.logout()
    },
    checkClickOn (event) {
      if (document.getElementById('dropdown-menu')) {
        if (!document.getElementById('dropdown-menu').contains(event.target)) {
          this.isHidden = true
        }
      }
    }
  }
}
</script>
