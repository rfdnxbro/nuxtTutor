<template>
  <div>
    {{ user.id }}、{{ user.name }}
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
      default () {
        return {
          id: '',
          name: '',
          email: ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
