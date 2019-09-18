# Lesson8 ~ (上級)Vuexを使って状態管理してみる ~

## はじめに

* **ムズイです。正直うまく纏められる自信がありません**

## Vuexとは

* Vue.jsにおける状態管理に使用されるライブラリ。

* ユースケース
  * 複数のページに置いて、同じ状態を共有したいとき
    * 検索結果を別ページに引き継ぐ
    * ログイン状態
    * APIで取得したデータのキャッシング(これにより複数回API通信をする必要性がなくなる。)
* 通常コンポーネント間では値を渡してあげる必要があるが、Vuexによってそれが不要になる！！
  * 脱バケツリレー！
* じゃあ全部Vuexでよくない？
  * ~~正直癖が強すぎて管理したくない~~
  * 小規模のアプリなら正直恩恵を感じにくい(大規模になるほど状態管理の恩恵を感じる。)
* [この辺が良さそう](https://books.google.co.jp/books?id=VfVwDwAAQBAJ&pg=PT74&lpg=PT74&dq=vuex+%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9&source=bl&ots=gIMeWI6BFn&sig=ACfU3U1WNu-gPypK1W8EW0yIjGefrCH0YQ&hl=ja&sa=X&ved=2ahUKEwiw1cPOwtnkAhVsFqYKHUKVDL8Q6AEwBHoECAkQAQ#v=onepage&q=vuex%20%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9&f=false)
* [この辺も良さそう](https://speakerdeck.com/ysd_marrrr/shi-idokoro-karahazimeruvuex)

## NuxtのVuexの始め方

* `Lesson8-code`に　検索フォームの入力内容を保持するサンプル書いてます。
* Nuxt.jsは`code/store`下にファイルがあるとビルド時によしなにstore moduleを生成してくれます。
* Vuexのstore moduleの構成要素は、
  * state (状態を保持する)
  * mutations (状態を変更する)
  * actions (mutationsを呼び出す、mutations内の処理を非同期で実行したい場合に使用)
  * getter,setter (mutationsから呼びだされ、stateと通信する。書かなくてもよいっちゃ良い)

## Vuexにおけるtips

### stateの永続化
* リロードのたびにstateが消滅するのはしんどい(認証とか特にかな)
  * `vuex-persistedstate`が使える
  * `js-cookie`でstateをcookieで保持する方法もある。

* 小規模だけど状態管理したいしたいしたい！！(駄々っ子)
  * Vuexの代替案として、[Vue.observable](https://jp.vuejs.org/v2/api/index.html#Vue-observable)の利用が検討できる。
  * [使ったことないけどこの辺良さそう](https://vuedose.tips/tips/creating-a-store-without-vuex-in-vue-js-2-6/)
