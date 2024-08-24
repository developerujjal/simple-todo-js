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
    <button id="btn-done" class="button-done done-button">DONE</button>
    <button class="button-delete button-done done-delete">DELETE</button>
    </td>
    
    `

    let selectTableBodyElement = document.getElementById("tbody");
  

    if(textInputFieldValue.length > 0){
        selectTableBodyElement.appendChild(newElement)
    }



    // done button
    let btns = document.querySelectorAll(".done-button");
    for(let btn of btns){
        btn.addEventListener("click", function(e){
            let selectLocation = e.target.parentElement.parentElement;
            
            // Add underline class to Number and Description columns
            selectLocation.querySelector('td:nth-child(1)').classList.add('underline');
            selectLocation.querySelector('td:nth-child(2)').classList.add('underline');
        })
    }


    //delete button

    let deleteBtns = document.querySelectorAll(".done-delete");
    for(let deleteBtn of deleteBtns){
        deleteBtn.addEventListener("click", function(e){
            let row = e.target.parentElement.parentElement;

            // row.querySelector("td:nth-child(1)");
            // row.querySelector("td:nth-child(2)");

            // row.classList.add("class", "display")

            row.remove();

        })
    }


})



document.getElementById("btn-clearAll").addEventListener("click", function(){
   let tableTrElements = document.querySelectorAll("#tbody tr");
   for(let tableTrElement of tableTrElements){
    tableTrElement.remove();
   }
//    tableTrElement.remove();
})
