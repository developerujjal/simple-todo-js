let count = 0;
document.getElementById("btn-addTask").addEventListener("click", function(){
    let textInputFieldElement = document.getElementById("text-field");
    let textInputFieldValue = textInputFieldElement.value;
    
    document.getElementById("text-field").value = "";

    let newElement = document.createElement("tr");
    newElement.innerHTML = `
    
    <td>${count += 1}</td>
    <td>${textInputFieldValue}</td>
    <td>
    <button class="button-done">DONE</button>
    <button class="button-delete button-done">DELETE</button>
    </td>
    
    `

    let selectTableBodyElement = document.getElementById("tbody");
    selectTableBodyElement.appendChild(newElement)
})