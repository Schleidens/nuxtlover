<template>
  <div class="px-5 py-8 mx-auto nuxt-bg">
    <div class="flex flex-col text-center mb-4">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-200 text-xl">
        <slot />
      </p>
      <div class="search sm:px-16 px-4 flex z-0">
        <slot name="search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search{
  transform: translateY(64px);
}

</style>
