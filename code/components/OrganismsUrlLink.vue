<template>
  <div class="container">
    <p>通常の遷移</p>
    <a v-for="(url, index) in urlList" :key="index + 1" :href="url.href">
      {{ url.name }}
    </a>
    <p>SPAの遷移</p>
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
