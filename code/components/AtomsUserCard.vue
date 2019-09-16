<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ user.id }}.{{ user.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ user.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
      default () {
        return [
          {
            id: '',
            name: '',
            email: '',
            description: ''
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .card-header-title {
    background-color: hsl(171, 100%, 41%);
  }
</style>
