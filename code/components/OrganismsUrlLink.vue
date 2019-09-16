<template>
  <div class="container">
    <!-- <a v-for="(url, index) in urlList" :key="index + 1" :href="url.href">
      {{ url.name }}
    </a> -->
    <nuxt-link v-for="(url, index) in urlList" :key="index + 1" :to="url.href">
      {{ url.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      urlList: [
        {
          name: 'HOME',
          href: '/'
        },
        {
          name: 'NEW',
          href: '/new/'
        },
        {
          name: 'USERS',
          href: '/users/'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container{
    min-height: 0
  }
</style>
