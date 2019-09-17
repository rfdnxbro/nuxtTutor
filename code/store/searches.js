export const state = () => ({
  word: ''
})

export const mutations = {
  add (state, word) {
    state.word = word
  },
  remove (state) {
    state.word = ''
  }
}
