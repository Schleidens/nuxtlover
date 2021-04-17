<template>
  <section class="border border-gray-700 text-gray-600 body-font rounded bg-gray-900 mx-4 sm:mx-8 my-8 py-6 px-6">
    <div class="container mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-2 w-full">
          <h2 class="text-lg text-gray-200 text-2xl font-bold">
            <slot name="title" />
          </h2>
          <p class="leading-relaxed text-base">
            <slot />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
