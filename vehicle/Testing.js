const mongoose = require("mongoose");
const userBetsSchema = require("../models/UserBets");
const League = mongoose.model("League");

var unirest = require("unirest");
const api_url =  "https://brokersports.ddns.net/api/v2/"



// req.query({
// 	"id": "686348"
// });
// req.query({
// 	"live": "all",
// 	"league": "384"
// });
exports.Testing = function () {
  var req = unirest("GET", api_url);
req.query({

});


req.headers({
	"ApiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTgyNDYzMmYzYjVmODQ1YTAzOTk0MTciLCJpYXQiOjE2MzU5MzU0NTMsImV4cCI6MTczMDU0MzQ1M30.oX-q2X8m3pownU12z7DP90Y-UbpbNlppUeziLw3AFE4",
	"useQueryString": true
});


req.end(function (res) {
  console.log(res);
})
}




// function bef (before, value, m ,n){
//     for(var m=0;m<=i;i++){
//         for(var n=0;n<=l;l++){
//           value=value-before[n][m]
//         }
//       }
//      return value
//       }

// }
// function solution(S, C) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let arr = S.split("\n").map(a=> a.split(","))
//     let iCol = 0
//     while(!arr[0][iCol].includes(C)){
//         iCol++;
//     }
//     var max = arr[1][iCol]
//     for(var i=1;i<arr.length;i++){
//         if(arr[i][iCol]>max){
//             max = arr[i][iCol];
//         }
//     }
// return max;
// }

// function A(){
//     let number=1;
//     let counter = 0;
//     let arr=S.split(" ")

//     while(number<=N) { if (arr.find(number=> number.includes(number + "B") || number.includes(number + "C")|| number.includes(number + "D")|| number.includes(number + "E")).FirstOrDefault()==null)
//         {
//             arr.addRange(number.toString() + "B", number + "C",number + "D" , number + "E");
//             counter++;
//         }

//         if (arr.find(number=> number.includes(number + "F") || number.includes(number + "G")|| number.includes(number + "H")|| number.includes(number + "J")).FirstOrDefault()==null)
//         {
//             arr.addRange(number + "F", number + "G",number + "H" , number + "J");
//             counter++;
//         }

//         if (arr.find(number=> number.includes(number + "D") || number.includes(number + "E")|| number.includes(number + "F")|| number.includes(number + "G")).FirstOrDefault()==null)
//         {
//             arr.addRange(number + "D", number + "E",number + "F" , number + "G");
//             counter++;
//         }

//         number++;
//     }

//     return counter;
// }
