# Lesson2 ~ 実際にプロジェクトを立ち上げてみる ~

* 概要を知ったところでそろそろ動かしたいと思うので、実際にNuxt.jsを動かしてみましょう。
* 雛形を作ったので今回はこれ使いましょう
* ここで行うのは
  * 開発環境でNuxtが動かせるようにする。
  * Nuxtの初期画面が見れるようにする。
* 雛形は下記のように構成されてます。

```
nuxtTutor
  ├ code - nuxt.jsのPJディレクトリ、Lesson1で説明したものが入ってる。
  ├ Lessons - 今見てるmarkdownが入ってるディレクトリ、頑張って書いてる。
  ├ .env.example - Docker使って起動する場合に使用する環境変数をまとめたもの
  ├ docker-compose.yml
  ├ Dockerfire - 実際いらないけど念のため置いてあるDockerfile
  └ initialize.sh - Docker使って起動する場合のコマンドをまとめたスクリプト。
```

## 共通作業

```
git clone git clone https://github.com/fussy113/nuxtTutor.git

cd nuxtTutor
```

* 2パターン紹介します。

## localで直接起動する場合

* node10系が動かせること
* yarnでコマンド書いてあるけどnpm派なら適宜置き換えましょう

```
cd code

yarn install

yarn dev

```

## Dockerを使う場合

```
# envファイルは適宜変更してください
cp .env.example .env

.initialize.sh
```

* http://localhost:3000でアクセスができます。

# **Hello Nuxt World！！**