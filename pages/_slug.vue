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
  }
}

</script>

<style scoped>

</style>
