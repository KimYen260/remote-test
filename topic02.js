// 使用 Linked List 實作 Stack ，實作需包含以下方法。
//  push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。

function Stack() {
  var list = [];
  this.push = function (item) {
    list.push(item);
  };
  this.pop = function () {
    return list.pop();
  };
  this.size = function () {
    return list.length;
  };
}
