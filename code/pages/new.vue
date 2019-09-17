<template>
  <div class="container">
    <h1 class="title">
      /new
    </h1>
    <h2 class="subtitle">
      ここでAPIを呼ぶ
    </h2>
    <div>
      <h3>
        仕様
      </h3>
      <p>
        ・QiitaのAPIを叩いてフォームに入力されたタグの記事を最新5件取得する。
      </p>
    </div>
    <div class="columns field">
      <div class="column is-5 control">
        <input v-model="searchTagForm" class="input is-primary" type="text" placeholder="input">
      </div>
      <div class="column is-2 control">
        <button class="button is-link" @click="fetchData">
          検索
        </button>
      </div>
    </div>
    <div class="list is-hoverable">
      <a v-for="(qiitaReport, index) in qiitaReports" :key="index + 1" :href="qiitaReport.url" class="list-item">
        {{ qiitaReport.user.id }}さん : {{ qiitaReport.title }}
      </a>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      searchTagForm: '',
      qiitaReports: []
    }
  },
  computed: {
    word () {
      return this.$store.state.searches.word
    }
  },
  methods: {
    async fetchData () {
      // ここの文法を覚えてもらえば
      this.$store.commit('searches/add', this.searchTagForm)
      const res = await this.$axios.$get('https://qiita.com/api/v2/tags/' + this.searchTagForm + '/items?per_page=5')
      this.qiitaReports = res
    }
  }
}
</script>

<style scoped>

</style>
