<template>
  <div class="container">
    <h1 class="title">
      Vueを実際に書いてみる。
    </h1>

    <div id="testtext" class="box">
      <h2 class="subtitle">
        テキストのバインド
      </h2>
      <p>下の文字は変数です</p>
      <p>{{ helloText }}</p>
    </div>

    <div id="testform" class="box">
      <h2 class="subtitle">
        双方向バインドとディレクティブ ~ if文 ~
      </h2>
      <div class="field">
        <div class="control">
          <p>ここのテキストを書き換えると、下も変化するよ</p>
          <input v-model="inputText" class="input is-primary" type="text">
        </div>
      </div>
      <label class="checkbox">
        <input v-model="isShow" type="checkbox">
        チェックを外すと下の文章が消えるよ
      </label>
      <p v-if="isShow">
        {{ inputText }}
      </p>
    </div>

    <div id="testroop" class="box">
      <h2 class="subtitle">
        ディレクティブを利用したループ処理
      </h2>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userList" :id="['user-' + (index + 1)]" :key="index">
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="testevent" class="box">
      <h2 class="subtitle">
        イベント処理
      </h2>
      <p>フォームを入力して送信すると、上のリストに追加されます。</p>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="userForm.name" class="input" type="text" placeholder="test">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="userForm.email" class="input" type="text" placeholder="test@test.com">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea v-model="userForm.description" class="textarea" placeholder="Textarea" />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="submitUserForm">
            Submit
          </button>
        </div>
        <div class="control">
          <button class="button is-text" @click="clearUserForm">
            Clear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      helloText: 'Hello, Nuxt.js!!',
      inputText: 'default',
      isShow: true,
      userList: [
        {
          id: 1,
          name: 'mochimochi',
          email: 'mochimochi@test.com',
          description: 'ラスボス第一形態で勝てん'
        },
        {
          id: 2,
          name: 'signal',
          email: 'signal@test.com',
          description: 'アンジャナフ亜種に乙まじ？'
        },
        {
          id: 3,
          name: 'pan',
          email: 'pan@test.com',
          description: '夜の11とは思えない声量'
        }
      ],
      userForm: {
        name: '',
        email: '',
        description: ''
      }
    }
  },
  methods: {
    // userListの末尾に新しく要素を追加する。
    submitUserForm (event) {
      const newUser = {
        id: this.userList.length + 1,
        name: this.userForm.name,
        email: this.userForm.email,
        description: this.userForm.description
      }
      console.log(newUser)
      this.initializeUserForm()
    },
    // userFormの入力を初期化する。
    clearUserForm (event) {
      this.initializeUserForm()
    },
    initializeUserForm () {
      this.userForm.name = ''
      this.userForm.email = ''
      this.userForm.description = ''
    }
  }
}

</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: left;
  align-items: left;
  text-align: left;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding: 5px;
  margin-bottom: 5px!important;
}

.box {
  padding: 0 20px 10px;
  font-weight: bold;
  border: solid 3px #000000;
}

</style>
