CheckName = (fullname) =>{
    fullname = String(fullname);
    for(let i =0 ;i<ten.lenght;i++){
        if(fullname.charCodeAt(i)>=48 && fullname.charCodeAt(i)<=57) return false;
    }
    return true;
}
document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    ten = document.getElementById("full-name").value;
    tuoi = document.getElementById("age").value;
    document.getElementById("result").innerHTML += "Ten: " + ten + " ,tuoi: " + tuoi + "<br>";
}
