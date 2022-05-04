const divEl = document.getElementById("container")

divEl.innerHTML = "<button onclick= buy()>"+ "BUY!" +"</button>"

function buy() {
    divEl.innerHTML += "<p>" +"Thank you for buying" + "</p>"
    
}