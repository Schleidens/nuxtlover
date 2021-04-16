<template>
  <section class="px-2 md:px-56 py-8 md:py-16">
    <div>
      <slot name="img" />
    </div>

    <slot />

    <div>
      <slot name="author" />
    </div>
    <copyToClipboard />
  </section>
</template>

<script>
import copyToClipboard from './copyToClipboard.vue'

export default {
  components: { copyToClipboard }

}
</script>

<style scoped>

</style>
