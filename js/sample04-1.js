// 
//  sample04-1.js
// 

// 変数を作る(変数宣言)
let variable_1;
// 変数 [ variable ]をコンソールに表示
console.log( variable_1 )

// 変数[　variable_1 ]にデータを代入(保存)する
variable_1 = "Javascript";
// 変数 [ variable ]をコンソールに表示
console.log( variable_1 )

// タイトル　に　変数[ variable_1 ]のデータを設定する
document . title = variable_1;

// 変数の名前は重複して作れない
// let variable_1;

// 変数の作成と同時にデータを保存する
let variable_2 = "変数と定数"
console.log(variable_2)

// 
// 
let today = "2025-10-20";

//  #btn_calcをクリックした時に #num_1 #num_2の合計をresultに表示する

// #btn_calc
let calcButton = document.querySelector( "#btn_calc" );
// #num_1
let num_1 = document.querySelector( "num_1" ):
// #num_2
let num_2 = document.querySelector( "num_2" ):
// #result
let result = document.querySelector( "result" ):

calcButton.addEventListener( "click" , function() {
    console.log( "#btn.calc click event")
//  num_1　と　num_2　の　value　を数字から数値へ変更(変換)して
// 合計を計算する
    let result
    result.value = parseInt(num_1.value)+ parseInt(num_2.value)
}
    console.log( "#btn_calc click event" )
//     document.querySelector( "#result" ).value
//     =
//     document.querySelector( "#num_1" ).value
//     +
//     document.querySelector( "#num_2" ).value
// ));
