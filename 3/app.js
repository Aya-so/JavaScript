// メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す部分
alert(alertString);


// 特定の文字列を結合する関数
function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}

// function 関数名（引数）
// var 戻り値　= "Hello " + 引数
// return 戻り値