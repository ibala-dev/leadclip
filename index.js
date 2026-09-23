let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-l")
const leadsFromLocalStorage = localStorage.getItem("myLeads")
let actualItem = leadsFromLocalStorage ? JSON.parse(leadsFromLocalStorage) : null
let deleteButton = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")

tabBtn.addEventListener("click", () => {
    let currentTab = window.location.href
    myLeads.push(currentTab)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()
})

if (actualItem) {
    myLeads = actualItem
    render()
}

function render() {
    ulEl.innerHTML=''
    myLeads.forEach(lead => {
        let a = document.createElement("a")
        a.href = "#"
        a.target = "_blank"
        a.textContent = lead
        let li = document.createElement("li")
        li.appendChild(a)
        ulEl.appendChild(li)

    });
}

inputButton.addEventListener("click", () => {
    let inputValue = inputEl.value.trim()
    if (inputValue) {
        myLeads.push(inputValue)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render()

    }
})

deleteButton.addEventListener("click", () => {
    localStorage.removeItem("myLeads")
    myLeads = []
    render()
})