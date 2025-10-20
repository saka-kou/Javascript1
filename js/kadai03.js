// document マウスムーブイベント
document . addEventListener("mousemove", function(event){
    
    // マウスカーソルのクライアント座標系
    document . querySelector("#client-x") . value = event . clientX;
    document . querySelector("#client-y") . value = event . clientY;

    // スクリーン座標系/
    document . querySelector("#screen-x") . value = event . screenX;
    document . querySelector("#screen-y") . value = event . screenY;

    // グローバル座標系
    // スクロールした量が必要
    // document , documentElement . scrollTop  (縦スクロールした量)
    // document , documentElement . scrollLect (横スクロールした量)
    document.querySelector("#global-x") . value  =
        document .documentElement . scrollLeft + event. clientX;
    document.querySelector("#global-y") . value  =
        document .documentElement . scrollTop + event. clientY;
});
