
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let a of data.results.shop){
    console.log(a.name);//店舗名を表示
    console.log(a.access);//アクセス情報を表示
    console.log(a.address);//住所を表示
    console.log(a.budget.name);//予算を表示
    console.log(a.catch);//キャッチコピーを表示
    console.log(a.genre.name);//ジャンルを表示
    console.log(a.open);//営業日時を表示
    console.log(a.station_name);//最寄り駅を表示
    console.log(a.sub_genre.name);//サブジャンルの名前を表示
    }
  }


// 課題5-1 の関数 printDom() はここに記述すること



function printDom(data) {
  let count=0;
  let body = document.querySelector('body');
    
  let result = document.createElement('div');
  result.setAttribute('id','zentai');
  body.insertAdjacentElement('beforeend', result); 


  for(let kekka of data.results.shop){
    count++;

    let card = document.createElement('div');
    card.classList.add('card');
    
    let countp=document.createElement('p');
    countp.textContent = '検索結果'+count+'件目';
    card.appendChild(countp);
    
    let div = document.createElement('div');
    div.textContent ='名前:'+kekka.name;
    card.appendChild(div);
    
    
    div = document.createElement('div');
    div.textContent = 'アクセス情報:'+kekka.access;
    card.appendChild(div);

    div = document.createElement('div');;
    div.textContent ='住所:'+kekka.address;
    card.appendChild(div);

    div = document.createElement('div');
    div.textContent ='予算:'+ kekka.budget.name;
    card.appendChild(div);

    div = document.createElement('div');
    div.textContent ='キャッチコピー:'+ kekka.catch;
    card.appendChild(div);

    div = document.createElement('div');
    div.textContent ='ジャンル:'+ kekka.genre.name;
    card.appendChild(div);

    div = document.createElement('div');
    div.textContent ='営業日時:'+ kekka.open;
    card.appendChild(div);

    div = document.createElement('div');
    div.textContent ='最寄り駅:'+ kekka.station_name;
    card.appendChild(div);

    div = document.createElement('div');
    div.textContent ='サブジャンルの名前:'+ kekka.sub_genre.name;
    card.appendChild(div);
    
    result.insertAdjacentElement('beforeend', card);
    }
  }

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#print');
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i = document.querySelector('div#zentai');
  if(i !== null && i !== undefined){
    i.remove();
  }
  let s = document.querySelector('select#genre');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o.textContent);
  let url ='https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+o.getAttribute('value')+'.json';

     // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
