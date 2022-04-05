<template>
  <!-- Product Details Section: With Info Sidebar -->
  <div class="bg-white">
    <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <!-- Heading -->
      <div class="pb-3 mb-5 border-b">
        <a
          href="javascript:void(0)"
          class="font-semibold md:text-lg text-gray-600 hover:text-gray-500"
        >
          Tailwind CSS Admin Dashboard Template
        </a>
        by
        <a
          href="javascript:void(0)"
          class="font-semibold md:text-lg text-indigo-600 hover:text-indigo-400"
        >
          TechCode Studio
        </a>
      </div>
      <!-- END Heading -->

      <!-- Product -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
        <!-- Product Main Info -->
        <div class="md:col-span-3">
          <img
            src="https://source.unsplash.com/C6T6vr1sQI0/800x500"
            alt="Product Image"
            class="rounded-lg"
          >
          <div
            class="grid grid-cols-1 sm:grid-cols-2 py-5 space-y-2 sm:space-y-0 sm:space-x-2"
          >
            <button
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-50 hi-solid hi-desktop-computer inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Live Preview</span>
            </button>
            <button
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-50 hi-solid hi-share inline-block w-5 h-5"
              >
                <path
                  d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>
          <div class="prose prose-indigo">
            <p>
              Maecenas ultrices, justo vel imperdiet gravida, urna ligula
              hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt
              tincidunt turpis in porta. Integer fermentum tincidunt auctor.
            </p>
            <p>
              Consectetur adipiscing elit. Maecenas ultrices, justo vel
              imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh
              sapien in purus. Mauris tincidunt tincidunt turpis in porta
              integer.
            </p>
            <p>
              Urna ligula hendrerit nibh, ac cursus nibh sapien in purus. Mauris
              tincidunt tincidunt turpis in porta. Integer fermentum tincidunt.
            </p>
            <ul>
              <li>Fully Responsive</li>
              <li>Support for all major browsers</li>
              <li>10 Layouts</li>
              <li>Laravel and Vue versions</li>
            </ul>
            <p>
              Maecenas ultrices, justo vel imperdiet gravida, urna ligula
              hendrerit nibh, ac cursus nibh sapien in purus. Mauris tincidunt
              tincidunt turpis in porta integer.
            </p>
          </div>
        </div>
        <!-- END Product Main Info -->

        <!-- Product Info Sidebar -->
        <div class="md:col-span-2 space-y-4">
          <div class="p-5 bg-gray-100 rounded-lg">
            <div class="text-2xl font-semibold pb-2">
              $69
            </div>
            <hr>
            <ul class="space-y-2 py-4">
              <div class="flex items-center space-x-2">
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
                <span>Quality checked</span>
              </div>
              <div class="flex items-center space-x-2">
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
                <span>6 months premium support</span>
              </div>
              <div class="flex items-center space-x-2">
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
                <span>Future updates</span>
              </div>
              <div class="flex items-center space-x-2">
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
                <span>Commercial use</span>
              </div>
            </ul>
            <div class="flex flex-col space-y-2">
              <button
                type="button"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:grow px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-50 hi-solid hi-shopping-bag inline-block w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Add to Cart</span>
              </button>
              <button
                type="button"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none sm:flex-none px-3 py-2 leading-6 rounded border-indigo-200 bg-indigo-200 text-indigo-700 hover:text-indigo-700 hover:bg-indigo-300 hover:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-200 active:border-indigo-200"
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
          <div class="p-5 bg-gray-100 rounded-lg">
            <span class="text-xl font-bold">3,540</span> Sales
          </div>
          <div class="p-5 bg-gray-100 rounded-lg">
            <span class="text-xl font-bold">17</span> Updates
          </div>
          <div class="p-5 bg-gray-100 rounded-lg">
            <div class="flex items-center space-x-2 mb-2">
              <span class="font-medium">Buyer rating:</span>
              <span class="text-orange-500">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-star inline-block w-5 h-5"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-star inline-block w-5 h-5"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-star inline-block w-5 h-5"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-star inline-block w-5 h-5"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-star inline-block w-5 h-5"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
            </div>
            <div class="text-sm text-gray-600">
              4.98 average based on 535 ratings.
            </div>
          </div>
          <div class="p-5 bg-gray-100 rounded-lg text-sm space-y-3">
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Last Update
              </div>
              <div class="w-1/2">
                March 15, 2021
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Created
              </div>
              <div class="w-1/2">
                January 10, 2021
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                High Resolution
              </div>
              <div class="w-1/2">
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
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Compatible Browsers
              </div>
              <div class="w-1/2">
                Chrome, Opera, Firefox, Edge, Safari
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Included Files
              </div>
              <div class="w-1/2">
                .html, .css, .js
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Compatible With
              </div>
              <div class="w-1/2">
                Tailwind CSS 2.x
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Documentation
              </div>
              <div class="w-1/2">
                Well Documented
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="w-1/2 font-medium">
                Tags
              </div>
              <div class="w-1/2">
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >admin</a>,
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >dashboard</a>,
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >responsive</a>,
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >tailwindcss</a>,
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >resposive</a>,
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >backend</a>,
                <a
                  href="javascript:void(0)"
                  class="text-indigo-600 hover:text-indigo-400"
                >frontend</a>
              </div>
            </div>
          </div>
        </div>
        <!-- END Product Info Sidebar -->
      </div>
    </div>
  </div>
  <!-- END Product Details Section: With Info Sidebar -->
</template>
