const inputInformation = document.getElementById("input-el")
const addButton = document.getElementById("add-btn")
const saveButton = document.getElementById("save-btn")
const deleteButton = document.getElementById("delete-btn")
let myLeads =[]
const myUnorderList = document.getElementById("unorderList-el")

//gets the stored arrays
const leadsFromLocalStorage =JSON.parse( localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
myLeads =leadsFromLocalStorage
renderMyList(myLeads)
}

//addEventListners
addButton.addEventListener("click", addLeads)
saveButton.addEventListener("click",saveBtn)
deleteButton.addEventListener("dblclick",deleteInfo)


//functions
//add urls to my list
function addLeads() {
    myLeads.push(inputInformation.value)
    inputInformation.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderMyList(myLeads)   
}

//saves My urls
function saveBtn() {
    chrome.tabs.query({active: true, currentWindow: true,}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderMyList(myLeads) 
    
})
}

//delete from localStorage
function deleteInfo() {
    localStorage.clear()
    myLeads =[]
    renderMyList(myLeads)
}

//render out my input
function renderMyList(leads) {
    let listItems = ""
for (let i = 0; i < leads.length; i++) {
    listItems  += `
    <li>
    <a target= '_blank' href=${ leads[i] }> ${ leads[i] }
    </a>
    </li>`  
  
}
myUnorderList.innerHTML = listItems
}


