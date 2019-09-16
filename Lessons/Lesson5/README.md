# Lesson5 ~ コンポーネントを使ってみる ~

## コンポーネントの使い時

* 複数ページに跨いで利用するもの。

## Atomic Designの考えを取り込んでいく

* コンポーネント設計の際の分け方
  * Atoms (単体でこれ以上機能分解できないサイズ、ボタンやListのなかの1要素)
  * Molecules (Atomsの集合、Listなどがイメージしやすい)
  * Organisms (Atoms、Moleculesの集合体、Headerとかがイメージしやすい、1つのページで1つのみ使用されるものが多かったりする。)
  * (Templates) (ワイヤーフレーム、あまり個人的には邪魔になる。)
  * Pages (データが注ぎ込まれた実際のview、pages/が該当する。)
* Atomic Designの利点としては
  * UIに一貫性がでる
  * 使い回しができるので、コンポーネントができれば楽に画面が作れる。
* 欠点は
  * コンポーネントの管理が面倒
  * チームできちんと定義しないと一瞬で崩壊する。

## 実際に作ってみる。

* ブランチ名`Lesson5-code`でComponentを作成。
  * `code/components/MoleculesUserCardList.vue`
  * `code/components/AtomsUserCard.vue`
  * `code/pages/index.vue`で実際に呼び出して使う。

## 運用の際には

* 各ページでcomponentを呼び出したりしているとより把握がしづらくなる
  * 使ってないのにページで読み込んでる？
  * 必要なのに消してしまった？
* PluginsとしてAtoms、Moleculesをglobal-componentとして登録する方法が結構主流。
  * [こんな感じ](https://nobuhiroharada.com/2019/05/27/nuxt-how-to-add-custom-components-to-global/)