let myLeads = []
let inputEl = document.getElementById("input-el")
let inputButton = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-l")

inputButton.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ''
})
function renderLeads() {
    let listItems = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItems
}
