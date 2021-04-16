<template>
  <section class="px-2 sm:px-56 py-8 sm:py-16">
    <div>
      <slot name="img" />
    </div>

    <slot />

    <div>
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
