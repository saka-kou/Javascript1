// #logo が　グリックされた時に
document.querySelector( "#logo" ).onclick = function(){
    // イベントが起きたときに実行してほしい内容を書いていく

    // #logo の 文字色を トマト に変更する
    document.querySelector( "#logo" ).style.color = "tomato";
}

// #logo が マウスカーソルが離れた時 に
document.querySelector( "#logo" ).onmouseout = function(){
    document.querySelector( "#logo" ).style.color = "#000";
}

//  #btn_font_size が クリックされた時に
document.querySelector( "#btn_font_size" ).onclick = function(){
    //  #btn_font_size の 文字サイズ #input_font_size の 入力値 に変更する
    document.querySelector( "#logo" ).style.fontSize 
    = 
    document.querySelector( "#input_font_size" ).value;
}

document.querySelector( "#btn_font_size").style.borderRadius = "10px";
document.querySelector( "#btn_font_size").style.backgroundColor = "#bfbcbcff";