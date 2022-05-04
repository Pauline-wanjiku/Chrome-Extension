//get the elements
//submit button
//Selectors
const greetingMsg = document.getElementById("greeting-msg")
const displayResults = document.getElementById("displayResults")
const submitBtn = document.getElementById("submitBtn")


//addeventlistener
submitBtn.addEventListener("click", averageNumber)
       


//function
function getFirst(arr) {
     return arr[0]
    
}
let firstArray =  getFirst([8,5,2])
console.log(firstArray);

function greetings(introduction,nameOfPerson){
    greetingMsg.textContent = `${introduction}, ${nameOfPerson}`

}         //arguments
greetings("Welcome","Pauline")
function averageNumber() {
let firstNumber = parseFloat(document.getElementById("first-Number").value)
let secondNumber = parseFloat(document.getElementById("second-Number").value)
   firstNumber.value = ""
    secondNumber.value = ""
getAverage(firstNumber,secondNumber)


}
function getAverage(firstNumber,secondNumber) {
    averageTotal = (firstNumber + secondNumber)/2
    displayResults.textContent +=averageTotal
 
    
    
}
