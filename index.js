let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-l")
const leadsFromLocalStorage = localStorage.getItem("myLeads")
let actualItem = leadsFromLocalStorage ? JSON.parse(leadsFromLocalStorage) : null
let deleteButton = document.getElementById("delete-btn")

if (actualItem) {
    myLeads = actualItem
    renderLeads()
}

else console.log("falsy value")

inputButton.addEventListener("click", () => {
    let inputValue = inputEl.value.trim()
    if (inputValue) {
        myLeads.push(inputValue)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads()

    }
})

function renderLeads() {
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

deleteButton.addEventListener("click",()=>{
        localStorage.removeItem("myLeads")
        myLeads.length=0
        renderLeads()
})