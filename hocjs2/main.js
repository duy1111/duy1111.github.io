// // function anCom(task){
// //     console.log("An com ne");
// //     return 3;
// // }
// // function ruaChen(soChen){
// //     console.log("Dang rua chen")
// // }
// // anCom();
// // ruaChen(3);
// // unNuoc = () => {
// //     console.log("Dang uong nuoc");
// // }
// // unNuoc();
// let promise = new Promise(function(resolve, reject) {
// //     setTimeout(() => resolve("done"), 1000);
// //   });
// function kiemtra(na){
//   na = String(na); //chuyển về chuổi để tránh null 
//   if(na.length==0){
//       return false;
//   }
//   for(let i = 0; i<na.length;i++){
//       if(na.charCodeAt(i)>=48&&na.charCodeAt(i)<=57){
//           return false;
//       }
//   }
//   return true;
// }
// document.getElementById("form").onsubmit = (e) => {
//   e.preventDefault();
//   ten = document.getElementById("full-name").value;
//   if(kiemtra(ten)){
//       document.getElementById("result").innerHTML += "Ten: " + ten;
//   }
// }

// var a =1;
// var b =2;
// var result = NaN|| null||'C'||'D';
// console.log('result =',result)
// var fullName = 'Duy "Mai"';
// var lastName = "ga";
// console.log(`"dark wa:" ${fullName} ${lastName}`);
var myString = 'Mai Xuan Duy';
console.log(myString.length);
console.log(myString.indexOf('Du'));
console.log(myString.slice(4,8)); 