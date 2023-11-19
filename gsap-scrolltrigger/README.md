# GSAPのScrollTriggerの学習

## 参考サイト

- [GSAP ScrollTriggerを試してみたらすごく簡単でした – ハコイリオヤジ](https://hakoirioyaji.com/blog/gsap-scrolltrigger/)
- [GSAPのScrollTrigger.jsを使ったスクロールアニメーションを実装する方法 | 夢みるゴリラ](https://yumegori.com/gsap-scrolltrigger)
- [超簡単！GSAPのScrollTriggerでスクロールアニメーションを実装してみた│カワウソブログ](https://kawausoblog.jp/coding-13/)
- [【2021年最新】GSAPの「ScrollTrigger」を使って爆速でスクロールアニメを実装する - to-R Media](https://www.to-r.net/media/scrolltrigger/)

## プロパティ
- [GSAP ScrollTriggerのプロパティ一覧 - Qiita](https://qiita.com/heeroo_ymsw/items/ae22e4cee8c6a08ff852)
- [GSAPのスクロールアニメーションライブラリ「ScrollTrigger」入門 - Qiita](https://qiita.com/k_watanabe_51/items/264542b564187d95a3e4)
- [超簡単！GSAPのScrollTriggerでスクロールアニメーションを実装してみた│カワウソブログ](https://kawausoblog.jp/coding-13/)

|プロパティ名|説明|
|-|-|
|animation|アニメーション|
|start|開始位置|
|end|終了位置|
|endTrigger|終了位置となるトリガー|
|horizontal|水平スクロールかどうか|
|id|id|
|markers|マーカー表示|
|pin|要素をピン留め（画面に固定）|
|scrub|アニメーションとスクロールバーの動きをひもづけ|
|snap|スクロール停止後、スナップを行う|
|stagger|同じ要素（クラス）を連続で動かす|
|trigger|終了位置となるトリガー|

[アニメーションの範囲指定](https://qiita.com/k_watanabe_51/items/264542b564187d95a3e4#%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E7%AF%84%E5%9B%B2%E6%8C%87%E5%AE%9A)

```js
start: 'center center',

// 左側の center が「トリガーとなる要素」における位置
// 右側の center が「ブラウザの画面内」における位置
```


### コールバック

|プロパティ名|説明|
|-|-|
|onEnter|スクロール位置がstartを超えて前方に移動したときのコールバック|
|onEnterBack|スクロール位置がendを過ぎて後方に移動したときのコールバック|
|onLeave|スクロール位置がendを超えて前方に移動したときのコールバック|
|onLeaveBack|スクロール位置がstartを過ぎて後方に移動したときのコールバック|
|onRefresh|リフレッシュ（通常はリサイズイベント）が発生した時に、ScrollTriggerに全ての位置を再計算させるためのコールバック|
|onUpdate|スクロールトリガーの進捗状況が変化するたびに呼び出されるコールバック|
|onToggle|スクロール位置がstartまたはendを超えた時のコールバック|

### 別サイトでの説明

|プロパティ名|スクロール方向|
|-|-|
|onEnter|スクロール方向が正↓で、スクロール位置がstart通過時|
|onEnterBack|スクロール方向が負↑で、スクロール位置がend通過時|
|onLeave|スクロール方向が正↓で、スクロール位置がend通過時|
|onLeaveBack|スクロール方向が負↑で、スクロール位置がstart通過時|

## スクロールの方向
- [GSAP 日記 Part.1 無限スクロールアニメーションを作ってみた](https://zenn.dev/yuhua_shi/articles/2b47d07c92aa6a)
- [Infinite Marquee Scroll - GSAP](https://codepen.io/bappla/pen/abpyGQy)
