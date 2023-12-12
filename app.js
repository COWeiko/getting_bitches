function generateP(){
    let value1 = document.querySelector("#value1").value;
    let value2 = document.querySelector("#value2").value;
    let score = Math.floor(Math.random() * 101);
   
    
    if(value1 =="" || value2 =="" ){
        alert("tekts nav savadīts, punduri")
    } else {
        document.querySelector("#score-text").style.visibility = "visible";
        document.querySelector("#score-text").innerText = score;
    }
}