<template>
  <projectsView>
    <template #title>
      {{ result.title }}
    </template>
    <nuxt-content :document="result" />
    <template #author>
      {{ result.author }}
    </template>
  </projectsView>
</template>

<script>
import projectsView from '~/components/projectsView.vue'
export default {
  components: { projectsView },
  async asyncData ({ $content, params }) {
    const result = await $content('projects', params.slug).fetch()

    return {
      result
    }
  },
  head () {
    return {
      title: this.result.title,
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
          content: `https://nuxtlover/projects/${this.result.slug}`
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
