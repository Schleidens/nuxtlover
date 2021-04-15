<template>
  <div>
    <Theheader>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae inventore repellendus praesentium dolores minus, accusantium, necessitatibus autem quia sit voluptatum molestiae eveniet qui veritatis nemo eligendi sapiente alias ipsum rerum.
      <template #search>
        <input
          id="search"
          v-model="query"
          type="search"
          placeholder="Search by title"
          autocomplete="off"
          class="w-full h-16 shadow-lg bg-gray-900 rounded border border-gray-900 focus:shadow-2xl focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          @focus="makesearch"
          @focusout="makesearch(); reset()"
        >
      </template>
    </Theheader>

    <ul :v-if="result.length" class="mt-6 shadow-lg rounded text-gray-400 sm:px-16 px-4">
      <li v-for="results of result" :key="results.slug">
        <div class="p-4 background-articles">
          <div class="h-full items-center sm:justify-start text-justify sm:text-left">
            <h2 class="title-font font-medium text-lg text-white text-xl">
              <a href="https://google.com">
                {{ results.title }}
              </a>
            </h2>
            <p class="mb-4 text-gray-400 text-base">
              {{ results.description }}
            </p>
          </div>
        </div>
      </li>
    </ul>

    <div v-if="nosearch">
      <blogArticles v-for="blog in blogs" :key="blog.id" class="content">
        <template #img>
          <nuxt-link :to="blog.slug">
            <img alt="team" class="rounded-lg" :src="blog.img">
          </nuxt-link>
        </template>
        <template #title>
          <nuxt-link :to="blog.slug">
            {{ blog.title }}
          </nuxt-link>
        </template>
        {{ blog.description }}
        <template #tag>
          <div v-for="tag in blog.tag" :key="tag.id">
            <span class="mr-3">
              #{{ tag }}
            </span>
          </div>
        </template>
      </blogArticles>
    </div>
  </div>
</template>

<script>
import blogArticles from '~/components/blogArticles.vue'

export default {
  components: { blogArticles },
  async asyncData ({ $content, params }) {
    const blogs = await $content('blog', params.slug).fetch()

    return {
      blogs
    }
  },
  data () {
    return {
      query: '',
      result: [],
      nosearch: true
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.result = []
        return
      }

      this.result = await this.$content('blog')
        .only(['title', 'slug', 'description'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  },
  methods: {
    makesearch () {
      this.nosearch = !this.nosearch
    },
    reset () {
      this.query = ''
    }
  }
}
</script>

<style scoped>
.haut{
  height: 5000px;
}
</style>
