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
            class="text-indigo-500 mb-5 hi-outline hi-currency-dollar inline-block w-24 h-24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Pricing Plans
          </h2>
          <h3
            class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
          >
            Get to know our premium solutions and get your start-up off the
            ground in no time. Inspiring results from the first days.
          </h3>
        </div>
      </div>
      <!-- END Hero Content -->
    </div>
    <!-- END Hero -->

    <!-- Pricing Section: Alternate -->
    <div class="bg-gray-100">
      <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0 lg:py-6 xl:mx-32"
        >
          <!-- Freelancer Plan -->
          <div
            class="rounded-lg shadow-sm bg-gray-100 flex flex-col border-2 border-gray-200 hover:border-gray-300"
          >
            <div class="p-5 lg:p-6 text-center bg-white rounded-t-lg">
              <span
                class="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4"
              >
                Freelancer
              </span>
              <div class="mb-1">
                <span class="text-3xl lg:text-4xl font-extrabold">$19</span>
                <span class="text-gray-700 font-semibold">/mon</span>
              </div>
              <p class="text-gray-600 text-sm font-medium">
                For solo developers
              </p>
            </div>
            <div class="p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-700 grow">
              <ul class="space-y-4 text-sm lg:text-base">
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>100</strong> Custom Projects</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>50</strong> Paying Clients</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>10GB</strong> SSD Storage</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>1TB</strong> Bandwidth</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>24/7</strong> Email Support</span>
                </li>
              </ul>
            </div>
            <div class="px-5 pb-5 lg:px-6 lg:pb-6">
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
              >
                Get Started
              </a>
            </div>
          </div>
          <!-- END Freelancer Plan -->

          <!-- Agency Plan -->
          <div
            class="rounded-lg shadow-sm bg-indigo-50 flex flex-col border-2 lg:border-4 border-indigo-300 hover:border-indigo-400 relative lg:-mx-2 lg:-my-6"
          >
            <div
              class="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-orange-400"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-bookmark inline-block w-6 h-6"
              >
                <path
                  d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                />
              </svg>
            </div>
            <div class="p-5 lg:p-6 text-center bg-white rounded-t-lg">
              <span
                class="inline-flex space-x-1 items-center text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4"
              ><span>Agency</span></span>
              <div class="mb-1">
                <span class="text-3xl lg:text-4xl font-extrabold">$49</span>
                <span class="text-gray-700 font-semibold">/mon</span>
              </div>
              <p class="text-gray-600 text-sm font-medium">
                For large teams
              </p>
            </div>
            <div
              class="p-5 lg:p-6 space-y-5 lg:space-y-6 text-indigo-900 grow"
            >
              <ul class="space-y-4 text-sm lg:text-base">
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>1000</strong> Custom Projects</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>200</strong> Paying Clients</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>100GB</strong> SSD Storage</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>10TB</strong> Bandwidth</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>24/7</strong> Email Support</span>
                </li>
              </ul>
            </div>
            <div class="px-5 pb-5 lg:px-6 lg:pb-6">
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
          <!-- END Agency Plan -->

          <!-- Enterprise Plan -->
          <div
            class="rounded-lg shadow-sm bg-gray-100 flex flex-col border-2 border-gray-200 hover:border-gray-300"
          >
            <div class="p-5 lg:p-6 text-center bg-white rounded-t-lg">
              <span
                class="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4"
              >
                Enterprise
              </span>
              <div class="mb-1">
                <span class="text-3xl lg:text-4xl font-extrabold">$79</span>
                <span class="text-gray-700 font-semibold">/mon</span>
              </div>
              <p class="text-gray-600 text-sm font-medium">
                Custom solutions
              </p>
            </div>
            <div class="p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-700 grow">
              <ul class="space-y-4 text-sm lg:text-base">
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>Unlimited</strong> Custom Projects</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>Unlimited</strong> Paying Clients</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>Unlimited</strong> SSD Storage</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>Unlimited</strong> Bandwidth</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span><strong>24/7</strong> Priority Email Support</span>
                </li>
              </ul>
            </div>
            <div class="px-5 pb-5 lg:px-6 lg:pb-6">
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
              >
                Get Started
              </a>
            </div>
          </div>
          <!-- END Enterprise Plan -->
        </div>
      </div>
    </div>
    <!-- END Pricing Section: Alternate -->

    <!-- FAQ Section: Simple -->
    <div class="bg-white">
      <div
        class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
      >
        <!-- Heading -->
        <div class="text-center">
          <div
            class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700"
          >
            We Answer
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <!-- END Heading -->

        <!-- FAQ -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div class="prose prose-indigo">
            <h4>What features are included?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis
              nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-indigo">
            <h4>Can I use PayPal to pay you?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis
              nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-indigo">
            <h4>Do I get access to the community?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis
              nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-indigo">
            <h4>Can I get a refund just in case?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis
              nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-indigo">
            <h4>Do you offer email support?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis
              nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-indigo">
            <h4>Are the updates free for life?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis
              nisi. Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
        </div>
        <!-- END FAQ -->

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
              class="opacity-50 hi-solid hi-external-link inline-block w-5 h-5"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
            <span>Go to support center</span>
          </a>
        </div>
        <!-- END Link -->
      </div>
    </div>
    <!-- END FAQ Section: Simple -->

    <!-- Testimonials Section: Simple Multiple -->
    <div class="bg-gray-100">
      <div
        class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
      >
        <!-- Heading -->
        <div class="text-center">
          <div
            class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700"
          >
            Real Feedback
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Customer Testimonials
          </h2>
        </div>
        <!-- END Heading -->

        <!-- Feedback -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div
            class="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative bg-white shadow-sm rounded"
          >
            <div
              class="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif"
            >
              “
            </div>
            <div class="relative">
              <blockquote>
                <p class="font-medium text-lg leading-8 mb-5">
                  I’ve been using pixelcave themes for years. The code is
                  consistently high-quality and pleasant to work with, so I
                  highly recommended them.
                </p>
                <footer class="flex items-center space-x-4">
                  <a
                    href="javascript:void(0)"
                    class="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110"
                  >
                    <img
                      src="https://source.unsplash.com/mEZ3PoFGs_k/160x160"
                      alt="Avatar Photo"
                    >
                  </a>
                  <div>
                    <a
                      href="javascript:void(0)"
                      class="font-semibold text-indigo-600 hover:text-indigo-400"
                    >
                      Elsa King
                    </a>
                    <p class="text-gray-500 font-medium text-sm">
                      Web Developer
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div
            class="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative bg-white shadow-sm rounded"
          >
            <div
              class="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif"
            >
              “
            </div>
            <div class="relative">
              <blockquote>
                <p class="font-medium text-lg leading-8 mb-5">
                  I’ve been using pixelcave themes for years. The code is
                  consistently high-quality and pleasant to work with, so I
                  highly recommended them.
                </p>
                <footer class="flex items-center space-x-4">
                  <a
                    href="javascript:void(0)"
                    class="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110"
                  >
                    <img
                      src="https://source.unsplash.com/sibVwORYqs0/160x160"
                      alt="Avatar Photo"
                    >
                  </a>
                  <div>
                    <a
                      href="javascript:void(0)"
                      class="font-semibold text-indigo-600 hover:text-indigo-400"
                    >
                      Alex Saunders
                    </a>
                    <p class="text-gray-500 font-medium text-sm">
                      Graphic Designer
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div
            class="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative bg-white shadow-sm rounded"
          >
            <div
              class="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif"
            >
              “
            </div>
            <div class="relative">
              <blockquote>
                <p class="font-medium text-lg leading-8 mb-5">
                  I’ve been using pixelcave themes for years. The code is
                  consistently high-quality and pleasant to work with, so I
                  highly recommended them.
                </p>
                <footer class="flex items-center space-x-4">
                  <a
                    href="javascript:void(0)"
                    class="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110"
                  >
                    <img
                      src="https://source.unsplash.com/DLKR_x3T_7s/160x160"
                      alt="Avatar Photo"
                    >
                  </a>
                  <div>
                    <a
                      href="javascript:void(0)"
                      class="font-semibold text-indigo-600 hover:text-indigo-400"
                    >
                      Sue Keller
                    </a>
                    <p class="text-gray-500 font-medium text-sm">
                      CEO and Founder
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div
            class="px-6 pt-16 pb-6 md:px-12 md:pb-10 relative bg-white shadow-sm rounded"
          >
            <div
              class="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif"
            >
              “
            </div>
            <div class="relative">
              <blockquote>
                <p class="font-medium text-lg leading-8 mb-5">
                  I’ve been using pixelcave themes for years. The code is
                  consistently high-quality and pleasant to work with, so I
                  highly recommended them.
                </p>
                <footer class="flex items-center space-x-4">
                  <a
                    href="javascript:void(0)"
                    class="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110"
                  >
                    <img
                      src="https://source.unsplash.com/euZ2n8dGUcQ/160x160"
                      alt="Avatar Photo"
                    >
                  </a>
                  <div>
                    <a
                      href="javascript:void(0)"
                      class="font-semibold text-indigo-600 hover:text-indigo-400"
                    >
                      Alejandro Lee
                    </a>
                    <p class="text-gray-500 font-medium text-sm">
                      Full Stack Developer
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <!-- END Feedback -->
      </div>
    </div>
    <!-- END Testimonials Section: Simple Multiple -->
  </main>
  <!-- END Page Content -->
</template>
