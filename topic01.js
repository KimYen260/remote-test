// 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。

var fibonacci = (function () {
  var fib = [0, 1];   //初設一開始的動態陣列
  return function (n) {
    if (n >= fib.length)  //一開始的陣列長度，如果數列長度<=n 則不用計算
      for (var i = fib.length; i <= n; i++) {  
          // 從現有的陣列長度開始計算
          // 計算到n的下一個位置
        fib[i] = fib[i - 1] + fib[i - 2];
        // 費氏數列的第i個位置上個的值相加上上個第i個位置的值
      }
    return fib[n];
  };
})();


