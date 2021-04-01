function kiemtra(na, age){
    na = String(na); //chuyển về chuổi để tránh null 
    if(na.length==0){
        return false;
    }
    if(age.length==0){
        return false;
    }
    if(age<=0||age>=100){
        return false;
    }
    for(let i = 0; i<na.length;i++){
        if(na.charCodeAt(i)>=48&&na.charCodeAt(i)<=57){
            return false;
        }
    }
    return true;
}
document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    ten = document.getElementById("full-name").value;
    tuoi = document.getElementById("age").value;
    if(kiemtra(ten,tuoi)){
        document.getElementById("result").innerHTML += "Ten: " + ten + " ,tuoi: " + tuoi + "<br>";
    }
    else alert('nhap sai'); 
}
