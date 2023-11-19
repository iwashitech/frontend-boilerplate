# Intersection Observerの学習

## オプション

|名前|詳細|
|-|-|
|root|ターゲットが見えるかどうかを確認するためのビューポートとして使用される要素<br>指定されなかった場合、またはnullの場合は既定でブラウザーのビューポート|
|rootMargin|rootの周りのマージン（px, パーセント値）<br>既定値はすべて0<br>0の場合でも単位が必要|
|threshold|0.0から1.0までの単一の数値、または数値の配列<br>ターゲットがどのくらいの割合で見えている場合にオブザーバーのコールバックを実行するかを示す<br>既定値は0（1ピクセルでも表示されるとコールバックが実行）<br>1.0は全てのピクセルが見えるようになるまで、閾値を超えたとはみなされない|

## IntersectionObserverEntry

|名前|詳細|
|-|-|
|boundingClientRect|対象要素の外接矩形|
|intersectionRatio|intersectionRectとboundingClientRectの比率|
|intersectionRect|対象の表示領域|
|isIntersecting|対象要素が、交差を監視しているルートを超えたらtrue<br>trueの場合、IntersectionObserverEntryは交差状態の変わり目<br>falseの場合、交差ありから交差なしへの変わり目|
|rootBounds|交差を監視しているルート|
|target|ルートとの交差が変化するElement|
|time|IntersectionObserverの時刻の起点を基準にして、交差が記録された時刻|

[わかりやすい画像](https://blog.jxck.io/entries/2016-06-25/intersection-observer.svg?180105_115707)

## 参考サイト

- [Intersection Observer API の使い方](https://www.webdesignleaves.com/pr/jquery/intersectionObserverAPI-basic.html)
- [JSでのスクロール連動エフェクトにはIntersection Observerが便利 - ICS MEDIA](https://ics.media/entry/190902/)
- [InterSectionObserver、使い方（理解編）。](https://fuuno.net/ani/ani54/ani54.html)
- [Intersection Observer を用いた要素出現検出の最適化 | blog.jxck.io](https://blog.jxck.io/entries/2016-06-25/intersection-observer.html)
- [Intersection Observerが簡単で便利！要素がビューポートに表示されているかを判定できる | コリス](https://coliss.com/articles/build-websites/operation/javascript/about-intersection-observer.html)
- [使ってみよう！Intersection Observer！ - Qiita](https://qiita.com/ryo_hisano/items/42f5980720bc832e6e09)

### MDN

- [交差オブザーバー API - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API)
- [IntersectionObserverEntry - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/IntersectionObserverEntry)

### 目次
- [An event for CSS position:sticky - Chrome Developers](https://developer.chrome.com/blog/sticky-headers/#setting-up-the-intersection-observers)
- [demos/sticky-position-event.html at master · ebidel/demos](https://github.com/ebidel/demos/blob/master/sticky-position-event.html)
- [Table of Contents with IntersectionObserver | CSS-Tricks - CSS-Tricks](https://css-tricks.com/table-of-contents-with-intersectionobserver/)

### カスタムイベント

- [JavaScript中級編！？カスタムイベントを使おう | Hypertext Candy](https://www.hypertextcandy.com/javascript-custom-events)
- [カスタムイベントのディスパッチ](https://ja.javascript.info/dispatch-events)
- [[イベントの基本] カスタムイベント｜業務ができる中級者になるためのJavaScript入門（DOM編）](https://zenn.dev/antez/books/6da596a697aa86/viewer/7484d8)
