# Lesson3 ~ Vueの記法を知る ~

## 本項での目的

* 単一ファイルコンポーネントの記法と特徴を学ぶ

## 単一ファイルコンポーネント

* まずVueの一般的な書き方として**インラインテンプレート**(js内でVue.componentを定義する方法)と**単一ファイルコンポーネント**(略称はSFC、決してゲーム機ではない)がある。
  * ひとつのページでしか使われないコンポーネントに関してはインラインテンプレートで十分。
  * 複数ページで使いまわしたいときにSFCを採用する例が多い
  * Nuxt.jsは基本的にSFCが採用されてます。

## SFCの特徴と一般的な書き方
* .vue拡張子で書かれる。
* html、js、cssを1ファイルに記述し、webpackなどを利用してコンパイルされる。
  * もちろん分けたい場合は分けることも可能
```
// .vueファイルの
<templete>
  <div>
    html記述を書く
  </div>
</templete>

<script>
export default {
  // 変数や関数を定義する
}
</script>

<style>
  // cssを記述
</style>
```

* **scopedCSSを採用している**
* このコンポーネント内のみ適用されるcssを記述可能(他コンポーネントに干渉しない)
```
// .vueファイル内にて

<style scoped>
</style>
```

* パッケージの導入で好きなaltCss、altJsで記述が可能

* `node-sass`、`sass-loader`をinstallすれば、scss、sassを書ける
* `@nuxt/typescript`をinstallすれば、tsで書ける

```
// .vueファイルの
<templete>
  <div>
    html記述を書く
  </div>
</templete>

<script lang='ts'>
export default {
  // tsで書けるようになる
}
</script>

<style scoped lang='scss'>
  // scssで書けるようになる。
</style>
```