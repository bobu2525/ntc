// 朝の挨拶を出力する関数を定義する
const sayGoodMorning = () => {

  console.log('おはようございます。');
  console.log('昨日はよく寝れましたか？');
  console.log('今日も一日頑張りましょう');
}

// 夜の挨拶を出力する関数を定義する
const sayGoodEvening = () => {
  console.log('こんばんわ');
  console.log('今日も一日お疲れ様でした。')
}



// 朝の挨拶を呼び出す関数を呼び出す
sayGoodMorning();

// 夜の挨拶を呼び出す関数を呼び出す
sayGoodEvening();



// 与えられた引数priceに送料を加算し、その値を出力する関数を定義する
const calculateTotal = (price, shippingFee) => {
  // 価格が0円（商品が選択されているかチェック）
  // if文を使用
if (price ===0 ) {
  console.log("商品が選択されていません")
  } else {

  console.log(price + 500 + '円');
  }
}

// 関数を呼び出し、引数として購入金額をわたす
calculateTotal(0);

calculateTotal(1200);


const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + '円');
}

// 関数を呼び出し、引数として購入金額と送料を渡す。
addTwoArguments(1200, 500);



// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const doudle = (num) => {
  return num * 2;
}

// 関数の戻り値を出力する
console.log(doudle(30));

// 定数を宣言


// 関数の中で定数を使う
const useVariable = () => {
  const userName = '侍太郎';
  
  console.log(userName);
}

// 関数を呼び出す
useVariable();


console.log(userName);