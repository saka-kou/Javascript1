
// body の 背景色 を変更する 
document.body.style.backgroundImage = "linear-gradient(45deg,tomato,skyblue)";

// #input_color_1 が 変更された時に
document.querySelector( "#input_color_1" ).onchange = function() {
    // body の 背景色 を #input_color_1 の 入力値 に変更する
    document.body.style.backgroundImage 
    =
    "linear-gradient(45deg, "+ document.querySelector)document.querySelector( "#input_color_1" ).value +", skyblue)";
}

// #txt_color_1 に #input_color_1 の 入力値 を表示する
document.querySelector( "#txt_color_1" ).textContent 
=
document.querySelector( "#input_color_1" ).value;
}