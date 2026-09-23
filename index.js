let myLeads = []
let inputEl = document.getElementById("input-el")
let inputButton = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-l")
let mylead = `["www.google.com]`

inputButton.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''  
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    console.log("myLeads")
})
function renderLeads() {
    
    lead = myLeads.length - 1
    let a = document.createElement("a")
    lead = myLeads[lead]
    a.href = "lead"
    a.target="_blank"
    a.textContent = lead
    let li = document.createElement("li")
    li.appendChild(a)
    ulEl.appendChild(li)
}
