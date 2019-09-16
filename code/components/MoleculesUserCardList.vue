<template>
  <div class="columns">
    <div v-for="(user, index) in userList" :id="['user-' + (index + 1)]" :key="index" class="column is-4">
      <atoms-user-card :user="user" />
    </div>
  </div>
</template>

<script>
import AtomsUserCard from '~/components/AtomsUserCard'

export default {
  components: {
    AtomsUserCard
  },
  props: {
    userList: {
      type: Array,
      require: true,
      default () {
        return [{
          id: '',
          name: '',
          email: '',
          description: ''
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
