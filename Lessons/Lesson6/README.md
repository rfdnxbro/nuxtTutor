# Lesson6 ~ 新しく画面を作ってみる、SPAを実践する ~

## 本項の目的

* 新しい画面の作り方、Routingの設定の方法を学ぶ
* vue-routerを利用して、SPAの遷移の方法を学ぶ

## Routingの設定方法

* [公式](https://ja.nuxtjs.org/guide/routing/)
* 端的にいうと、NuxtでのRoutingの設定は**ほぼ不要**です。
  * `pages`下の構成をみて、build時にRoutingを自動で設定してくれる

```
pages
  ├ index.vue - /
  ├ new.vue - /new/
  └ users
      ├ index.vue - /users/
      ├ new.vue - /users/new/
      └ _id.vue - /users/:id/ (動的なRouting)
```
* 無理に設定することも確か可能だが、あまり推奨されてない、そこはきちんと設計しよう。

## SPAの設定

* [公式](https://ja.nuxtjs.org/api/components-nuxt-link/#-lt-nuxt-link-gt-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88)
* ブランチ名、`Lesson6-code`の`code/components/OrganismsUrlLink.vue`に通常の遷移とSPAの遷移をどちらもおいたので見て見て欲しい。