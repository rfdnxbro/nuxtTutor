# Lesson7 ~ Axiosを使ってAPIを叩いてみる ~

## 本項の目的

* Axiosを知る
* REST APIを叩いて、描画するところまでを覚える

## Axiosとは

* PromiceベースのHTTPクライアント
* RESTAPIを実行する際にはver.2.xのvue、nuxtは推奨している

## 実際に使ってみる

* ブランチ名`Lesson7-code`の`code/pages/new.vue`に一旦仕様とgetの実例を書いてます。
* エラー処理は今回特に書いてません([ココ参考に](https://ja.nuxtjs.org/guide/async-data/))
* 例みたいにvueファイル内にgetの処理を書くのはあまりよくないです。叩くAPIによってmoduleに分けて、共通化してしようした方が絶対良いです。[この辺良さそう](https://nxpg.net/blog/tech/?p=11992)