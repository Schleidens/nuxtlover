<template>
  <article>
    <blogView>
      <template #img>
        <div>
          <img :src="result.img" :alt="result.title" class="rounded-md w-full relative mb-6">
        </div>
      </template>
      <div class="bg-gray-900 p-6 rounded-md text-gray-400">
        <span class="text-4xl font-bold mb-4 text-gray-100">
          {{ result.title }}
        </span>

        <nuxt-content :document="result" />
      </div>
      <template #author>
        <div class="bg-gray-900 p-6 rounded-md text-gray-400 mt-8">
          John Doe
        </div>
      </template>
    </blogView>
  </article>
</template>

<script>
import blogView from '~/components/blogView.vue'

export default {
  components: { blogView },
  async asyncData ({ $content, params }) {
    const result = await $content('blog', params.slug).fetch()

    return {
      result
    }
  },
  head () {
    return {
      title: this.result.title,
      description: this.result.description,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.result.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.result.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.result.description
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://nuxtlover/${this.result.slug}`
        },
        { hid: 'og:image', property: 'og:image', content: this.result.img },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.result.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.result.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.result.img
        },
        {
          hid: 'twitter:image:',
          name: 'twitter:image:alt',
          content: 'NuxtLover'
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>
