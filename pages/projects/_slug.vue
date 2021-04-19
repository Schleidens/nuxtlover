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
  }
}
</script>

<style scoped>

</style>
