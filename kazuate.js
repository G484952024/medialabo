// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let y = document.querySelector('input[name="kazuate"]');
  n = y.value;
  let yoso = Number(n);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu=kaisu+1;

  let result = document.querySelector('p#result');
  
  if(yoso===kotae){
    result.textContent = "「正解です．おめでとう!」";
  }if(kaisu>=4){
    result.textContent ="「答えは"+kotae+"でした．すでにゲームは終わっています」";
  }if(kaisu===3 && (kotae>yoso || kotae<yoso)){
    result.textContent = "「まちがい．残念でした答えは"+kotae+"です．」";
  }if(kaisu<=2 && kotae>yoso){
    result.textContent ="「まちがい．答えはもっと大きいですよ」";
  }if(kaisu<=2 && kotae<yoso){
    result.textContent ="「まちがい．答えはもっと小さいですよ」";
  }

  let p = document.querySelector('span#kaisu');
  p.textContent = kaisu;

  let i =document.querySelector('span#answer');
  i.textContent = yoso;

  let kekka = yoso;
  let span = document.querySelector('span#answer');
  span.textContent = kekka;
}

let b =  document.querySelector('button#print');
b.addEventListener('click',hantei);