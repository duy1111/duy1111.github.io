
document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    ten = document.getElementById("full-name").value;
    tuoi = document.getElementById("age").value;
    document.getElementById("result").innerHTML += "Ten: " + ten + " ,tuoi: " + tuoi + "<br>";
}
