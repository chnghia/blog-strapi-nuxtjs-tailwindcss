<template>
  <!-- Blog Post Section: Modern -->
  <div class="bg-white">
    <div
      class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
    >
      <!-- Heading -->
      <div class="text-center">
        <div
          class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700"
        >
          Productivity
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          {{ article.data.attributes.title }}
        </h2>
        <h3
          class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
        >
          <a
            href="javascript:void(0)"
            class="text-indigo-600 hover:text-indigo-400"
          >John Doe</a>
          on <span class="font-semibold">March 15, 2021</span> · 8 min read
        </h3>
      </div>
      <!-- END Heading -->

      <!-- Blog Post -->
      <article class="prose prose-indigo prose-lg mx-auto">
        <img
          :src="api_url + article.data.attributes.image.data.attributes.url"
          alt="Featured Image of blog post"
          class="rounded-lg"
        >
        <p>
          {{ article.data.attributes.content }}
        </p>
      </article>
      <!-- END Blog Post -->
    </div>
  </div>
  <!-- END Blog Post Section: Modern -->
</template>

<script>
import getArticle from '~/apollo/queries/getArticle'

export default {
  data () {
    return {
      article: {
        data: {
          attributes: {
            title: '',
            image: {
              data: {
                attributes: {
                  url: ''
                }
              }
            }
          }
        }
      },
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: getArticle,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
