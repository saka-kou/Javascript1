console.log("log");
// alert(""); 
console.dir(document.getElementById("logo"))

document.querySelector("h1").style.color="tomato";

// コンソール画面に表示する
console.log( document );
console.dir( document );

// タイトルタグの内容を変更する
document.title = "Hello JavaScript Would.";


// タグを探す
console.log( document.querySelector("h1") );

// #logo
console.log( document.querySelector("#logo") );

// #global_navi li
console.log( document.querySelector( "#global_navi" ) );

// #global_navi li のスタイルを変更する
document.querySelector( "#global_navi li").style.color = "pink";
document.querySelector( "#global_navi li").style.borderBottom = "solid 1px #000";


