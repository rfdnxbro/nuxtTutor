<template>
  <div class="container">
    <div class="testText">
      <p>{{ helloText }}</p>
    </div>

    <div id="testForm">
      <p><input v-model="inputText" type="text"></p>
      <p><input v-model="isShow" type="checkbox"></p>
      <p v-if="isShow">
        {{ inputText }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      helloText: 'Hello, Nuxt.js!!',
      inputText: 'default',
      isShow: false
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
