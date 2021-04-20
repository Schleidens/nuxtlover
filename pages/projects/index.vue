<template>
  <div>
    <theheader>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae inventore repellendus praesentium dolores minus, accusantium, necessitatibus autem quia sit voluptatum molestiae eveniet qui veritatis nemo eligendi sapiente alias ipsum rerum.
      <!-- search bar -->
      <template #search>
        <input
          id="search"
          v-model="query"
          type="search"
          placeholder="Search by title"
          autocomplete="off"
          class="w-full h-16 shadow-lg bg-gray-900 rounded border border-gray-900 focus:shadow-2xl focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
      <!-- end -->
      </template>
    </theheader>

    <!-- search result -->
    <template v-if="result.length">
      <ul class="border border-gray-800 mt-6 shadow-lg rounded bg-gray-900 text-gray-400 sm:mx-16 mx-4 mt-10 mb-10 py-1 pl-2">
        <span class="mb-4">
          <button class="cancel font-extrabold text-2xl" @click="reset">
            X
          </button>
        </span>
        <li v-for="results of result" :key="results.slug" class="px-4">
          <div class="h-full items-center sm:justify-start text-justify sm:text-left">
            <h2 class="title-font font-medium text-lg text-white text-xl">
              <nuxt-link :to="results.slug">
                {{ results.title }}
              </nuxt-link>
            </h2>
            <p class="mb-4 text-gray-400 text-base">
              {{ results.description }}
            </p>
          </div>
        </li>
      </ul>
    </template>
    <!-- end -->

    <template v-else>
      <projectsArticles v-for="project in projects" :key="project.id">
        <template #title>
          <nuxt-link :to="`projects/${project.slug}`">
            {{ project.title }}
          </nuxt-link>
        </template>
        {{ project.description }}
      </projectsArticles>
    </template>
  </div>
</template>

<script>
import ProjectsArticles from '~/components/projectsArticles.vue'
import Theheader from '~/components/Theheader.vue'
export default {
  components: { Theheader, ProjectsArticles },
  async asyncData ({ $content, params }) {
    const projects = await $content('projects', params.slug).fetch()

    return {
      projects
    }
  },
  data () {
    return {
      query: '',
      result: [],
      nosearch: true
    }
  },
  head () {
    const title = 'NuxtLover | Projects'
    const description = 'Awesome projects list build by nuxters'
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.result = []
        return
      }

      this.result = await this.$content('projects')
        .only(['title', 'slug', 'description'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  },
  methods: {
    reset () {
      this.query = ''
    }
  }

}
</script>

<style scoped>
</style>
