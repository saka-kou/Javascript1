// 都道府県名/
const pref01 = "北海道";
const pref02 = "青森";
const pref03 = "秋田";
const pref04 = "岩手";
const pref05 = "宮城";
const pref06 = "福島";
const pref07 = "山形";
const pref08 = "群馬";
const pref09 = "栃木";
const pref10 = "山梨";
const pref11 = "東京";
const pref12 = "神奈川";
const pref13 = "新潟";
const pref14 = "長野";
const pref15 = "茨城"
const pref16 = "埼玉";
const pref17 = "山梨";
const pref18 = "富山県";
const pref19 = "石川";
const pref20 = "福井";
const pref21 = "岐阜";
const pref22 = "静岡";
const pref23 = "愛知";
const pref24 = "三重";
const pref25 = "滋賀";
const pref26 = "京都";
const pref27 = "大阪";
const pref28 = "兵庫";
const pref29 = "奈良";
const pref30 = "和歌山";
const pref31 = "鳥取";
const pref32 = "島根";
const pref33 = "岡山";
const pref34 = "広島";
const pref35 = "山口";
const pref36 = "徳島";
const pref37 = "香川";
const pref38 = "愛媛";
const pref39 = "高知";
const pref40 = "福岡";
const pref41 = "佐賀";
const pref42 = "長崎";
const pref43 = "熊本";
const pref44 = "大分";
const pref45 = "宮崎";
const pref46 = "鹿児島";
const pref47 = "沖縄"

console.log(pref01);
console.log(pref02);
console.log(pref03);
console.log(pref04);
console.log(pref05);
console.log(pref06);
console.log(pref07);
console.log(pref08);
console.log(pref09);
console.log(pref10);
console.log(pref11);
console.log(pref12);
console.log(pref13);
console.log(pref14);
console.log(pref15);
console.log(pref16);
console.log(pref17);
console.log(pref18);
console.log(pref19);
console.log(pref20);
console.log(pref21);
console.log(pref22);
console.log(pref23);
console.log(pref24);
console.log(pref25);
console.log(pref26);
console.log(pref27);
console.log(pref28);
console.log(pref29);
console.log(pref30);
console.log(pref31);
console.log(pref32);
console.log(pref33);
console.log(pref34);
console.log(pref35);
console.log(pref36);
console.log(pref37);
console.log(pref38);
console.log(pref39);
console.log(pref40);
console.log(pref41);
console.log(pref42);
console.log(pref43);
console.log(pref44);
console.log(pref45);
console.log(pref46);
console.log(pref47);

// 都道府県名を配列で保存する
const prefs = ["北海道","青森","秋田","岩手","宮城","福島"
    ,"山形","群馬","栃木","山梨","東京","神奈川","新潟","長野"
    ,"茨城","埼玉","山梨","富山県","石川","福井","岐阜","静岡"
    ,"愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山"
    ,"鳥取","島根","岡山","広島","山口","徳島","香川","愛媛"
    ,"高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"
];

// 配列にデータを保存
// prefs[ 0 ] = "北海道"
// prefs[ 1 ] = "青森"

console.log(prefs);

// 配列に新しいデータを追加する
// 配列の最後の番号(46)に +1　した番号を指定する
prefs[ prefs.length ] = "堺";

console.log(prefs);

// 配列 prefs[]を　ループで処理する
// iは0から始まり　i は　prefsのデータ数(47)　より 小さい間
// +1ずつ増えながら ループを回す
for( let i = 0; i< prefs.length; i++ ){
    console.log(prefs[ i ]);
}
