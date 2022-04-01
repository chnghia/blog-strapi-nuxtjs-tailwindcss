<template>
  <div class="space-y-4 sm:space-y-10">
    <div
      v-for="article in articles.data"
      :key="article.id"
      class="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div class="lg:w-2/5">
        <a
          href="javascript:void(0)"
          class="block relative group rounded-none lg:rounded-none overflow-hidden"
        >
          <img
            :src="api_url + article.attributes.image.data.attributes.url"
            alt="Featured Image of blog post"
            class="mx-auto"
          >
          <div
            class="flex items-center justify-center absolute inset-0 bg-indigo-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
      </div>
      <div class="w-full lg:w-3/5 p-6 lg:py-8 lg:px-10">
        <div class="mb-3">
          <div
            v-for="cate in article.attributes.categories.data"
            :key="cate.id"
            class="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-indigo-700 bg-indigo-200"
          >
            {{ cate.attributes.name }}
          </div>
        </div>
        <h4 class="font-bold text-lg sm:text-xl mb-2">
          <NuxtLink
            :to="{ name: 'articles-id', params: { id: article.id }}"
            tag="a"
            class="leading-7 text-gray-800 hover:text-gray-600"
          >{{ article.attributes.title }}</NuxtLink>
        </h4>
        <p class="text-gray-600 text-sm mb-3">
          <a
            href="javascript:void(0)"
            class="font-medium text-indigo-600 hover:text-indigo-400"
          >Joe Smith</a>
          on <span class="font-medium">March 3, 2021</span> · 12 min read
        </p>
        <p class="prose prose-indigo">
          {{ article.attributes.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Object
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  }
}
</script>
