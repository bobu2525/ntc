// 算実演算子を使った場合の戻りを出力する
console.log(45+18);

// 比較演算子を使った場合の戻り値を出力する
console.log(45 >18);

// 等価演算子を使った場合の戻り値を出力する
console.log('5'== 5);

// 厳密等価演算子を使った場合の戻り値出力する
console.log('5' === 5);

// 変数numに0から4までのランダムな整数を代入する
let num = Math.floor(Math.random()*5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が４であれば、の値が４であれば、「大当たりです」という文字列を出力する
if (num === 4) {
  console.log('大当たりです');
}

// 変数numの値が３であれば、「当たりです」とうい文字列を出力する
else if (num === 3) {
  console.log('当たりです');
}

// それ以外の時は
else {
  console.log('はずれです');
}


// 変数numに０から４までのランダムな整数を代入する
num = Math.floor(Math.random()*5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値によって、出力する文字列を切り替える
switch (num) {
  case 2:
    console.log('小吉です');
    break;
  case 3:
    console.log('中吉です');
    break;
  case 4:
    console.log('大吉です');
    break;
    default:
      console.log('末吉です')
      break;

}










































// 

// num = 30;

// &&(かつ)を記述して、すべての条件が成り立つ時のみ処理を行う（変数numの値が１１から２９）

// if (num > 10 && num < 30) {
//   console.log('変数numhaは１０より大きく、３０より小さいです');
// } else {
//   console.log('条件が成り立ちませんでした');
// }

// num = 300;

// ||(または)を記述して、１つでも条件が成り立てば処理を行う（変数numの値が１０または３０）

// if (num === 10 || num === 30) {
//   console.log('変数numは１０または３０')
// }
// else {
//   console.log('条件が成り立ちませんでした')
// }




























