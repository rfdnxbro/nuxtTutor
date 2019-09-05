# Nuxt.jsの基礎とデフォルトのフォルダ構成

[リファレンス](https://ja.nuxtjs.org/guide/)

## Nuxt.jsとは

* UIに特化したVue.jsアプリケーションのフレームワーク
* 使い手の用途によって選択ができる
  * ユニバーサルアプリケーション
  * シングルページアプリケーション(SPA)
  * 静的
* 非常に軽量(合わせて60kb程度)、それでも非常に豊富な機能
  * Vue2系
  * Vue Router(ルーティング、SPAを実現)
  * Vuex(状態管理、むずい)
  * Vue Server Render(SSR)
  * vue-meta(メタデータの管理)
* フォルダの構成なども割と自由

## フォルダ構成

* [リファレンス](https://ja.nuxtjs.org/guide/directory-structure)
* 本PJでは`code/`が該当

```
code
  ├ assets - sass、font、imageなどが入れられる、webpackでコンパイルされる。
  ├ components - Vue.jsのコンポーネントファイルを格納する、ディレクトリを分けてatomic designで考えるのが主流
  ├ layouts - アプリケーションのレイアウトを格納する(.vue)。複数配置可能。
  ├ middleware - ミドルウェア、レンダリング前に実行したい関数などを格納。例としてauth(未ログインならloginページにリダイレクト)などで使用
  ├ pages - アプリケーションのviewファイルを入れる。nuxtはここに格納されるファイルを読み込み、よしなにルーティングを作成する。
  ├ plugins - Vueアプリケーションインスタンス化する前に実行するjsプラグインを格納(firebaseの設定や、グローバルコンポーネントの設定など)。
  ├ static - サーバのルートに置かれ、URLを叩くことでアクセス可能。変更されない可能性の高いファイルが置かれる
  ├ store - vuexストアのファイルを格納する。(store/index.jsを置くと有効になる)
  ├ nuxt.config.js - Nuxtのカスタム設定
  └ package.json - アプリケーションの依存するパッケージ、スクリプトを記載(起動のコマンドとかもここにあるよ)
```
