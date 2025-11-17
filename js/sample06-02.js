let maxCount = 100;
let count = 0;

while(count <= maxCount){
    count = count+1;
    document.querySelector( "#txt_while").textContent = count;
}

// // i++は i = i + 1の省略書き
// for (let i = 0; i <10; i++){
//     //繰り返し実行される
// }

const teachers = [ 
    "桃井先生" , 
    "明夫先生" ,
    "瀧本先生" ,
    "武田先生" ,
    "宮崎先生" ,
    "坂倉先生" ,
    "渡辺先生" ,
];

console.log( teachers )
// let j=0;
for( let i = 0; i < teachers.length; i++ ) {
    console.log( teachers[ i ])
    document.querySelector( "#txt_for" ).innerHTML
    +=
    `${ teachers[i]}<br>`; // ` shift +@
}