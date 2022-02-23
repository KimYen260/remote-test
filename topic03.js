// 將下列輸入資料整合成期望的輸出結果。
// 輸入資料:
const userIds = ['U01', 'U02', 'U03'];
const orderIds = ['T01', 'T02', 'T03', 'T04'];
const userOrders = [			
  { userId: 'U01', orderIds: ['T01', 'T02'] },
 	{ userId: 'U02', orderIds: [] },
 	{ userId: 'U03', orderIds: ['T03'] },
];
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' } 
const orderData = {						
    'T01': { name: 'A', price: 499 }, 
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 }, 
    'T04': { name: 'D', price: 799 }
} 

//解答如下
let result = [];
for(let i =0; i< userIds.length; i++){
  
let findData= userOrders.find((element) => element.userId == userIds[i])
let temp_orderIds = findData.orderIds;
  
 let la_order =[]
 for(let j=0;j<temp_orderIds.length;j++){
   la_order.push({
     id:temp_orderIds[j],
     name:orderData[temp_orderIds[j]].name,
     price:orderData[temp_orderIds[j]].price
   })
 }
 
  
  let item ={
        user: { id: userIds[i], name: userData[userIds[i]] }, 
        orders: la_order
  }
  
  result.push(item)
  
}

console.log(result)


