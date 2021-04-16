<template>
  <section class="text-gray-600 body-font rounded bg-gray-900 mx-4 sm:mx-8 my-8 py-6 px-6">
    <div class="container mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="w-full background-articles">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start text-justify sm:text-left">
            <div class="flex-shrink-0 sm:w-64 w-full object-cover object-center mb-4 sm:mb-0">
              <slot name="img" />
            </div>
            <div class="flex-grow sm:pl-2">
              <h2 class="title-font font-medium text-lg text-gray-400">
                <slot name="title" />
              </h2>
              <p class="mb-4">
                <slot />
              </p>
              <span class="inline-flex">
                <slot name="tag" />
              </span>
            </div>
          </div>
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
