<template>
  <!-- Blog List Section: Full Width -->
  <div class="bg-gray-100">
    <div
      class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
    >
      <!-- Heading -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          Latest Posts
        </h2>
        <h3
          class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
        >
          Be sure to
          <a
            href="javascript:void(0)"
            class="text-indigo-600 hover:text-indigo-400"
          >follow us on Twitter</a>
          or
          <a
            href="javascript:void(0)"
            class="text-indigo-600 hover:text-indigo-400"
          >join us</a>
          to stay up to date about any new posts.
        </h3>
      </div>
      <!-- END Heading -->

      <!-- Blog Posts -->
      <Articles :articles="articles" />
      <!-- END Blog Posts -->
    </div>
  </div>
  <!-- END Blog List Section: Full Width -->
</template>

<script>
import allCategories from '~/apollo/queries/allCategories'
import allArticles from '~/apollo/queries/allArticles'
export default {
  apollo: {
    categories: {
      prefetch: true,
      query: allCategories
    },
    articles: {
      prefetch: true,
      query: allArticles
    }
  }
}
</script>
