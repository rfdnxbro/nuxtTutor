# Lesson4 ~ 実際に書くぞ ~

## 本稿の目的

* 実際に書いてみる
  * ディレクティブの概要を知る。
  * 双方向バインドを実践してみる。
  * このmarkdown内では補足できる部分を補足する。

## サンプル

* ブランチ名`Lesson4-code`の、`code/pages/index.vue`にまとめました。
* 全部をまとめることは流石にしんどいため、汎用的なものをまとめてます。
  * 変数(data)を定義して表示する。
  * if文を使って表示を制御する
  * forループでリストを生成する
  * クリックアクションのmethodを作成してbuttonを作成する。
* この辺使うと簡単なチャットアプリみたいなものは作れます

## ディレクティブとは

* [参考(暴投)](https://jp.vuejs.org/v2/guide/syntax.html#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96)
* 要素に記述して簡単にDOM操作を行ってくれるものと考えてもらえれば
* `v-なんちゃら`という名前です。


### v-model

* フォーム周りで頻繁に使われる
* v-model = v-bind(data変数やclass、styleといった属性を要素にバインドする) + v-on:change(変更があったら更新する)のシュガーシンタックス
* `code/pages/index.vue`の一部分を抜粋
```
<template>
  <input v-model="inputText" class="input is-primary" type="text">
</template>

<script>
  export default {
    data () {
      return {
        inputText: 'default'
      }
    }
  }
</script>
```

* inputのフォームにdataで定義した変数をバインドすることで、フォームに更新があれば、変数の値も一緒に更新してくれる。(双方向バインド)
* **超便利。**

### v-on

* jQueryの`$('#btn').on(click, function() {};`の代替になるイベントハンドリング
* 設定できるイベントの種類豊富、[参考URL](https://blog-asnpce.com/technology/744)
* `input v-on:click="submit"`と書くより、省略した書き方、`@click="submit"`と書くのが主流

### v-bind

* 属性をdata変数に格納してそこからDOM要素に挿入することができるディレクティブ
* 要素の動的な出し分けや、動的に遷移先を変更したい場合などに使われる。下は一例

```
<template>
  <div>
    <a　v-bind:href="url">テスト</>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url: https://google.com
      }
    }
  }
</script>
```

* `v-bind:href="url"`ではなく省略形、`:href="url"`と記述するのが主流。