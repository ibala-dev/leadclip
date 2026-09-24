let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-l")
const leadsFromLocalStorage = localStorage.getItem("myLeads")
let actualItem = null

let deleteButton = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")

try {
    actualItem = JSON.parse(localStorage.getItem("myLeads"))
} catch (e) {
    localStorage.removeItem("myLeads")
}

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render()
    })
})

if (actualItem) {
    myLeads = actualItem
    render()
}

function render() {
    ulEl.innerHTML = ''
    myLeads.forEach(lead => {
        let a = document.createElement("a")
        a.href = "lead"
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
    localStorage.clear()
    myLeads = []
    render()
})