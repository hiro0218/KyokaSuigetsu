KyokaSuigetsu
===
画像を保存されないようにするJavaScriptライブラリ。

## 解説
初心者でも簡単に使える事がコンセプトです。<br>
主にイラストサイトを運営している方へ向けて作りました。

以下のような「強み」や「弱点」があります。<br>
負担にならないように、最小限のスクリプトだけで実装しています。ガチガチな規制はしていません。<br>
絶対的な規制にはなりえませんが、保存する事が面倒になるので抑止力にはなるかと思います。

### 強み
1. 画像上での右クリック制御<br>
特定のブラウザでは「Shift + 右クリック」でコンテキストメニューが開きます
2. 「画像だけを表示」「画像を保存」を阻害<br>
透明画像が表示ないし保存されます
3. 画面キャプチャを阻害<br>
ウィンドウ（もしくは画面）が非アクティブの際、画像上に黒い半透明のフィルタがかかります

### 弱点
1. 「ページのソースを表示」「開発ツール」で画像のファイルパスを確認されてしまう。
1.  動的に読み込まれた画像には未対応(**注意**)

## 使い方
ただ、ライブラリを読み込むだけです。

```html
<script src="kyokasuigetsu.js"></script>
```

## サポートブラウザ
以下のブラウザであれば、変な動作はしないはず。

* Google Chrome 4
* Internet Explorer 9
* Mozilla Firefox 4
* Safari 4.1
* Opera 10.5

ただし、上記を含め古いブラウザだと一部の機能がうまく動作しなかったりします。(今後、対応予定)

## ライセンス
* [MIT](https://github.com/hiro0218/KyokaSuigetsu/blob/master/LICENSE)


## 作者
* [hiro](http://b.0218.jp/)
