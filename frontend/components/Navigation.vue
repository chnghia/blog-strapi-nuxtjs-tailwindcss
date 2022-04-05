<template>
  <!-- Simple Gray Navigation -->
  <nav class="space-y-1">
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-700 bg-gray-200"
    >
      <span class="flex-none flex items-center opacity-50">
        <SvgDashboard />
      </span>
      <span class="py-2 grow">Dashboard</span>
    </a>
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-opacity-50"
    >
      <span class="flex-none flex items-center opacity-50">
        <svg
          class="hi-solid hi-briefcase inline-block w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
          <path
            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
          />
        </svg>
      </span>
      <span class="py-2 grow">Projects</span>
    </a>
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-opacity-50"
    >
      <span class="flex-none flex items-center opacity-50">
        <svg
          class="hi-solid hi-users inline-block w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
          />
        </svg>
      </span>
      <span class="py-2 grow">Customers</span>
    </a>
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-opacity-50"
    >
      <span class="flex-none flex items-center opacity-50">
        <svg
          class="hi-solid hi-document inline-block w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span class="py-2 grow">Invoices</span>
    </a>
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-opacity-50"
    >
      <span class="flex-none flex items-center opacity-50">
        <svg
          class="hi-solid hi-credit-card inline-block w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fill-rule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span class="py-2 grow">Payments</span>
    </a>
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-opacity-50"
    >
      <span class="flex-none flex items-center opacity-50">
        <svg
          class="hi-solid hi-chart-pie inline-block w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      </span>
      <span class="py-2 grow">Statistics</span>
    </a>
    <a
      href="javascript:void(0)"
      class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-opacity-50"
    >
      <span class="flex-none flex items-center opacity-50">
        <svg
          class="hi-solid hi-user-circle inline-block w-5 h-5"
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
      </span>
      <span class="py-2 grow">Profile</span>
    </a>
  </nav>
  <!-- END Simple Gray Navigation -->
</template>
