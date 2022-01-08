var num = 13;
console.log(num);

//function

function max(n1,n2){
    if(typeof n1 === "number" && typeof n2 ==="number"){
    if(n1>n2){
        console.log(n1 + " is greeter than " + n2)
    }else if (n1<n2){
        console.log(n1 + " is smaller than " + n2)
    }else{
        console.log(n1 + " is equal to " + n2)
    }
}else{
    console.log("n1 or n2 must be a number!")
}
}
max(3, "Youcef")  

// math functions

function finalscore(){
var algeriaScore = Math.round(Math.random() *  4);
var tunisiaScore = Math.round(Math.random() * 4);
// var algeriaScore2 = Math.round(Math.random() * 5);
// var tunisiaScore2 = Math.round(Math.random() * 5);
console.log("Algeria "+algeriaScore +" - "+ tunisiaScore + " Tunisia");
// console.log("Algeria "+algeriaScore2 + " - "+ tunisiaScore2 + " Tunisia");

}
finalscore()


// linked to html

var dzscore = document.getElementById("scoreDZ"); 
var tnscore = document.getElementById("scoreTN");
var prdct = document.getElementById("prdct");

function predictscoredz(){
    return Math.round(Math.random() * 4)
}
function predictscoretn(){
    return Math.round(Math.random() * 4)
}


dzscore.style.textAlign ="center";
dzscore.style.fontSize = "30px";
tnscore.style.textAlign = "center";
tnscore.style.fontSize ="30px";
dzscore.innerHTML = "0";
tnscore.innerHTML = "0";

prdct.addEventListener("click", clicked)

function clicked(){
    var dz = predictscoredz();
    var tn = predictscoretn();
    dzscore.innerHTML = dz;
    tnscore.innerHTML = tn ;
}











