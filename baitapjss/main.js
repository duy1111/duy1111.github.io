function result(){
  bai1();
  bai2();
  bai3();
  bai4();
  bai5();
  bai6();
  bai7();
  bai8();
  bai9();
  bai10();
}

function bai1(){
  let output = document.getElementById("output1");


  var today = new Date();
  output.innerHTML = today;
}

function bai2(){
  let output = document.getElementById("output2");
  var day = today.getDate();
  var thang = today.getMonth();
  var nam = today.getUTCFullYear();
  output.innerHTML ="<br>" +
  "mm-dd-yyyy: " +
  thang +
  "-" +
  day +
  "-" +
  nam +
  "<br>" +
  "mm/dd/yyyy: " +
  thang +
  "/" +
  day +
  "/" +
  nam +
  "<br>" +
  "dd-mm-yyyy: " +
  day +
  "-" +
  thang +
  "-" +
  nam +
  "<br>" +
  "dd/mm/yyyy: " +
  day +
  "/" +
  thang +
  "/"  +
  nam +
  "<br>";
}

function bai3(){
  let output = document.getElementById("output3");
  let kitu = document.getElementById("input3").value;
  kitu = String(kitu);
  function check(str){
  for(let i = 0;i <kitu.length-1;i++){
  if(kitu.charCodeAt(i)>kitu.charCodeAt(i+1)){
      return 'khong tang';
    }
  }
  return 'tang';
}
  var kitus =check(kitu);
  output.innerHTML = kitus;
}

function bai4(){
  let str = document.getElementById('input4')
function change(str){
  var res ='';
  for(let i = 0;i <str.length;i++){
 
    res += String.fromCharCode(str.charCodeAt(i)+1)
  }
  return res;
}
console.log(change(str));
}

function bai8(){
  var month = 3;
function tg(a){
  if(a===1){
    return 	'January';
  }
  if(a===2){
    return 'February';
  }if(a===3){
    return 'March';
  }if(a===4){
    return 'April';
  }if(a===5){
    return 'May';
  }if(a===6){
    return 'June';
  }if(a===7){
    return 'July';
  }if(a===8){
    return 	'August';
  }if(a===9){
    return 'September' ;
  }if(a===10){
    return 'October';
  }if(a===11){
    return 'November';
  }if(a===12){
    return 'December';
  }if(a<1||a>12){
    return -1;
  }
}
console.log(tg(month));var month = 3;
function tg(a){
  if(a===1){
    return 	'January';
  }
  if(a===2){
    return 'February';
  }if(a===3){
    return 'March';
  }if(a===4){
    return 'April';
  }if(a===5){
    return 'May';
  }if(a===6){
    return 'June';
  }if(a===7){
    return 'July';
  }if(a===8){
    return 	'August';
  }if(a===9){
    return 'September' ;
  }if(a===10){
    return 'October';
  }if(a===11){
    return 'November';
  }if(a===12){
    return 'December';
  }if(a<1||a>12){
    return -1;
  }
}
console.log(tg(month));
}

function bai6(){
  let max =0;
let input=[1,3,4,2,4,2,3,4];
for(let i =0;i<input.length;i++){
  let dem =0;
  for(let j =0;j<input.length;j++){
    if(input[i]===input[j]){
      dem++;
    }
  }
  if(dem>max){
    max=dem;
  }
}
console.log(max);
}

function bai5(){
  var chuoi = 'maixuanduy1'
if(chuoi.length>5||chuoi.length%2===0){
  let n = (chuoi.length-1)/2
   console.log(chuoi.slice(n-1, n+2))
}
else{
  console.log('sai');
}
}

function bai7(){
  var e = 'dang hoc java ne'
function checker (str){
  return e.includes('java');
}
console.log(checker(e));
}
function bai9(){
  var g = 'tim chu dai nhat ne'
var long = g.split(' ');
let k=0;
let maxs=long[0].length;
for(let i=0;i<long.length;i++){
   if(long[i].length>maxs){
     maxs=long[i].length;
     k=i;
   }
}
console.log(long[k]);
}
function bai10(){
  let a=10;
let b=20;
let flag;
for(let i =a;i<b;i++){
  flag=1;
  for(let j=2;j<i;j++){
    if(i%j===0){
      flag=0;
      break;
    }
    
  }
  if(flag===1){
  console.log(i);
  }
}
}



