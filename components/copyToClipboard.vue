<template>
  <div>
    <button class="bg-gray-900 p-2 w-full rounded-md text-gray-400 mt-8" @click="copyLink">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Copy link to clipboard',
      success: 'Copied'
    }
  },
  methods: {
    async copyLink () {
      await navigator.clipboard.writeText(window.location.href)
      this.buttonText = this.success
    }
  }
}
</script>

<style scoped>

</style>
