/*!
 * kyokasuigetsu.js (0.4.0)
 * 画像を取得できないようにするJavaScriptライブラリ
 * Copyright (c) 2015 hiro - http://b.0218.jp/
 * This software is released under the MIT License.
 * https://github.com/hiro0218/KyokaSuigetsu/LICENSE
 */

(function (w, d) {
    "use strict";

    // 変数
    var imgs = d.images,
        length = imgs.length,
        transparentBG = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        overlayBG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiqAcAAIgAgoGu+rEAAAAASUVORK5CYII=",

        firstWindowFocus = true;

    /**
     * [kudakero description]
     */
    function kudakero() {
        for (var i = 0; i < length; i++) {
            // サイズをセットする
            setSize(imgs[i]);

            // 透過画像をかぶせる
            addOverlay(imgs[i]);

            // 画像上の右クリックを禁止 (Firefox + Shift で突破可)
            disableContext(imgs[i]);

            // 画像のドラッグを禁止
            disableDrag(imgs[i]);
        }

        // user-select を付与
        var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
        document.getElementsByTagName('head')[0].appendChild(style);
        addCSSRule(document.styleSheets[0], "img", "user-select: none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;");
    }


    /**
     * [addCSSRule description]
     */
    function addCSSRule(sheet, selector, rules, index) {
        if ("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        } else if ("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }



    /**
     * 画像ロード後のサイズをセット
     */
    function setSize(element) {
        element.style.width = (element.style.width || element.width) + "px";
        element.style.height = (element.style.height || element.height) + "px";
    }

    /**
     * オーバレイ付与
     */
    function addOverlay(element) {
        element.style.background = "url('" + element.src + "')";
        element.style.backgroundSize = "cover";
        element.src = transparentBG;
    }

    /**
     * コンテキストメニューを制御
     */
    function disableContext(element) {
        addEvent(element, "contextmenu", function (e) {
            e.preventDefault();
        });
    }

    /**
     * ドラッグの制御
     */
    function disableDrag(element) {
        element.draggable = false;
        addEvent(element, "mousedown", function (e) {
            e.preventDefault();
            return false;
        });
    }


    /**
     * ウィンドウが非アクティブの時に簡易なキャプチャー対策
     */
    w.onfocus = function () {
        if (!firstWindowFocus) {
            for (var i = 0; i < length; i++) {
                imgs[i].src = transparentBG;
            }
        }
        firstWindowFocus = false;
    };
    w.onblur = function () {
        for (var i = 0; i < length; i++) {
            imgs[i].src = overlayBG;
        }
    };

    /**
     * イベントリスナー
     */
    function addEvent(obj, evType, fn, isCapturing) {
        if (isCapturing == null) {
            isCapturing = false;
        }
        if (obj.addEventListener) {
            // Firefox
            obj.addEventListener(evType, fn, isCapturing);
            return true;
        } else if (obj.attachEvent) {
            // MSIE
            var r = obj.attachEvent('on' + evType, fn);
            return r;
        } else {
            return false;
        }
    }

    // fire
    addEvent(w, "load", kudakero);

})(window, document);
