<template>
  <!-- Page Content -->
  <main id="page-content" class="flex flex-auto flex-col max-w-full">
    <!-- Hero -->
    <div class="bg-white overflow-hidden">
      <!-- Hero Content -->
      <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div class="text-center">
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="text-indigo-500 mb-5 hi-outline hi-beaker inline-block w-24 h-24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Amazing features for everyone
          </h2>
          <h3
            class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
          >
            The best way to solve the problems you deal with every day in your
            web development life.
          </h3>
        </div>
      </div>
      <!-- END Hero Content -->
    </div>
    <!-- END Hero -->

    <!-- Features Section: With Images -->
    <div class="bg-gray-100">
      <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div class="py-5">
            <div
              class="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition"
            >
              <img
                src="https://source.unsplash.com/clN6N30q3sw/800x650"
                alt="Preview Feature Image"
                class="rounded-lg"
              >
            </div>
            <h4 class="text-lg font-bold mb-2">
              Amazing Feature
            </h4>
            <p class="leading-relaxed text-gray-600 mb-3">
              Donec lacinia venenatis metus at bibendum? In hac habitasse
              platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
              Sed porttitor pretium venenatis. Suspendisse potenti.
            </p>
          </div>
          <div class="py-5">
            <div
              class="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition"
            >
              <img
                src="https://source.unsplash.com/zNRITe8NPqY/800x650"
                alt="Preview Feature Image"
                class="rounded-lg"
              >
            </div>
            <h4 class="text-lg font-bold mb-2">
              Inspiring Feature
            </h4>
            <p class="leading-relaxed text-gray-600 mb-3">
              Donec lacinia venenatis metus at bibendum? In hac habitasse
              platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
              Sed porttitor pretium venenatis. Suspendisse potenti.
            </p>
          </div>
          <div class="py-5">
            <div
              class="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition"
            >
              <img
                src="https://source.unsplash.com/H0r6LB_9rz4/800x650"
                alt="Preview Feature Image"
                class="rounded-lg"
              >
            </div>
            <h4 class="text-lg font-bold mb-2">
              Cool Feature
            </h4>
            <p class="leading-relaxed text-gray-600 mb-3">
              Donec lacinia venenatis metus at bibendum? In hac habitasse
              platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
              Sed porttitor pretium venenatis. Suspendisse potenti.
            </p>
          </div>
        </div>
        <!-- END Features -->
      </div>
    </div>
    <!-- END Features Section: With Images -->

    <!-- Features Section: Modern With Icons Left -->
    <div class="bg-white">
      <div
        class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
      >
        <!-- Heading -->
        <div class="text-center">
          <div
            class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700"
          >
            Improve your design
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Fully Responsive UI Components
          </h2>
          <h3
            class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
          >
            Carefully coded and tested. You can use them to build the UI of
            your web project without ever leaving your HTML.
          </h3>
        </div>
        <!-- END Heading -->

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div class="sm:flex sm:space-x-10 py-5">
            <div
              class="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative"
            >
              <div
                class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
              />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-code inline-block w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-2">
                Framework Agnostic
              </h4>
              <p class="leading-relaxed text-gray-600">
                Each component is an HTML code snippet which you can easily
                copy-paste into your code and customize it to match your
                needs. They will work in any JS or other framework you are
                using.
              </p>
            </div>
          </div>
          <div class="sm:flex sm:space-x-10 py-5">
            <div
              class="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative"
            >
              <div
                class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
              />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-device-mobile inline-block w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-2">
                Fully Responsive
              </h4>
              <p class="leading-relaxed text-gray-600">
                They are designed to work in various screen sizes, from mobile
                to desktop. Their design will adapt based on the device you
                are using, and you can easily preview them beforehand.
              </p>
            </div>
          </div>
          <div class="sm:flex sm:space-x-10 py-5">
            <div
              class="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative"
            >
              <div
                class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
              />
              <span
                class="font-semibold text-xl text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100"
              >JS</span>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-2">
                Alpine.js Snippets
              </h4>
              <p class="leading-relaxed text-gray-600">
                A few components might need a bit of JavaScript to work. We
                provide pure HTML examples with inline comments for which
                classes to toggle with JS but also working Alpine.js
                variations as well.
              </p>
            </div>
          </div>
          <div class="sm:flex sm:space-x-10 py-5">
            <div
              class="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative"
            >
              <div
                class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
              />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-cog inline-block w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-2">
                Helper Tools
              </h4>
              <p class="leading-relaxed text-gray-600">
                Search and copy SVG icons, build your button markup or copy
                your favorite color classes with powerful tools. More are
                under development to give you superpowers.
              </p>
            </div>
          </div>
        </div>
        <!-- END Features -->

        <!-- Link -->
        <div class="text-center">
          <a
            href="javascript:void(0)"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="transform -rotate-45 opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Live Preview</span>
          </a>
        </div>
        <!-- END Link -->
      </div>
    </div>
    <!-- END Features Section: Modern With Icons Left -->

    <!-- Features Section: With Image Side -->
    <div class="bg-gray-100 overflow-hidden">
      <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div
          class="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-28"
        >
          <div class="lg:w-1/2 xl:w-2/5 flex-none relative">
            <div
              class="pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"
            />
            <div
              class="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"
            />
            <img
              src="https://source.unsplash.com/xLZ9EP4hJtQ/600x800"
              alt="Preview Feature Image"
              class="relative rounded-lg shadow-xl mx-auto"
            >
          </div>
          <div class="lg:w-1/2 xl:w-3/5 md:py-12 space-y-10">
            <!-- Heading -->
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
                Clean User Interface
              </h2>
              <h3
                class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600"
              >
                You will love working with your newly updated and customized
                dashboard.
              </h3>
            </div>
            <!-- END Heading -->

            <!-- Features -->
            <div class="space-y-5">
              <div class="flex space-x-4">
                <div class="flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hi-solid hi-check-circle inline-block w-5 h-5 text-emerald-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">
                    Amazing Feature
                  </h4>
                  <p class="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ultrices, justo vel imperdiet gravida, urna
                    ligula hendrerit nibh, ac cursus nibh sapien in purus.
                  </p>
                </div>
              </div>
              <div class="flex space-x-4">
                <div class="flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hi-solid hi-check-circle inline-block w-5 h-5 text-emerald-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">
                    Inspiring Feature
                  </h4>
                  <p class="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ultrices, justo vel imperdiet gravida, urna
                    ligula hendrerit nibh, ac cursus nibh sapien in purus.
                  </p>
                </div>
              </div>
              <div class="flex space-x-4">
                <div class="flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hi-solid hi-check-circle inline-block w-5 h-5 text-emerald-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-2">
                    Cool Feature
                  </h4>
                  <p class="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ultrices, justo vel imperdiet gravida, urna
                    ligula hendrerit nibh, ac cursus nibh sapien in purus.
                  </p>
                </div>
              </div>
            </div>
            <!-- END Features -->
          </div>
        </div>
      </div>
    </div>
    <!-- END Features Section: With Image Side -->

    <!-- Logos + CTA Section: Dark -->
    <div class="bg-gray-800">
      <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            These companies trust us
          </h2>
        </div>

        <!-- Logos -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-indigo-200"
        >
          <div class="h-28 flex items-center justify-center relative">
            <div
              class="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"
            />
            <div
              class="relative inline-flex items-center space-x-2 text-2xl font-semibold"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-cube inline-block w-10 h-10"
              >
                <path
                  d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                />
              </svg>
              <span>boxspot</span>
            </div>
          </div>
          <div class="h-28 flex items-center justify-center relative">
            <div
              class="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"
            />
            <div
              class="relative inline-flex items-center space-x-2 text-2xl font-light"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-code inline-block w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>TechCode</span>
            </div>
          </div>
          <div class="h-28 flex items-center justify-center relative">
            <div
              class="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"
            />
            <div
              class="relative inline-flex items-center space-x-2 text-2xl font-bold"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-cursor-click inline-block w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>cCLICK</span>
            </div>
          </div>
          <div class="h-28 flex items-center justify-center relative">
            <div
              class="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"
            />
            <div class="relative inline-flex items-center space-x-2 text-2xl">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-variable inline-block w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>sBoard</span>
            </div>
          </div>
          <div class="h-28 flex items-center justify-center relative">
            <div
              class="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"
            />
            <div
              class="relative inline-flex items-center space-x-2 text-2xl font-semibold"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-truck inline-block w-10 h-10"
              >
                <path
                  d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
                <path
                  d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
                />
              </svg>
              <span>uptruck</span>
            </div>
          </div>
          <div class="h-28 flex items-center justify-center relative">
            <div
              class="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"
            />
            <div class="relative inline-flex items-center space-x-2 text-2xl">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-location-marker inline-block w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>freshloc</span>
            </div>
          </div>
        </div>
        <!-- END Logos -->

        <!-- CTA -->
        <div class="text-center pt-12">
          <button
            type="button"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
          >
            <span>Join them today</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="hi-solid hi-arrow-right inline-block w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <!-- END CTA -->
      </div>
    </div>
    <!-- END Logos + CTA Section: Dark -->
  </main>
  <!-- END Page Content -->
</template>
