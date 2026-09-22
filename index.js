let myLeads = []
let inputEl = document.getElementById("input-el")
let inputButton = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-l")

inputButton.addEventListener("click", () => {
    myLeads.push(inputEl.value)
     inputEl.value = ''
    renderLeads()
})
function renderLeads() {
    
    lead = myLeads.length - 1
    let a = document.createElement("a")
    lead = myLeads[lead]
    a.href = "lead"
    a.textContent = lead
    let li = document.createElement("li")
    li.appendChild(a)
    ulEl.appendChild(li)
}
