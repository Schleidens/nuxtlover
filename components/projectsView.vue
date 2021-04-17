<template>
  <section class="px-2 md:px-56 py-8 md:py-16">
    <div class="bg-gray-900 p-6 rounded-md text-4xl font-bold mb-4 text-gray-100">
      <slot name="title" />
    </div>
    <div class="bg-gray-900 p-6 rounded-md mb-4 text-gray-100">
      <slot />
    </div>
    <div class="bg-gray-900 p-6 rounded-md mb-4 text-gray-100">
      <slot name="author" />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
